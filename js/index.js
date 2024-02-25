const cartBtn = document.querySelector('#cart');
const cartModal = document.querySelector('.cart');
const cartCloseBtn = document.querySelector('.cart-close');

cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

cartCloseBtn.addEventListener('click', () => {
    cartModal.style.display = '';
});