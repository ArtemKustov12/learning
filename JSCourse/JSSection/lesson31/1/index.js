// add image

const addImageWithPromise = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () =>
      reject(new Error("Image load failed"))
    );
  });

  return p;
};

const imgSrc = "https://picsum.photos/400";

const resultPromise = addImageWithPromise(imgSrc);

resultPromise
  .then((data) => {
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `Image size: ${data.width} x ${data.height}`;
  })
  .catch((error) => console.log(error));
