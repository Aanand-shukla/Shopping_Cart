const cart = document.getElementById("cart");

const itemsData = [
    {
        id: "abc",
        names: "Levi's",
        desc: "A Beautiful modern trendy Shirts for all purpose",
        subDesc: "cotton Blend",
        price: 999,
        img: "./images/timg1.jpg",
    },
    {
        id: "bca",
        names: "Levi's Shirts",
        desc: "A Beautiful modern trendy Shirts for all purpose",
        subDesc: "cotton Blend",
        price: 999,
        img: "./images/timg2.jpg",
    },
    {
        id: "cdfg",
        names: "Levi's",
        desc: "A Beautiful modern trendy Shirts for all purpose",
        subDesc: "cotton Blend",
        price: 999,
        img: "./images/timg3.jpg",
    },
    {
        id: "cdf03",
        names: "Levi's",
        desc: "A Beautiful modern trendy Shirts for all purpose",
        subDesc: "cotton Blend",
        price: 999,
        img: "./images/timg4.jpg",
    },
]

let basket = [];

let generatecart = () => {
    return (cart.innerHTML = itemsData.map((x) => {
        let { id, names, desc, subDesc, price, img } = x;
        return `<div id=product-id-${id} class="shopping__cart-container">
    <img width="250" height="250" src=${img} alt="shirtsimages">
    <div class="shopping__cart-container_brandName">
        <h1>${names}</h1>
    </div>
    <div class="shopping__cart-container_productDescription">
        <p>${desc}</p>
        <p>${subDesc}</p>
    </div>
    <div class="shopping__cart-container_icons">
        <div class="shopping__cart-container_icons-price">
            <p> &#x20B9; ${price} </p>
        </div>
        <div class="shopping__cart-container_icons-plusMinus">
            <div class="shopping__cart-container_icons-plusMinus_plus">
                <p onclick="increment(${id})" id="plus">&plus;</p>
            </div>
            <div class="shopping__cart-container_icons-plusMinus_quantity">
                <p id= ${id}>0</p>
            </div>
            <div class="shopping__cart-container_icons-plusMinus_minus">
                <p onclick = "decrement(${id})" id="plus">&minus;</p>
            </div>
        </div>
    </div>
</div>`
    }).join(""))
}

generatecart();

// let count = 0;
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        x.id === selectedItem.id;
        console.log(x.id);
        console.log(selectedItem.id);


    })
    // console.log(search);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else {
        search.item += 1;
    }
    console.log(basket);

}
let decrement = (id) => {
    console.log(id);

}
