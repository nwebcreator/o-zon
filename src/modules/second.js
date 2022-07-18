import getData from "./getData";

const second = () => {
    const cartBtn = document.getElementById('cart')

    cartBtn.addEventListener('click', () => {
        getData().then((data) => {
            console.log(gata);
        });
    })
}

export default second;