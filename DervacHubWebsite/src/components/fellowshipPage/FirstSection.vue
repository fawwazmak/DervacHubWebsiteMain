<script>
import { defineComponent } from 'vue';


export default defineComponent({

})
</script>




<template>
    <div class="grid lg:grid-cols-2 relative grid-rows-2 text-center lg:text-left gap-y-0 gap-8 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:pt-16 md:px-24 px-8 items-center font-sans">
        <div class="flex flex-col gap-8">
            <p class="md:text-[42px] font-extrabold sm:text-[30px] text-[#224c75]">Our <span class="text-[#d82e21]">fellowship program</span> will help you secure a future in tech</p>

            <p class="text-[#224c75] md:text-[16px] text-[15px]">Our Fellowship program is a 8 months intensive tech program through an agile delivery methodology, mentor matching, and leadership modules that equips young people with the skills and resources to launch and grow successful careers in tech and be able to work competitively in any global team.</p>

            <div class="md:block hidden">
                <component is="Button" value="Join now" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Join now</component>
            </div>
        </div>

        <img src="./images/boy-with-laptop-in-first-section.svg" alt="" class="z-40">

        <div class="md:hidden">
                <component is="Button" value="Join now" class="text-[15px] w-full px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Join now</component>
        </div>

        <img src="./images/blue-curve.svg" alt="" class="absolute blue">

        <img src="./images/red-curve.svg" alt="" class="absolute red">
    </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
.blue {
    right: 0;
    top: 0;
    margin-right: -80px;
    margin-top: -70px;
    transform: rotateZ(25deg);    
}

@media (max-width: 1280px) {
    .blue {
        /* margin: ; */
        transform: rotateZ(-20deg);
        margin-right: -340px;
        margin-top: -95px;
    }
}

.red {
    bottom: 0;
}

@media (max-width: 1282) {
    .blue {
        transform: rotateZ(30deg);
        margin-top: -80px
    }
}
</style>