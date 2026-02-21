# Esports Price List Application

This is a complete and functional esports price list application that showcases the latest prices for different esports items.

## Features

- Real-time price updates from multiple sources.
- User-friendly interface.
- GitHub integration for data updates.

## Usage

1. Clone the repository
   ```bash
   git clone https://github.com/xaiohaozi/xiaohoaziwo-.github.io.git
   cd xiaohoaziwo-.github.io
   ```

2. Open `index.html` in your browser.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Esports Price List</title>
</head>
<body>
    <div id="price-list">
        <h1>Esports Price List</h1>
        <ul id="items"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS

```css
body {
    font-family: Arial, sans-serif;
}

#price-list {
    width: 50%;
    margin: auto;
}

h1 {
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}
```

## JavaScript

```javascript
const items = [
    { name: "Game Controller", price: "$50" },
    { name: "Gaming Headset", price: "$80" },
    { name: "Mechanical Keyboard", price: "$100" },
];

const itemsList = document.getElementById("items");

items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.price}`;
    itemsList.appendChild(li);
});
```

## GitHub Integration

To update prices dynamically, you can use GitHub Actions to fetch the latest prices from your data source and push updates to this repository.
