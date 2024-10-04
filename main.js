import '/assets/scss/style.scss';

// MENU BURGER
function openNav(event) {
    this.classList.toggle("close");
    const menu = document.querySelectorAll(".js-menu");
    menu.forEach(function (element){
        element.classList.toggle("open");
    })
    
    console.log(menu);
}

document.querySelector("#header-btn").addEventListener('click', openNav);




// TEMPLATE PRODUIT

async function afficherProduct() {
    const reponse = await fetch("/assets/products.json");
    const products = await reponse.json();

    /* console.log(products); vérifie la liaison du .json */ 

    products.forEach(createProductCard) 
} 
    afficherProduct();



function createProductCard(productData){
    const productTemplate = document.getElementById('productTemplate');
        const product = document.importNode(productTemplate.content, true);

        product.querySelector('.js-product-card__image').src = '/assets/' + productData.imageUrl.replace("images", "img");
        product.querySelector('.js-product-card__ttl').textContent = productData.title;
        product.querySelector('.js-product-card__cat').textContent = productData.category;
        product.querySelector('.js-product-card__price').textContent = productData.price.toString().replace("."," € ");
        product.querySelector('.js-product-card__txt').textContent = productData.description;
        product.querySelector('.js-product-card__btn').textContent = 'Découvrir';

        const listElement = document.createElement('li');

        listElement.appendChild(product);
        document.getElementById('product-list').appendChild(listElement);

}

