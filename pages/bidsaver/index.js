import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   
<style id="">
body,
html {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

.card {
  position: relative;
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 16.5rem;
  padding: 20px;
  color: #fff;
  background-color: rgb(90, 138, 216);
  border: 1px solid gray;
  border-radius: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search {
  border-radius: 24px !important;
  outline: none !important;
  border: 1px solid #dfe1e5;
  width: 75%;
  background: #fff;
  display: flex;
  box-shadow: none;
  z-index: 3;
  height: 44px !important;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.5s;
  max-width: 584px;
}
.search:hover,
.search:focus {
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  font-size: 20px;
  width: 80%;
}

.btn {
  transition-duration: 0.4s;
  font-family: arial, sans-serif !important;
  outline: 0px;
  border-radius: 50px;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: #3c4043;
  background-color: #b7d7f7;
  border: 1px solid #f8f9fa;
}

.btn:hover {
  border-bottom-width: 4px;
  transition-duration: 0.4s;
  border: 1px solid #dfe1e5;
}

</style>
</head>
<body>
<!DOCTYPE html>
<html>
<head>
  <title>Bid Saver</title>
  
  <style>
    /* CSS styles for the shopping front page */


    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }

    .product {
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .product img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    .product .title {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .product .price {
      color: #888;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <button id='loginbtn'>Login</button>
    <header class="card">
      <h1>BIDSAVER</h1>
      <input class='search' id='searchbar'>
      <button class="btn" id="searchbtn">search</button>
    </header>

    <section class="product-list" id='productSection'>
 

      <!-- Add more product items as needed -->
    </section>
  </div>
</body>
</html>


<script>
let productsData

fetch('https://fakestoreapi.com/products//1')
  .then(response => response.json())
  .then(data => {
    
  productsData = data;


// Select the products section by its ID
const productSection = document.getElementById('productSection');

// Loop through the product data and create HTML elements
productsData.forEach(product => {
  // Create the product card container
  const productCard = document.createElement('div');
  productCard.classList.add('product');

  // Create the product image
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.title;
  productCard.appendChild(productImage);

  // Create the product title
  const productTitle = document.createElement('h3');
  productTitle.classList.add('title');
  productTitle.textContent = product.title;
  productCard.appendChild(productTitle);

  // Create the product price
  const productPrice = document.createElement('p');
  productPrice.classList.add('price');
  productPrice.textContent = `$${product.price}`;
  productCard.appendChild(productPrice);

  // Append the product card to the products section
  productSection.appendChild(productCard);
});

   
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error('Error:', error);
  });

var button = document.getElementById('loginbtn');

button.addEventListener("click", function(event) {
 
  window.location.href = 'https://auth.sandbox.ebay.com/oauth2/authorize?client_id=IrenButt-BidSaver-SBX-7393a2ed6-61b8af19&response_type=code&redirect_uri=Iren_Butts-IrenButt-BidSav-qcwdppm&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item https://api.ebay.com/oauth/api_scope/sell.reputation https://api.ebay.com/oauth/api_scope/sell.reputation.readonly https://api.ebay.com/oauth/api_scope/commerce.notification.subscription https://api.ebay.com/oauth/api_scope/commerce.notification.subscription.readonly'
});
//# sourceURL=userscript.js
</script>

)
}
