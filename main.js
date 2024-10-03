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

    /* console.log(products); /* vérifie la liaison du .json */ 

    products.forEach(prod => {
        const productTemplate = document.getElementById('productTemplate');
        const product = document.importNode(productTemplate.content, true);

        product.querySelector('.js-product-card__image').src = '/assets/img' + prod.imageUrl;
        product.querySelector('.js-product-card__ttl').textContent = prod.title;
        product.querySelector('.js-product-card__cat').textContent = prod.category;
        product.querySelector('.js-product-card__price').textContent = prod.price.toString().replace("."," € ");
        product.querySelector('.js-product-card__txt').textContent = prod.description;
        product.querySelector('.js-product-card__btn').textContent = 'Découvrir'

        document.getElementById('main').appendChild(product);
        
    }) 
}
    afficherProduct();



/*function products(element) {
    const produits = jsonObj["products"].getElementById(elementId: string);

    for (i=0; i<products.length; i++){
        const title = document.createElement("h3");
        const description = document.createElement("h4");
        const imageUrl = document.createElement("img");
        const price = document.createElement("p");
        
        title.textContent = produits[i].title;
        description.textContent = produits[i].description;
        price.textContent = produits[i].price;
    }
} */