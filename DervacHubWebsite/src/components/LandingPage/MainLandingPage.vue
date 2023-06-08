<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';
import SixthSection from './SixthSection.vue';
import Seventh from './Seventh.vue';


export default defineComponent({
    components:{FirstSection,fourth, FifthSection, SixthSection , Seventh},
})
</script>




<template>
    <FirstSection />
    <fourth />
    <FifthSection />
    <SixthSection />
    <Seventh/>
</template>



<style></style>