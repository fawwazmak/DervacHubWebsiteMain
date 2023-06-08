<script>
import { defineComponent } from 'vue';


export default defineComponent({

})
</script>


<template>
    <footer class="flex flex-col space-y-8 md:space-y-0 items-center md:flex-row justify-between bg-blue-100 py-8 md:p-20 text-[#224c75] 
text-[#224c75] 
text-[#224c75] 
text-[#224c75] ">

        <!-- this is for the logo, social-media handle and the copywright for desktop view-->
        <div id="logo-and-social-media-handles" class="md:flex flex-col md:space-y-6 hidden">
            <div class="flex flex-col space-y-2">

                <!-- logo -->
                <div class="flex lg:w-[15%] w-[40%]">
                    <img src="../assets/images/dervac-main-logo.svg" alt="">
                    <img src="../assets/images/logo-complement.svg" alt="">
                </div>

                <!-- social-media-links -->
                <div class="flex space-x-6">
                    <img src="../assets/images/facebook-logo 1.svg" alt="">
                    <img src="../assets/images/Instagram-logo.svg" alt="">
                    <img src="../assets/images/twitter-logo.svg" alt="">
                    <img src="../assets/images/LinkedIn Icon.svg" alt="">
                </div>
            </div>

            <p>&copy 2023 dervac.co</p>
        </div>

        <ul class="flex flex-col space-y-2 md:text-left text-center">
            <li class="md:text-[18px] text-[22px] font-bold">Company</li>
            <li>Fellowship</li>
            <li>Training</li>
            <li>Testiminials</li>
            <li>Collaboration</li>
            <li>FAQS</li>
        </ul>
        
        <ul class="flex flex-col space-y-2 md:text-left text-center">
            <li class="md:text-[18px] text-[22px] font-bold">Courses</li>
            <li>Web Dev.</li>
            <li>Mobile App</li>
            <li>Design</li>
            <li>Engineering</li>
        </ul>

        <ul class="flex flex-col space-y-2 md:text-left text-center">
            <li class="md:text-[18px] text-[22px] font-bold">Resources</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Admissios</li>
        </ul>

        <ul class="flex flex-col space-y-2 md:text-left text-center">
            <li class="md:text-[18px] text-[22px] font-bold">More</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Contact</li>
        </ul>

        <!-- this is for the logo, social-media handle and the copywright for other view-->
        <div class="md:hidden flex flex-col items-center space-y-4">
            <div class="flex flex-col space-y-2 items-center">

                <!-- logo -->
                <div class="flex w-[80%] mx-auto items-center">
                    <img src="../assets/images/dervac-main-logo.svg" alt="" class="w-[23px]">
                    <img src="../assets/images/logo-complement.svg" alt="" class="w-[110px]">
                </div>

                <!-- social-media-links -->
                <div class="flex justify-between">
                    <img src="../assets/images/facebook-logo 1.svg" alt="">
                    <img src="../assets/images/Instagram-logo.svg" alt="">
                    <img src="../assets/images/twitter-logo.svg" alt="">
                    <img src="../assets/images/LinkedIn Icon.svg" alt="">
                </div>
            </div>

            <p>&copy 2023 dervac.co</p>
        </div>
    </footer>
</template>


<style></style>