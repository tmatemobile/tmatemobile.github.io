// Access the input and output elements by initializing them to their own respective variable
const input = document.querySelector("input");
const output = document.querySelector("output");
let imagesArray = [];

// Attach a change event to the input field so it can detect whenever the user uploads an image.
// Every time they do, access the image through input.files and store it in a variable named file.
document.querySelector("#myFileInput").addEventListener("change", () => {
    // Save image locally
    const reader = new FileReader();
    reader.addEventListener("load", () => {console.log(reader.result)});
    reader.readAsDataURL(this.files[0]);

    //const file = input.files;
    //imagesArray.push(file[0]);
    //displayImages();
});

// For each image, create a div with a class name of image and a img tag that holds the URL for the image.
// Creating a URL for an image is easy, just pass the image as a parameter into URL.createObjectURL.
// Also create a function named deleteImage that removes the image from the screen.
function displayImages() {
    let images = "";
    imagesArray.forEach((image, index) => {
        images += `<div class="image">
                        <img src ="${URL.createObjectURL(image)}" alt="image">
                        <span onclick="deleteImage(${index})">&times;</span>
                    </div>`
    })
    output.innerHTML = images;
}

function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages();
}