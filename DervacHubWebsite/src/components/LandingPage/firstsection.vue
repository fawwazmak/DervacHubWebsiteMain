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

    <div class="flex lg:flex-row flex-col text-center relative lg:text-left md:gap-20 gap-8 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:pb-36 md:pt-16 md:px-24 px-8 items-center font-sans">
        
        <!-- The first div containing mainly the text -->
        <div class="flex flex-col gap-8">
            <div class="relative">
                <div class="lg:flex lg:flex-col">
                    <p class="main-text font-extrabold min-[330px]:text-[40px] text-[25px] text-[#224c75] z-10">Learn, innovate and Thrive in the</p>
                    <p class="text-[#d82e21] main-text font-extrabold min-[330px]:text-[40px] text-[25px]">Digital World!</p>

                    <!-- The slant avatar images -->
                    <div class="flex flex-row bg-white w-fit py-3 pl-3 pr-6 rounded-[10px] lg:mx-0 mx-auto lg:absolute rotate-in-my-way top-[80px] lg:shadow-2xl right-[-30px] 2xl:right-28 z-10">
                        <img src="./images/Avatar.svg" alt="" class="flex-none">
                        <img src="./images/Avatar-1.svg" alt="" class="flex-none">
                        <img src="./images/Avatar-2.svg" alt="" class="flex-none">
                        <img src="./images/Avatar-3.svg" alt="" class="flex-none">
                        <img src="./images/Avatar-add-button.svg" alt="" class="flex-none">
                    </div>
                </div>
            </div>

            <p class="text-[#224c75] md:text-[20px] text-[15px] z-10">Unlock your Digital potential with cutting-edge Traning in our Technology Hub </p>


            <!-- The button imported from another file -->
            <div class="flex gap-12 md:flex-row flex-col md:w-fit w-full mx-auto lg:mx-0">
                <router-link to="/trainingPage">
                    <component is="Button" value="Become a tech expert" class="min-[1170px]:text-[15px] text-[12px]  min-[1237px]:text-[17px] md:w-fit w-full px-8 rounded-[10px] py-5 bg-[#102539] hover:bg-transparent hover:border hover:border-2 hover:border-gray-300 hover:text-[#224c75] text-white"></component>
                </router-link>
                
                <router-link to="/testimonials">
                    <component is="Button" value="Testimonials" class="min-[1170px]:text-[15px] text-[12px] min-[1237px]:text-[18px] md:w-fit w-full px-8 rounded-[10px] py-5 hover:bg-[#102539] hover:border-0 hover:text-white border border-[2px] text-[#344054]"></component>
                </router-link>
                <!-- max-[1285px]:items-center -->
            </div>

            <!-- The red curve below  -->
            <img src="./images/red-curve.svg" alt="" class="absolute bottom-0 left-0">
        </div>


        <!-- The second div containing the two images  -->
        <div class="flex gap-4 md:flex-row flex-col-reverse">

            <!-- Smiling lady image side -->
            <div class="bg-white flex flex-col gap-2 rounded-[10px] shadow-2xl z-40">
                <div>
                    <img src="./images/smiling-girl-in-hero-section.svg" alt="" class="w-[100%] rounded-t-[10px]">
                </div>

                <div class="px-4 pt-4 pb-9 text-[#224c75]">
                    <img class="w-[25px]"  src="./images/logo-complement-removebg-preview.png" alt="">

                    <p class="italic mt-2"><q>Gain the skills you need to land your dream job</q></p>
                </div>
            </div>

            <!-- Mr Anjorin's image side  -->
            <div class="bg-white flex flex-col gap-2 rounded-[10px] shadow-2xl z-40">
                <div>
                    <img src="./images/mrAnjorin-image.svg" alt="" class="w-[100%] rounded-t-[10px]">
                </div>

                <div class="px-4 pt-4 pb-9 text-[#224c75]">
                    <img class="w-[25px]" src="./images/logo-complement-removebg-preview.png" alt="">

                    <p class="italic mt-2"><q>Get trained and mentored by industry experts</q></p>
                </div>
            </div>

            <!-- The blue curve beside the two images -->
            <img src="./images/blue-curve.svg" alt="" class="absolute right-0 hidden sm:block lg:top-20 w-[500px] lg:h-[400px]">
        </div>        
    </div>

</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    .font-sans {
        font-family: 'Inter', sans-serif;
    }

    .flex-none {
        flex: none;
        margin-right: -15px;
    }

    @media (min-width: 1024px) {
        .rotate-in-my-way {
            transform: rotateZ(-10deg)
        }
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

    @media (max-width: 1282) {
        .blue {
            transform: rotateZ(30deg);
            margin-top: -80px
        }
    }

    @media (min-width: 1082px) {
        .main-text {
            font-size: 50px;
        }
    }
</style>