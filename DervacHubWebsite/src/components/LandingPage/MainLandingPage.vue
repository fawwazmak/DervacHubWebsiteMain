<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import Seventh from './Seventh.vue';
import sectionTwo from "./section-two.vue";
import TenthSection from './TenthSection.vue'


export default defineComponent({
    components:{FirstSection,fourth, FifthSection, SixthSection,Seventh, sectionTwo, TenthSection},
})
</script>




<template>
    <FirstSection />
    <sectionTwo />
    <fourth />
    <FifthSection />    
    <SixthSection />
    <Seventh/>
    <TenthSection />
</template>



<style></style>