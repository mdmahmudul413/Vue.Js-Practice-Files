<template>
    <div class="container">
        <header>
            <h2>{{ msg }}</h2>
        </header>

        <product-card
            v-for="product in products"
            :key="product.name"
            :product="product"
            @buy-now-clicked="buyNow"
            @add-to-cart-clicked="addToCart"
            @toggle-favourite="handleToggle"
        >
        </product-card>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            products: [
                {
                    name: "Iphone 12 pro",
                    thumbnail:
                        "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
                    price: 167689,
                    addedToFavourite: true,
                },
                {
                    name: "Waltom RM",
                    thumbnail:
                        "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-11i.jpg",
                    price: 67689,
                    addedToFavourite: false,
                },
                {
                    name: "Xiomi s5",
                    thumbnail:
                        "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-pro.jpg",
                    price: 18689,
                    addedToFavourite: true,
                },
            ],
        };
    },
    components: {
        ProductCard,
    },
    methods: {
        buyNow(product) {
            console.log("Buying...");
            console.log(product);
        },
        addToCart(product) {
            console.log("Adding...");
            console.log(product);
        },
        handleToggle(product){
            product.addedToFavourite = !product.addedToFavourite;
        }
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    line-height: 1.8;
}

ul {
    margin-left: 22px;
}

header {
    background-color: #1f2c46;
    color: #41b883;
    font-size: 22px;
    padding: 22px;
}

header h2 {
    text-align: center;
}

button {
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
}
</style>
