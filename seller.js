const productList = document.getElementById('productList');
const uploadForm = document.getElementById('uploadForm');
const mostSoldCard = document.getElementById('mostSoldCard');
const notificationList = document.getElementById('notificationList');

let products = [];
let notifications = [];

function updateProductList() {
    productList.innerHTML = '';
    if (products.length === 0) {
        productList.innerHTML = '<li>No products uploaded yet.</li>';
        mostSoldCard.innerHTML = '<p>No data yet.</p>';
        return;
    }

    const mostSold = products.reduce((max, p) => (p.sales > max.sales ? p: max), products[0]);
    mostSold.innerHTML =`
    <h3>${mostSold.name}</h3>
    <img src="${mostSold.image}" alt="${mostSold.name}" style="max-width: 100px; border-radius: 6px; margin: 0.5rem 0;" />
    <p>Sales: ${mostSold.sales}</p>
    <p>Price: ${mostSold.price}</p>
    `;


    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <strong>${product.name}</strong>
            <p>Price: R${product.price}</p>
            <p>Sales: ${product.sales}</p>
            <button onclick="removeProduct(${index})">Remove</button>
        `;
        productList.appendChild(li);
    });
}

function removeProduct(index) {
    const removed = products.splice(index, 1)[0];
    notifications.unshift(`Product removed: ${removed.name}`);
    renderNotifications();
    updateProductList();
}

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('productName').ariaValueMax;
    const price = parseFloat(document.getElementById('productPrice').value);
    const sales = parseInt(document.getElementById('productSales').value || '0');
    const imageFile = document.getElementById('productImage').files[0]

    if (name && !isNaN(price) && imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageData = e.target.result;
            products.push({ name, price, sales, image: imageData});
            notifications.unshift(`New product uploaded: ${name}`);
            uploadForm.reset();
            renderNotifications();
            updateProductList();
        };
        reader.readAsDataURL(imageFile);
    }
});

function renderNotifications() {
    notificationList.innerHTML = '';
    if (notifications.length === 0) {
        notificationList.innerHTML = '<li>No new notifications</li>';
        return
    }
    notifications.slice(0, 5).forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notificationList.appendChild(li)
    });
}

setInterval(() => {
    if (products.length > 0) {
        const randomIndex = Math.floor(Math.random() * products.length);
        products[randomindex].sales += 1;
        notifications.unshift(`product purchased: ${products[randomIndex].name}`);
        renderNotifications();
        updateProductList();
    }
}, 10000);

updateProductList();
renderNotifications();