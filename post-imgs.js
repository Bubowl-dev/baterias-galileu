const axios = require('axios');
const fs = require('fs');

const getApiHeaders = () => {
  return {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQmF0ZXJpYXMgR2FsaWxldSJ9.aMHJS7LSROshuyXiByRYh-RtKa2g60DawTWSKySeG-k'
  };
};

const downloadImage = async (imageUrl, destinationPath) => {
  // Verifica se o arquivo já existe para evitar sobrescrever
  if (fs.existsSync(destinationPath)) {
    console.log(`File already exists: ${destinationPath}`);
    return; // Sai da função se o arquivo já existir
  }

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
          // Ajusta o caminho para incluir a pasta `teste` e usa o link do post como nome do arquivo
          const destinationPath = post.json.img.includes('/posts')
            ? `public${post.json.img}`
            : `public/posts/${post.json.img}`;
          await downloadImage(imageUrl, destinationPath);
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
