const axios = require('axios');
const path = require('path');
const fs = require('fs');

const downloadImage = async (imageUrl, destinationPath) => {
  // Verifica se o arquivo já existe para evitar sobrescrever
  if (fs.existsSync(destinationPath)) {
    return; // Sai da função se o arquivo já existir
  }

  try {
    // Verifica se o diretório de destino existe e cria se não existir
    // const directory = path.dirname(destinationPath);
    // if (!fs.existsSync(directory)) {
    //   fs.mkdirSync(directory, { recursive: true });
    // }

    const response = await axios.head(imageUrl);
    if (response.status === 200) {
      const imageResponse = await axios.get(imageUrl, {
        responseType: 'stream',
        headers: { domain: 'https://www.bateriasgalileu.com.br/', Authorization: process.env.NEXT_POST_API_TOKEN }
      });
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
    const options = {
      method: 'GET',
      headers: {
        cookie: 'PHPSESSID=bba076addc9b9047314f141742125848',
        'User-Agent': 'insomnia/9.3.2',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQmF0ZXJpYXMgR2FsaWxldSJ9.aMHJS7LSROshuyXiByRYh-RtKa2g60DawTWSKySeG-k'
      }
    };

    const response = await fetch(
      'https://api-iai.bubowl.com.br/user/posts?domain=https%3A%2F%2Fwww.bateriasgalileu.com.br%2F&=',
      options
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .catch(err => console.error(err));

    const posts = response;
    if (Array.isArray(posts) && posts.length > 0) {
      for (const post of posts) {
        const imageUrl = post.img; // A URL real da imagem para download
        const jsonImageName = path.basename(post.json.img); // Nome da imagem baseado na propriedade `json.img`

        if (imageUrl && jsonImageName) {
          // Define o caminho de destino com o nome da imagem correta
          const destinationPath = path.join('public', '', jsonImageName);
          await downloadImage(imageUrl, destinationPath);
        } else {
          console.log('No image URL or image name found in the API response.');
        }
      }
    }
  } catch (error) {
    console.error(`Error fetching posts: ${error.message}`);
  }
};

getImageAndDownload();
