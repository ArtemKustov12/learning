// add image

let width = 0;
let height = 0;

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback({ width, height });
  };

  imgElem.addEventListener("load", onImageLoaded);
};

const imageLoaded = ({ width, height }) => {
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `Image size: ${width} x ${height}`;
};

const imgSrc = "https://picsum.photos/400";
addImage(imgSrc, imageLoaded);
