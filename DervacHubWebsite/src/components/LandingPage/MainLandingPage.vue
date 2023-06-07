<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';
import FifthSection from './FifthSection.vue';


export default defineComponent({
    components:{FirstSection,fourth, FifthSection},
})
</script>




<template>
    <FirstSection />
    <fourth />
    <FifthSection />
</template>



<style></style>