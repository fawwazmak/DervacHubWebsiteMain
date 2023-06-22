<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';


export default defineComponent({
    componets: {Button}
})
</script>




<template>
    <div class="bg-[#11263b] w-[80%] mx-auto relative mb-6 text-white text-center md:py-16 py-8 px-6 rounded-[10px] my-20 items-center flex flex-col gap-6">
        <p class="md:text-[40px] text-[23px] font-bold">Start your career</p>
        <p class="">Join over 4,000+ students already growing with Dervac</p>
        <div class="flex gap-4 md:flex-row flex-col md:w-fit w-full">
            <component is="Button" class="bg-white text-[#11263b] py-2 px-4 rounded-[5px]" value="Learn more">Learn more</component>
            <component is="Button" class="bg-[#224C75] py-2 px-4 rounded-[5px]" value="Join now">Join now</component>
        </div>

        <img src="./images//left.svg" alt="" class="absolute top-0 left-0" />
        <img src="./images/right-curve.svg" alt="" class="absolute right-0 bottom-0">
    </div>
</template>



<style></style>