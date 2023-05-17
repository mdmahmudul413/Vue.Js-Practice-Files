<template>
    <div class="rating">
        <!-- index will start from 1 -->
        <div class="rating-star" v-for="index in 5" :key="index" @click="handleClick(index)">
            <img src="/public/img/star.png" v-if="index <= modelValue" alt="" width="36">
            <img src="/public/img/gray.png" v-if="index > modelValue" alt="" width="36">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue:{
            type: Number,
            default: 0,
        }
    },

    emits: ["update:modelValue"],

    methods: {
        handleClick(index){
            this.$emit("update:modelValue", index);
        }
    }
}
</script>

<style scoped>
    .rating{
        width: 200px;
        display: flex;
        align-items: center;
    }

    .rating-star{
        cursor: pointer;
        margin: 2px;
    }

    .rating-star img:hover{
        transform: scale(1.2);
    }


</style>