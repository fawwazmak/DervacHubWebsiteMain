<script>
import { defineComponent } from 'vue';
import Firstsection from './FirstSection.vue';
import Fourthsection from './FourthSection.vue';
import Sixth from './Sixth.vue'


export default defineComponent({
    components: {Firstsection,Fourthsection, Sixth}
})
</script>




<template>
    <Firstsection />
    <Fourthsection/>
    <Sixth />
</template>



<style></style>