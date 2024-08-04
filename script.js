document.addEventListener('DOMContentLoaded',()=>{
   const cartCount = document.querySelectorAll('li').length;
   const productContainer = document.getElementById('productContainer');
   const ul = document.querySelector('ul');
   const li = document.querySelectorAll('li');
   const cartHeading = document.getElementById('cartHeading');
   const addCart = document.getElementById('addCart');

   function updateCartHeading() {
       cartHeading.textContent = `Your cart (${cartCount})`;
   }

   if(cartCount == 0){
    cartHeading.textContent = `Your cart(${cartCount})`;
    const markUp = `
    <div class="dummy">
      <img src="./assets/images/illustration-empty-cart.svg" alt="" class="image-adj">
     <p>Your Added item will appear here</p>
   </div>`

    document.querySelector('.content').innerHTML = markUp;
   }
   else{
    cartHeading.textContent = `Your cart(${cartCount})`;
   }

   async function fetchData(){
    const response = await fetch('data.json');
    const data = await response.json();

    data.forEach((data)=>{
        const markUp = `
        <div class="card">
          <img src="${data.image.mobile}" alt="" width="50" height="50" class="image-fluid">
          <button id="cartButton">
            <img src="./assets/images/icon-add-to-cart.svg" alt=""><span>Add to cart</span>
          </button>
         <div class="product-desc">
           <p class="product-name">${data.category}</p>
           <p class="card-desc">${data.name}</p>
           <p class="price">$${data.price}</p>
         </div>
      </div>`
      productContainer.innerHTML += markUp;
   })
   }
  fetchData();
   
  
})


