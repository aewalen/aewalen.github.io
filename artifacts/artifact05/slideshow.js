const myImages = [
  "https://media.istockphoto.com/id/1389862392/photo/womans-hand-stroking-a-ginger-cat-on-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=TMQAtS2lFCE-wODdtOxDNFTRGj4fmxpCEblSB0KqAOI=",
  "https://media.istockphoto.com/id/1188933024/photo/studio-shot-of-an-adorable-tabby-cat.jpg?s=1024x1024&w=is&k=20&c=GZdP9tm0c-mffl2W4CPrvH0nYXCpeegPOlcyxcH6ECU=",
  "https://media.istockphoto.com/id/105867148/photo/cute-cat-sunning-itself-happily-outdoors.jpg?s=1024x1024&w=is&k=20&c=OAZEk8NgzdAIMqNygbTtDRuOOF1ydEPb_4FvyK8uBfc=",
  "https://media.istockphoto.com/id/1273269534/photo/a-cat-sleeping-on-a-massage-table-while-taking-spa-treatments.jpg?s=1024x1024&w=is&k=20&c=KxXc7Zai3_dAiIy0hVM6n6hYZRs3caCPCt66fDXdKRo=",
  "https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.jpg?s=1024x1024&w=is&k=20&c=OSPrTJzZ7j3Wsb2FA4OQmbFQYah4SxPAT6RWNI12RgM=",
];

const captionImages = ["Catto", "Cat", "Kitty", "Kitten", "Cattate"];

var index = 0;

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  if (myImages.length == index + 1) index = 0;
  else index++;
  updateImage();
}

function back() {
  if (index === 0) index = myImages.length - 1;
  else index--;

  updateImage();
}

function autoSlide() {
  if (document.getElementById("auto").checked) next();
}

setInterval(autoSlide, 2000); // Next

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);
