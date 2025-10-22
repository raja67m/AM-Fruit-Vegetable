// product catlog

const products=[
    {name:"Organic Red Apples",type:"fruit",des:"Crisp, sweet organic red apples perfect for snacking or baking.",rate:"4.9",

reviews:"(124 reviews)",price:"$4.99",Image:"./frutis/apple.jpg"},

 {name:"Fresh Bananas",type:"fruit",des:"Sweet, ripe bananas packed with potassium and natural energy.",rate:"4.6",

reviews:"(84 reviews)",price:"$2.99",Image:"./frutis/banana.jpg"},

{name:"Orange Citrus",type:"fruit",des:"Juicy, vitamin C-rich oranges perfect for fresh juice or snacking.",rate:"3.8",

reviews:"(50 reviews)",price:"$3.8",Image:"./frutis/orange.jpg"},

{name:"Fresh Carrots",type:"veg",des:"Crunchy, sweet carrots loaded with beta-carotene and nutrients.",rate:"4.5",

reviews:"(103 reviews)",price:"$4.5",Image:"./veg/carrert.jpg"},

{name:"Red Tomatoes",type:"veg",des:"Vine-ripened tomatoes bursting with flavor and lycopene.",rate:"4.8",

reviews:"(154 reviews)",price:"$4.8",Image:"./veg/tomato.jpg"},


{name:"Green Broccoli",type:"veg",des:"Fresh, nutrient-dense broccoli crowns perfect for steaming or stir-frying.",rate:"4.5",

reviews:"(110 reviews)",price:"$2.99",Image:"./veg/broccoli.jpg"},

{name:"Cabbage",type:"veg",des:"Leafy vegetable belonging to the Brassica oleracea family, with common varieties including green, red.",rate:"2.5",

reviews:"(40 reviews)",price:"$2.99",Image:"./veg/cabbage.jpg"},


{name:"Mango",type:"furit",des:"sweet tropical fruit and a member of the Anacardiaceae family.",rate:"4.9",

reviews:"(124 reviews)",price:"$4.9",Image:"./frutis/manago.jpg"},

{name:"Pineapple",type:"furit",des:"a tropical fruit from the Bromeliaceae family.",rate:"4.2",

reviews:"(20 reviews)",price:"$4.2",Image:"./frutis/pineapple.jpg"},

{name:"Grapes",type:"furit",des:"support heart health, brain function, and immunity",rate:"4.9",

reviews:"(154 reviews)",price:"$4.2",Image:"./frutis/graphys.jpg"},

];



const productContainer = document.getElementById("proGird");

function displayProducts(items) {
  productContainer.innerHTML = items
    .map(
      (item) => `
         <div class="products">
                                <img src="${item.Image}" alt="${item.name}">
                                    <p class="Pname">${item.name}</p>
                                   <p class="Pdes">${item.des}</p>
                                    <div class="reviews">
                                        <span class="fa fa-star checked"></span>
                                        <p class="reviewRate">${item.rate}</p>
                                        <p class="reviewCount">${item.reviews}</p>
                                    </div>
                                    <p class="Pprice">${item.price}</p>
                                    <div class="productAdd">
                                        <button>  <i class="fi fi-sr-shopping-cart"></i> Add to Card</button>
                                        <span class="material-symbols-outlined">
                                                    visibility
                                            </span>
                                    </div>
                            </div>

    `
    )
    .join("");
}

displayProducts(products);

function filterItems(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter((item) => item.type === category);
    displayProducts(filtered);
  }
}