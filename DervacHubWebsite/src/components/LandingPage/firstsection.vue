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

    <div class="grid grid-cols-2 gap-20 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-20 px-24 items-center font-sans">
        <div class="flex flex-col gap-8">
            <p class="text-[50px] font-extrabold text-[#224c75]">Learn, innovate and Thrive in the  <span class="text-[#d82e21]">Digital World</span></p>

            <p class="text-[#224c75] text-[20px]">Unlock your Digital potential with cutting-edge Traning in our Technology Hub </p>

            <div class="flex gap-12">
                <component is="Button" value="Become a tech expert" class="px-8 rounded-[10px] py-5 bg-[#224c75] text-white"></component>
                <component is="Button" value="Testimonials" class="px-8 rounded-[10px] py-5 border border-[2px] text-[#344054]"></component>
            </div>
        </div>


        <div class="flex gap-6">
            <div class="bg-white flex flex-col gap-2 rounded-[10px]">
                <div>
                    <img src="./smiling-girl-in-hero-section.svg" alt="">
                </div>

                <div class="flex flex-col gap-2 px-6 pt-7 pb-9 text-[#224c75]">
                    <img class="w-[12%]"  src="./dervac-main-logo.svg" alt="">

                    <p><q>Gain the skills you need to land your dream job</q></p>
                </div>
            </div>

            <div class="bg-white flex flex-col gap-2 rounded-[10px]">
                <div>
                    <img src="./mrAnjorin-image.svg" alt="">
                </div>

                <div class="flex flex-col gap-2 px-6 pt-7 pb-9 text-[#224c75]">
                    <img class="w-[12%]" src="./dervac-main-logo.svg" alt="">

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