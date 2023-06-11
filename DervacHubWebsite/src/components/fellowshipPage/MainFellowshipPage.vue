<script>
import { defineComponent } from 'vue';
import Firstsection from './FirstSection.vue';
import ThirdSection from './ThirdSection.vue';
import Fourthsection from './FourthSection.vue';
import Sixth from './Sixth.vue';
import TenthSection from '../LandingPage/TenthSection.vue';
import FifthSection from './FifthSection.vue';


export default defineComponent({
    components: { Firstsection, ThirdSection, Fourthsection, Sixth, TenthSection,FifthSection }
})
</script>




<template>
    <Firstsection />
    <ThirdSection />
    <Fourthsection/>
    <FifthSection />
    <Sixth />
    <TenthSection />
</template>



<style></style>