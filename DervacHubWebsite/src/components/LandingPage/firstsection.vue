<script>
import { defineComponent } from 'vue';
import Button from '../Button.vue';



export default defineComponent({
    components: {Button}
})
</script>



<template>
    <!-- blue #f2f6fb -->
    <!-- purple #f3e0e5 -->

    <div class="grid md:grid-cols-2 grid-rows-2 text-center md:text-left md:gap-20 gap-0 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:py-20 md:px-24 px-8 items-center font-sans">
        <div class="flex flex-col gap-8">
            <p class="md:text-[50px] font-extrabold text-[30px] text-[#224c75]">Learn, innovate and Thrive in the  <span class="text-[#d82e21]">Digital World</span></p>

            <p class="text-[#224c75] md:text-[20px] text-[15px]">Unlock your Digital potential with cutting-edge Traning in our Technology Hub </p>

            <div class="flex gap-12 md:flex-row flex-col">
                <component is="Button" value="Become a tech expert" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 bg-[#224c75] text-white"></component>
                <component is="Button" value="Testimonials" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 border border-[2px] text-[#344054]"></component>
            </div>
        </div>


        <div class="flex gap-6 md:flex-row flex-col">
            <div class="bg-white flex flex-col gap-2 rounded-[10px]">
                <div>
                    <img src="./images/smiling-girl-in-hero-section.svg" alt="" class="w-[100%]">
                </div>

                <div class="flex md:flex-col gap-2 px-6 pt-7 pb-9 text-[#224c75]">
                    <img class="w-[12%]"  src="./images/dervac-main-logo.svg" alt="">

                    <p><q>Gain the skills you need to land your dream job</q></p>
                </div>
            </div>

            <div class="bg-white flex flex-col gap-2 rounded-[10px]">
                <div>
                    <img src="./images/mrAnjorin-image.svg" alt="" class="w-[100%]">
                </div>

                <div class="flex md:flex-col gap-2 px-6 pt-7 pb-9 text-[#224c75]">
                    <img class="w-[12%]" src="./images/dervac-main-logo.svg" alt="">

                    <p><q>Get trained and mentored by industry experts</q></p>
                </div>
            </div>
        </div>
    </div>

</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  .font-sans {
  font-family: 'Inter', sans-serif;
}
</style>