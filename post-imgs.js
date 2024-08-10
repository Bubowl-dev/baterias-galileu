const path = require('path');

const downloadImage = async (imageUrl, destinationPath) => {
  // Verifica se o arquivo já existe para evitar sobrescrever
  if (fs.existsSync(destinationPath)) {
    return; // Sai da função se o arquivo já existir
  }

  try {
    // Verifica se o diretório de destino existe e cria se não existir
    const directory = path.dirname(destinationPath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

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
    const apiUrl = `https://api-iai.bubowl.com.br/user/posts?domain=https%3A%2F%2Fwww.bateriasgalileu.com.br%2F`;
    const response = await axios.get(apiUrl, { headers: getApiHeaders() });

    const posts = response.data;
    if (posts.length > 0) {
      posts.forEach(async post => {
        const imageUrl = post.img;

        if (imageUrl) {
          // Extrai o nome do arquivo da URL
          const fileName = path.basename(imageUrl);
          // Define o caminho de destino com o nome do arquivo
          const destinationPath = path.join('public', 'posts', fileName);
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
