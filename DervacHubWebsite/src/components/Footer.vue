<script>
import { defineComponent } from 'vue';
import elementStore from '../stores/store';


export default defineComponent({

})
</script>


<template>
    <footer class="text-[#224c75] flex flex-col gap-0 pb-12 items-center bg-blue-100 font-sans">

        <div class="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between pt-8 md:p-20 w-full">
            <!-- this is for the logo, social-media handle and the copywright for desktop view. This will show only on desktop width upward-->
            
            <div id="logo-and-social-media-handles" class="md:flex flex-col md:space-y-5 hidden">
                <div class="flex flex-col space-y-2">

                    <!-- logo -->

                    <router-link to="/">
                        <div class="flex">
                            <img src="../assets/images/dervac-main-logo.svg" alt="">
                            <img src="../assets/images/logo-complement.svg" alt="">
                        </div>
                    </router-link>

                    <!-- social-media-links -->
                    <div class="flex space-x-9">
                        <img src="../assets/images/facebook-logo 1.svg" alt="">
                        <img src="../assets/images/Instagram-logo.svg" alt="">
                        <img src="../assets/images/twitter-logo.svg" alt="">
                        <img src="../assets/images/LinkedIn Icon.svg" alt="">
                    </div>
                </div>

                <p>0816 022 5365, 0802 694 4449, 0909 379 0787</p>
                <p>hub@dervac</p>
                <p>76, Shipeolu Street, Palmgroove, Lagos</p>

                <!-- <p>&copy 2023 dervac.co</p> -->
            </div>

            <ul class="flex flex-col space-y-2 md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">Services</li>
                <li><router-link to="/fellowshipPage">Fellowship</router-link></li>
                <li><router-link to="/trainingPage">Training</router-link></li>
                <li><router-link to="/testimonials">Testimonials</router-link></li>
                <li>Hire</li>
            </ul>
            <!-- http://localhost:5173/collaborate/sponsor -->
            <ul class="flex flex-col space-y-2 md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">Grow with Dervac</li>
                <li> <router-link to="/collaborate/sponsor">Sponsor a student</router-link> </li>
                <li> <router-link to="/collaborate/sponsor">Become a partner</router-link> </li>
                <li>Our student work</li>
                <li>Start your application</li>
            </ul>

            <ul class="flex flex-col space-y-2 md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">Resources</li>
                <li><router-link to="/history&team">About us</router-link></li>
                <li> <router-link to="/faqs">FAQS</router-link> </li>
                <li> <router-link to="/Career">Career</router-link> </li>
            </ul>

            <!-- <ul class="flex flex-col space-y-2 md:text-left text-center">
                <li class="md:text-[18px] text-[22px] font-bold">More</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Help</li>
                <li>Contact</li>
            </ul> -->

            <!-- this is for the logo, social-media handle and the copywright for other view-->
            <div class="md:hidden flex flex-col items-center space-y-4">
                <div class="flex flex-col space-y-2 items-center">

                    <!-- logo -->
                    <div class="flex w-[80%] mx-auto items-center">
                        <img src="./LandingPage/images/logo-complement-removebg-preview.png" alt="" class="w-[23px]">
                        <img src="./LandingPage/images/dervac-main-logo-removebg-preview.png" alt="" class="w-[110px]">
                    </div>

                    <!-- social-media-links -->
                    <div class="flex justify-between w-full">
                        <img src="../assets/images/facebook-logo 1.svg" alt="">
                        <img src="../assets/images/Instagram-logo.svg" alt="">
                        <img src="../assets/images/twitter-logo.svg" alt="">
                        <img src="../assets/images/LinkedIn Icon.svg" alt="">
                    </div>
                </div>

                <!-- <p>&copy 2023 dervac.co</p> -->
            </div>
        </div>
        <p>&copy 2023 dervac.co</p>
    </footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>