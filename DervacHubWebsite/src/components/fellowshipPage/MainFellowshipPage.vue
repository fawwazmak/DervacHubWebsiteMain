<script>
import { defineComponent } from 'vue';
import Firstsection from './FirstSection.vue';
import ThirdSection from './ThirdSection.vue';
import Fourthsection from './FourthSection.vue';
import Sixth from './Sixth.vue'


export default defineComponent({
    components: {Firstsection,ThirdSection,Fourthsection, Sixth}
})
</script>




<template>
    <Firstsection />
    <ThirdSection />
    <Fourthsection/>
    <Sixth />
</template>



<style></style>