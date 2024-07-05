# Image Gallery Azure Blob Storage

## What is Azure Blob Storage?

Azure Blob Storage is a Microsoft Azure cloud-based object storage solution. It enables developers to use blobs to store and manage unstructured data such as documents, photos, videos, backups, and logs. Blobs can be grouped together to form containers, providing a scalable and cost-effective method for storing and retrieving massive amounts of data.

## Programming Languages for Consuming Azure Blob Storage

Users or client applications can access objects in Blob Storage via HTTP/HTTPS, from anywhere in the world. Objects in Blob Storage are accessible via the Azure Storage REST API, Azure PowerShell, Azure CLI, or an Azure Storage client library. Client libraries are available for different languages, including:

- **JavaScript (Node.js)**: Utilize the Azure Storage Blob client library for JavaScript to interact with Blob Storage from web applications built with React.js or server frameworks.
- **C# (.NET)**: Use the Azure SDK for .NET to build .NET-based applications that interact with Blob Storage.
- **Python**: The Azure SDK for Python enables Python developers to integrate Blob Storage functionality into their applications.
- **Java, Go, and more**: Azure Blob Storage provides SDKs for multiple programming languages, enabling broad language support.

## Pre-requisites

1. Azure subscription. If you’re a student, redeem Azure for Students, or create a free account.
2. Node.js installed on your machine.
3. Visual Studio Code (VS Code).

## Procedure

1. **Provision Azure Blob Storage**:
   - Go to the Azure portal and create a new Blob Storage account.
   - Create a container within your Blob Storage account to hold your images.

2. **Clone this repository**:
   ```bash
   git clone https://github.com/18-ashish-sharma/react-photo-gallery.git
   cd react-photo-gallery
   ```

3. **Update Environment Variables**:
   - Change the values of the `.env` variables to match the values from your Azure Storage account.

4. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn
   ```

5. **Run the Application**:
   ```bash
   npm start
   # or
   yarn start
   ```
   - View your live app at [http://localhost:5173/](http://localhost:5173/).

## Features

### Homepage

- **Banner**: A banner with a background image and the names of the couple.
- **Navigation**: Links to the homepage, images, and videos.
- **Text Section**: Displays the wedding date.
- **Autoplaying Audio**: Soothing background music that plays automatically.

### Sections

- **Us**: Photos and captions about the couple.
- **Family**: A section with a slideshow of family images and a description emphasizing the importance of family blessings in Indian culture.

## How to Create a Static Web App

1. **Create a Static Web App in Azure**:
   - Navigate to the Azure portal.
   - Search for "Static Web Apps" and click "Create".
   - Fill in the required details, including resource group, name, region, and repository details if you are using GitHub or another source control system.

2. **Build and Deploy**:
   - Connect your repository and branch.
   - Specify the build settings, usually found in your build configuration file (e.g., `build` folder for React apps).
   - Review and create the Static Web App.

3. **Access Your Static Web App**:
   - Once deployed, your static web app will have a URL like `https://<appname>.azurestaticapps.net`.

## How to Create a SAS Token

1. **Generate a SAS Token in Azure**:
   - Go to your Blob Storage account in the Azure portal.
   - In the left-hand menu, click on "Shared access signature".
   - Specify the allowed permissions, services, and expiry date/time for your SAS token.
   - Click on "Generate SAS and connection string".

2. **Use the SAS Token**:
   - Copy the SAS token URL or connection string provided.
   - Use this token in your application to securely access Blob Storage resources.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.
