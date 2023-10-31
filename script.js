// Function to generate a random HTTP Cat image
function generateRandomCat() {
    const catImage = document.getElementById('cat-image');
    const statusCodes = [200, 201, 204, 400, 401, 403, 404, 500, 503];
    const randomStatusCode = statusCodes[Math.floor(Math.random() * statusCodes.length)];

    catImage.src = `https://http.cat/${randomStatusCode}`;
}

// click event listener to the generate button
const generateButton = document.getElementById('fetch-button');
generateButton.addEventListener('click', generateRandomCat);
