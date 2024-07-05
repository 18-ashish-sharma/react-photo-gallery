import { useEffect, useState } from "react";
import "./style.css";
import { AiFillDelete } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import Placeholder from "../../assets/placeholder.jpeg";
import { BlobServiceClient } from "@azure/storage-blob";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const VideoGallery = () => {
  const [file, setFile] = useState(null);
  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  // Storage account credentials
  const account = import.meta.env.VITE_STORAGE_ACCOUNT;
  const sasToken = import.meta.env.VITE_STORAGE_SAS;
  const containerName = import.meta.env.VITE_VIDEO_CONTAINER; // Separate container for videos
  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net/?${sasToken}`
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Fetch all videos
  const fetchVideos = async () => {
    if (!account || !sasToken || !containerName) {
      alert(
        "Please make sure you have set the Azure Storage credentials in the .env file"
      );
      return;
    }
    try {
      setLoading(true);
      const blobItems = containerClient.listBlobsFlat();
      const urls = [];
      for await (const blob of blobItems) {
        const tempBlockBlobClient = containerClient.getBlockBlobClient(
          blob.name
        );
        urls.push({ name: blob.name, url: tempBlockBlobClient.url });
      }
      setVideoUrls(urls);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Save a video
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a video to upload");
      return;
    }
    if (!account || !sasToken || !containerName) {
      alert(
        "Please make sure you have set the Azure Storage credentials in the .env file"
      );
      return;
    }
    try {
      setLoading(true);
      const blobName = `${new Date().getTime()}-${file.name}`;
      const blobClient = containerClient.getBlockBlobClient(blobName);
      await blobClient.uploadData(file, {
        blobHTTPHeaders: { blobContentType: file.type },
      });
      await fetchVideos();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a video
  const handleDelete = async (blobName) => {
    if (!account || !sasToken || !containerName) {
      alert(
        "Please make sure you have set the Azure Storage credentials in the .env file"
      );
      return;
    }
    try {
      setLoading(true);
      const blobClient = containerClient.getBlockBlobClient(blobName);
      await blobClient.delete();
      fetchVideos();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <br />
      <br />
      <br />
      <div className="container">
        {loading && <Loading />}
        <h2>🎥 Video Gallery Azure Blob Storage 🎥</h2>
        <hr />
        <div className="row-form">
          <form className="upload-form">
            <div className="upload-form_display">
              {file ? (
                <video
                  className="displayVideo"
                  src={URL.createObjectURL(file)}
                  controls
                />
              ) : (
                <img className="displayImg" src={Placeholder} alt="nopic" />
              )}
            </div>
            <div className="upload-form_inputs">
              <label htmlFor="fileInput">
                <FaFileUpload />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit" onClick={handleSubmit}>
                Upload
              </button>
            </div>
          </form>
        </div>
        <div className="row-display">
          {videoUrls.length === 0 ? (
            <h3>😐 No Videos Found 😐</h3>
          ) : (
            videoUrls.map((blobItem, index) => (
              <div key={index} className="card">
                <video src={blobItem.url} controls />
                <h3 style={{ width: "90%" }}>{blobItem.name}</h3>
                <button
                  className="del"
                  onClick={() => handleDelete(blobItem.name)}
                >
                  <AiFillDelete />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
