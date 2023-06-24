<script>
import { defineComponent } from 'vue';
import Button from '../../Button.vue';
import TeamCard from './TeamCard.vue';
import elementStores from '../../../stores/store'


export default defineComponent({
    components: {Button, TeamCard},
    data () {
        return {
            team: elementStores().$state.team
        }
    }
})
</script>



<template>
    <section class="grid md:grid-cols-2 bg-[#f2f9ff] items-center sm:px-24 px-8 py-20 gap-10">
        <div class="flex flex-col gap-6 md:text-left text-center">
            <p class="text-[40px] font-bold text-[#224c75]">History</p>
            <p class="text-[#475467] md:text-[20px] text-[16px]">Dervac HUB is an initiative of Dervac Global Services Ltd non-profit partnership program that authorizes global universities and colleges to deliver industry-recognized Huawei Certification courses to students. This program acts as a bridge between enterprises and academy to build a talent ecosystem for ICT industry. It has been designed to deliver industry standard training and certification courses required by employers. Access to these courses will prepare students with the latest and practical skills to work in ICT industry, making them more employable and helping them kick start their careers.</p>
            <Button value="Join us now" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:block hidden "/>

        </div>

        <div class="flex flex-col items-center gap-4">
            <div class="flex items-end md:gap-4 gap-6 md:flex-row flex-col">
                <img src="../../LandingPage/images/first-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/second-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
            </div>

            <div class="flex md:items-start items-center md:gap-4 gap-6 md:flex-row flex-col">
                <img src="../../LandingPage/images/third-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/fourth-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="block">
                <img src="../../LandingPage/images/fifth-image-in-the-build-a-successful-tech-career-section.svg" alt="" class="lg:block md:hidden block">
            </div>
        </div>

        <Button value="Join us now" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 w-full md:hidden"/>
    </section>

    <section class="bg-white sm:px-24 px-8 py-20">
        <div class="text-center flex flex-col items-center gap-8 ">
            <div class="sm:w-[60%] w-full">
                <p class="font-bold sm:text-[35px] text-[25px]">Meet our team </p>
                <p class="mt-6 sm:text-[19px] text-[14px] text-[#475467]">Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8">
                <TeamCard v-for="people in team" :key="people.id" :expertise="people.based"  :name="people.name" :role="people.position" class="w-full"/>
                <!-- <img src="../images/AvatarInTeam.svg" alt=""> -->
                <!-- :teamImage="people.imageUrl" -->
            </div>
        </div>


        <div class="flex md:flex-row flex-col items-center bg-[#f9fafb] gap-10 rounded-[10px] md:p-16 p-10 justify-between my-[100px] md:my-[200px]">
            <div class="flex flex-col gap-4 md:text-left text-center">
                <p class="md:text-[30px] text-[25px] font-bold">Join 2,000+ subscribers</p>
                <p class="md:text-[18px]">Stay in the loop with everything you need to know.</p>
            </div>

            <div class="flex lg:flex-row flex-col gap-4 md:h-[48px]">
                <input type="email" class="block focus:border-none rounded-[8px] border-[2px] border-solid border-gray-300 px-[5px] py-[7px] lg:w-[350px]" placeholder="Enter your Email">
                <Button  value="Subscribe" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:w-fit w-full"/>
            </div>
        </div>
    </section>


    
</template>


<style></style>