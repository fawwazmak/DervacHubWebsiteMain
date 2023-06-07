<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: ['field']

})
</script>




<template>
    <div class="p-[21px] border border-gray-300 rounded-[15px]">
    <img src="./LandingPage/training-product-courses-image.svg" alt="" class="mx-auto">
    <div class="flex justify-between items-center pt-[30px]">
      <p class="text-[#026AA2] bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">Design</p>
      <p class="text-[#6941C6] text-[14px] font-[600]">6 months</p>
    </div>
    <h1 class="text-[#224C75] text-[24px] font-[600] leading-6 my-2">{{ field }}</h1>
    <p class="text-[#475467] text-[16px] font-[400]">
      Lorem ipsum dolor sit amet consectetur. Eget purus duis viverra justo gravida odio iaculis ac diam. 
      Morbi aliquam rhoncus elit odio lacinia sed iaculis in leo. 
    </p>
    <div class="flex justify-between items-center mt-[24px] w-[161px] border border-gray-300 rounded-[15px] py-[12px] px-[16px]">
      <p class="text-[#344054] text-[18px] font-[400]">Learn more</p>
      <img src="./LandingPage/Arrow-right.svg" alt="">
    </div>
</div>
</template>



<style></style>
