document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const ordersTableBody = document.getElementById('ordersTableBody');

    //Dummy order data
    const orders = [
        {
            id: 'ORD001',
            customer: 'Alice Brown',
            product: 'Bluetooth Speaker',
            seller: 'John Tech',
            status: 'Processing'
        },
        {
            id: 'ORD002',
            customer: 'Bob Smith',
            product: 'Coffee Mug',
            seller: 'Jane Crafts',
            status: 'Shipped'
        },
    ];

    //Render table rows
    function renderOrders() {
        ordersTableBody.innerHTML = '';
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.seller}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="viewShop('${order.seller}')">View Shop</button>
                <button onclick="updateStatus('${order.id}')">Update</button>
            </td>
            `;
            ordersTableBody.appendChild(row);
        });
    }

    // Simulated action functions
    window.viewShop = function (sellerName) {
        alert(`Opening shop page for seller: ${sellerName}`);
        // Simulate redirection or modal
    };

    window.updateStatus = function (orderId) {
        const newStatus = prompt('enter new status for Order' + orderId + ':');
        const order = orders.find(o => o.id === orderId);
        if (order && newStatus) {
            order.status = newStatus;
            renderOrders();
        }
    };

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    renderOrders();
});