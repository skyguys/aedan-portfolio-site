
// Creates modal object for showing images.
const modal = new bootstrap.Modal(document.getElementById("imageViewer"));
// Gets the div hosting the modalviewer
const modalImg = document.getElementById("modalImage");
// Get div hosting the images itself
const imagesGallery = document.getElementById("images");


function onClick(img){
    modalImg.src = img.src;
    modal.show();
}

function createImages(){

    // Data for image loop
    const filepath = "./../img/photos/img";
    const file_extension = ".jpg";
    const num_images = 92;
    const imageNumbers = [];

    // Create array for sampling
    for (let i = 0; i < num_images; i++){
        imageNumbers[i] = i;
    }

    for (let i = 0; i < num_images; i++){

        // Create image object and add listener
        let img = document.createElement("img");
        img.addEventListener("click", function() { onClick(img)});

        // Choose random image to add. Selects an index randomly
        const randomImage = Math.floor(Math.random() * imageNumbers.length);
        // console.log(imageNumbers, randomImage, imageNumbers[randomImage]);

        // Change image source
        img.src = filepath + imageNumbers[randomImage] + file_extension;

        // Remove the value from the array
        imageNumbers.splice(randomImage, 1);
    
        console.log(img.src + " created and added to HTML.");
        img.className = "img-fluid gallery-img";

        // Add to div
        imagesGallery.append(img);
    }
}

createImages();