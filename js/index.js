
// Data for image loop
const filepath = "./img/photos/img";
const file_extension = ".jpg";
const num_images = 92;

const banner = document.getElementsByClassName("banner-bg")[0];

// From JS Documentation
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeBackground(){
    const bgID = getRandomInt(num_images+1);

    banner.style.backgroundImage = ("linear-gradient( rgba(85, 98, 99, 0.9), rgb(44, 53, 52, 0.9)), "
                                    + "url(" + filepath + bgID + file_extension + ")");
}

changeBackground();