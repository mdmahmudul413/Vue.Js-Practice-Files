<template>
    <div class="container">
        <header>
            <h2>{{ msg }}</h2>
        </header>
        <card-view cardTitle="About me">
            Hi, I am Md. Mahmudul Islam
        </card-view>
        <card-view cardTitle="Apple iPhone 12 Pro">
            <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg" alt="">
            <p>Versions: A2407 (International); A2341 (USA); A2406 (Canada, Japan); A2408 (China, Hong Kong)</p>
        </card-view>
        <card-view cardTitle="Services">
            <ul>
                <li>Web Dev</li>
                <li>Soft Dev</li>
                <li>Mobile App Dev</li>
            </ul>
        </card-view>
        <card-view cardTitle="Test">
            <!-- Default slop content will inject here -->
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

    header{
        background-color: #1f2c46;
        color: #41b883;
        font-size: 22px;
        padding: 22px;
    }

    header h2 {
        text-align: center;
    }
</style>