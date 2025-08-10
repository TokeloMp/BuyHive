document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const paymentTableBody = document.getElementById('paymentTableBody');

    const payments = [
        {
            id: 'TXN1001',
            customer: 'Alice Brown',
            method: 'Credit Card',
            amount: 'R1699.99',
            status: 'Paid',
            fee: 'R18.35'
        },
        {
            id: 'TXN1002',
            customer: 'Bob Smith',
            method: 'PayPal',
            amount: 'R1799.99',
            status: 'Pending',
            fee: 'R7.35'
        },
        {
            id: 'TXN1003',
            customer: 'Tom Daniels',
            method: 'Bank Transfer',
            amount: 'R1599.99',
            status: 'Failed',
            fee: 'R0.00'
        }
    ];

    function renderPayments() {
        paymentTableBody.innerHTML = '';
        payments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.customer}</td>
            <td>${payment.method}</td>
            <td>${payment.amount}</td>
            <td>${payment.status}</td>
            <td>${payment.fee}</td>
            `;
            paymentTableBody.appendChild(row);
        });
    }

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    }

    renderPayments();
});