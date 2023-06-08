<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';


export default defineComponent({
    componets: {Button}
})
</script>




<template>
    <div class="bg-[#11263b] w-[90%] mx-auto text-white text-center py-16 rounded-[10px] my-20">
        <p class="text-[40px] font-bold">Start your career</p>
        <p class="">Join over 4,000+ students already growing with Dervac</p>
        <div>
            <component is="Button" class="bg-white tetx-[#11263b]" value="Learn more"></component>
            <component is="Button" class="bg-[#11263b]" value="Join now"></component>
        </div>
    </div>
</template>



<style></style>