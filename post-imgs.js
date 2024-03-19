const axios = require('axios');
const fs = require('fs');

const getApiHeaders = () => {
  return {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQmF0ZXJpYXMgR2FsaWxldSJ9.aMHJS7LSROshuyXiByRYh-RtKa2g60DawTWSKySeG-k'
  };
};

const downloadImage = async (imageUrl, destinationPath) => {
  try {
    const response = await axios.head(imageUrl);
    if (response.status === 200) {
      const imageResponse = await axios.get(imageUrl, { responseType: 'stream', headers: getApiHeaders() });
      imageResponse.data.pipe(fs.createWriteStream(destinationPath));
      return new Promise((resolve, reject) => {
        imageResponse.data.on('end', () => resolve());
        imageResponse.data.on('error', error => reject(error));
      });
    } else {
      throw new Error(`Image not found: ${imageUrl}`);
    }
  } catch (error) {
    throw new Error(`Failed to download image: ${error.message}`);
  }
};

const getImageAndDownload = async () => {
  try {
    const apiUrl = `https://api-iai.bubowl.com.br/user/posts`;
    const response = await axios.get(apiUrl, { headers: getApiHeaders() });

    const posts = response.data;
    if (posts.length > 0) {
      posts.forEach(async post => {
        const imageUrl = post.img;

        if (imageUrl) {
          const destinationPath = `public/teste/${post.json.link}.png`;
          await downloadImage(imageUrl, destinationPath);
          console.log('Image downloaded successfully!');
        } else {
          console.log('No image URL found in the API response.');
        }
      });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

getImageAndDownload();
