<script>
import { defineComponent } from 'vue';
import fourth from './fourth.vue';
import FirstSection from './firstsection.vue';


export default defineComponent({
    components:{FirstSection,fourth},
})
</script>




<template>
    <FirstSection />
    <fourth />
</template>



<style></style>