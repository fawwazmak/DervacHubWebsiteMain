<script>
import { defineComponent } from 'vue';
import Button from './Button.vue'


export default defineComponent({
    components: {Button},
    data() {
        return {
            drop: false,
            dropCollaborateOptions: false,
        }
    }
})
</script>


<template>
    <header class="bg-white px-8 py-4 rounded-xl">
            <nav class="flex justify-between items-center text-center lg:space-x-24 relative lg:static">  
            <!-- dervac Logo -->

                <router-link to="/">
                    <div id="logo" class="flex cursor-pointer md:w-[100%] h-full">
                        <img src="./LandingPage/images/logo-complement-removebg-preview.png" alt="" class="md:w-[20%] w-[30px]">
                        <img src="./LandingPage/images/dervac-main-logo-removebg-preview.png" alt="" class="md:w-[88%] w-[90px]">
                    </div>
                </router-link>
                <!-- links to other pages -->

                <div id="links" class="lg:flex list-none justify-between text-[14px] lg:gap-8 font-medium text-[#224c75] lg:relative lg:top-[0px] lg:left-[0px] absolute top-[70px] w-full lg:bg-white bg-[#f4dde2] rounded-xl lg:rounded-[0] z-50" :class="!drop ? 'left-[-1400px]' : 'left-[0]'" transition-right duration-900>

                
                    <li class="py-4 cursor-pointer"><router-link to="/fellowship">Fellowship</router-link></li>
                    <li class="py-4 cursor-pointer">Training</li>
                    <li class="py-4 cursor-pointer relative" @click="() => { dropCollaborateOptions = !dropCollaborateOptions}">
                        <div class="flex gap-4 w-fit mx-auto">
                            <p>Collaborate</p>
                            <img src="../assets/images/collaborate-arrow.svg" alt="">
                        </div>
                    </li>


                    <!-- subdivision of the collaborate page -->
                    <div class="bg-[#f7f7f7] flex flex-col justify-between md:absolute md:left-64 top-[56px] rounded-xl p-4" v-show="dropCollaborateOptions">
                            <div class="flex justify-between gap-4 p-4 text-black rounded-xl hover:bg-blue-100 px-4 cursor-pointer">
                                <div class="flex gap-2 items-center">
                                    <div class="bg-gray-200 p-2 rounded-[50%]">
                                        <div>
                                            <img src="../assets/images/sponsor-icon.svg" alt="">
                                        </div>
                                    </div> 
                                    
                                    <p class="">Sponsor</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>

                            <div class="flex justify-between gap-4 p-4 text-black rounded-xl hover:bg-blue-100 px-4 cursor-pointer">
                                <div class="flex gap-2 items-center">
                                    <div class="bg-gray-200 p-2 rounded-[50%]">
                                        <div>
                                            <img src="../assets/images/partner-icon.svg" alt="">
                                        </div>
                                    </div> 
                                        
                                    <p class="">Partner with us</p>
                                </div>

                                <img src="../assets/images/forward-arrow-in-collaborate.svg" alt="">
                            </div>
                    </div>
                    <li class="py-4 cursor-pointer">FAQS</li>
                    <li class="py-4 cursor-pointer">Testimonials</li>
                    <li class="py-4 cursor-pointer">Contact Us</li>


                    <div id="buttons" class="lg:flex gap-8 space-x-8 lg:space-x-0 py-4 lg:py-0">
                        <component is="Button" value="Hire" class="border border-2 border-gray-300 rounded-xl text-[#224c75]"></component>
                        <component is="Button" value="Apply Now" class="bg-[#224c75] rounded-xl text-white"></component>
                    </div>
                </div>

                <!-- hire and apply now button -->

                

                <!-- hamburger and close button  -->

                <div id="hamburger-and-close-button" class="flex lg:hidden items-center justify-between" @click="() => { drop = !drop;}">
                    <svg v-if="!drop" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M20 7H4"/><path d="M20 12H4" opacity=".5"/><path d="M20 17H4"/></g></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>
                </div>
            </nav>

            <div class="lg:hidden absolute bg-black h-screen w-screen left-[-14px] opacity-40 top-20" v-show="drop" @click="() => drop = !drop"></div>
    </header>
</template>


<style></style>