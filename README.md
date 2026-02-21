## Automatic Image URL Matching

This code automatically generates image URLs based on the navigation text in your cards by matching the card titles to the filenames of images stored in the `images` folder. For example, a card titled "0元购 · 首通自营" will look for image files named "0元购.jpg" or "0元购.png" in the `images` folder. Here's how it works:

```javascript
function getImageUrl(cardTitle) {
    // Format the card title to match the filename
    const formattedTitle = cardTitle.replace(/ · /g, '').trim(); // remove unwanted characters
    const imageFileNameJpg = `${formattedTitle}.jpg`;
    const imageFileNamePng = `${formattedTitle}.png`;

    // Check for presence of the image in the folder
    const imagePathJpg = `images/${imageFileNameJpg}`;
    const imagePathPng = `images/${imageFileNamePng}`;

    return imageExists(imagePathJpg) ? imagePathJpg : imageExists(imagePathPng) ? imagePathPng : null;
}

function imageExists(imagePath) {
    // This function checks if the image exists in the specified path
    // Implement your image checking logic here
}
```

This feature enhances user experience by ensuring that the images are dynamically matched to their corresponding card titles, allowing for a cleaner and more efficient code structure.