
// Creates modal object for showing images.
const modal = new bootstrap.Modal(document.getElementById("imageViewer"));
// Gets the div hosting the modalviewer
const modalImg = document.getElementById("modalImage");

function onClick(img){
    modalImg.src = img.src;
    modal.show();
}

// Get div hosting the images itself
const imagesGallery = document.getElementById("images");

function createImages(){

    // Data for image loop
    const filepath = "./../img/photos/img";
    const file_extension = ".jpg";
    const num_images = 92;

    for (let i = 0; i < num_images; i++){

        // Create image object and add listener
        let img = document.createElement("img");
        img.addEventListener("click", function() { onClick(img)});

        // Just for image formatting
        img.src = filepath + i + file_extension;
    
        console.log(img.src);

        img.className = "img-fluid gallery-img";

        // Add to div
        imagesGallery.append(img);
    }
}

createImages();