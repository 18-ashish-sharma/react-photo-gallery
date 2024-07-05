import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ImageGallery from "./pages/image-gallery";
import VideoGallery from "./pages/video-gallery";
import HomePage from "./pages/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/images" element={<ImageGallery />} />
        <Route path="/videos" element={<VideoGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
