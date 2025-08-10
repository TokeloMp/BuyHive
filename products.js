document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('productModal');
    const closeModal = document.getElementById('closeModal');
    const productForm = document.getElementById('productForm');
    const productTableBody = document.getElementById('productTableBody');

    let products = [
        { id: 1, name: 'Sneakers', seller: 'Jane Doe', category: 'Indoors'},
        { id: 2, name: 'Laptop', seller: 'John Tech', category: 'Electronics'}
    ];

    function renderTable() {
        productTableBody.innerHTML = '';
        products.forEach(p => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.seller}</td>
            <td>${p.category}</td>
            <td>
              <button onclick="editProduct(${p.id})">Edit</button>
              <button onclick="deleteProduct(${p.id})">Delete</button>
            </td>`;
            productTableBody.appendChild(row);
        });
    }

    window.editProduct = function(id) {
        const product = products.find(p => p.id === id);
        document.getElementById('productName').value = product.name;
        document.getElementById('productSeller').value = product.seller;
        document.getElementById('productCategory').value = product.category;
        modal.style.display = 'flex';
    }

    window.deleteProduct = function(id) {
        products = products.filter(p => p.id !== id);
        renderTable();
    }

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        productForm.reset();
    });

    productForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const seller = document.getElementById('productSeller').value;
        const category = document.getElementById('productCategory').value;

        const newProduct = {
            id: products.length + 1,
            name,
            seller,
            category,
        };

        products.push(newProduct);
        renderTable();
        modal.style.display = 'none';
    });

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    renderTable();
});