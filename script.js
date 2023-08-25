const images = [
      { url: 'image1.jpg' },
      { url: 'image2.jpg' },
      { url: 'image3.jpg' }
      // Add more image URLs as needed
    ];

    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
        img.src = url;
      });
    }

 document.getElementById('download-images-button').addEventListener('click', async () => {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = ''; // Clear previous images

      try {
        const imageElements = await Promise.all(images.map(image => loadImage(image.url)));
        
        imageElements.forEach(imageElement => {
          outputDiv.appendChild(imageElement);
        });
      } catch (error) {
        console.error(error);
      }
    });