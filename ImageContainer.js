/*it depends of showConfirmationModal() to run*/

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(function (container) {
  const imageElement = container.querySelector('.image-element');
  const imageFile = container.querySelector('.image-file');
  const pencilIcon = container.querySelector('.pencil-icon');
  const trashIcon = container.querySelector('.trash-icon');
  const cancelIcon = container.querySelector('.cancel-icon');
  let originalImageURL = imageElement.src;

  if (!originalImageURL) {
    trashIcon.style.display = 'none';
  }

  pencilIcon.addEventListener('click', function () {
    imageFile.click();
  });

  imageFile.addEventListener('change', function () {
    const file = this.files[0];

    if (!file.type.match('image.*')) {
      alert('Please select a valid image file (jpg, png, or jpeg).');
      return;
    }

    const imageURL = URL.createObjectURL(file);
    imageElement.src = imageURL;
    cancelIcon.style.display = 'inline-block';
    trashIcon.style.display = 'none';
  });

  trashIcon.addEventListener('click', function () {
    showConfirmationModal(
      () => {
        const addressToGo = trashIcon.getAttribute('where-to-go');
        if (addressToGo) {
          if (typeof window[addressToGo.split('(')[0]] === 'function') {
            const functionName = addressToGo.split('(')[0];
            const functionParams = addressToGo.split('(')[1].split(')')[0];
            const functionCall = `${functionName}(${functionParams})`;

            eval(functionCall)
              .then(() => {
                // do something here after the function has completed, for example:
                console.log('function has completed');
              })
              .catch(error => {
                console.error(error);
              });
          } else if (
            addressToGo.startsWith('http://') ||
            addressToGo.startsWith('https://' )||
              addressToGo.startsWith('/')
          ) {
            window.location = addressToGo;
          } else {
            console.error(
              `The value of the where-to-go attribute is not a valid URL or function: ${addressToGo}`
            );
          }
        } else {
          cancelIcon.click();
        }
      }
    );
  });

  cancelIcon.addEventListener('click', function () {
    if (!originalImageURL) {
      trashIcon.style.display = 'none';
    } else {
      trashIcon.style.display = 'inline-block';
    }
    imageElement.src = originalImageURL;
    cancelIcon.style.display = 'none';
  });
});
 