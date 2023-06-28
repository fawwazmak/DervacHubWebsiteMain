<script>
import { defineComponent } from 'vue';
import middle from './Middle.vue';
import LastSection from '../../LandingPage/TenthSection.vue';

export default defineComponent({
    components: { LastSection, middle },
    props: [],
})
</script>


<template>
    <div class="">
      <middle />
      <LastSection /> 
    </div>
</template>


<style></style>