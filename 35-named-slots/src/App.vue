<template>
    <div class="container">
        <header>
            <h2>{{ msg }}</h2>
        </header>

        <card-view cardTitle="About me">
            <template v-slot:default>
                Hi, I am Md. Mahmudul Islam
            </template>
            <template v-slot:footer>
                <a href="http://youtube.com" target="_blank">Learn More...</a>
            </template>
        </card-view>

        <card-view cardTitle="Apple iPhone 12 Pro">
            <template #default>
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg" alt="">
                <p>Versions: A2407 (International); A2341 (USA); A2406 (Canada, Japan); A2408 (China, Hong Kong)</p>
            </template>
            <template #footer>
                <button>Buy Now</button>
                <button>Add to Cart</button>
            </template>
        </card-view>
    </div>
</template>

<script>
import CardView from './CardView.vue'
export default {
    data(){
        return{
            msg: 'Welcome to vue js',
        }
    },
    components:{
        CardView
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        line-height: 1.8;
    }

    ul {
        margin-left: 22px;
    }

    header{
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