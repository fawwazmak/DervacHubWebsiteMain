<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import sectionTwo from "./section-two.vue";

export default defineComponent({
    components:{FirstSection,fourth, FifthSection, SixthSection,sectionTwo},
})
</script>




<template>
    <FirstSection />
    <sectionTwo />
    <fourth />
    <FifthSection />
    <SixthSection />
</template>



<style></style>