<script>
import { defineComponent } from 'vue';
import Button from '../../Button.vue';
import TeamCard from './TeamCard.vue';


export default defineComponent({
    components: {Button, TeamCard}
})
</script>



<template>
    <section class="grid md:grid-cols-2 bg-[#f2f9ff] items-center px-24 py-20 gap-10">
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

    <section>
        <p>Meet our team </p>
        <p>Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>

        <div>
            <TeamCard name="Muhsin Anjorin" expertise="Senior Software Developer" role="Director"/>
        </div>
    </section>
</template>


<style></style>