<script>
import { defineComponent } from 'vue';
import middle from './Middle.vue';
import LastSection from '../../LandingPage/TenthSection.vue'

export default defineComponent({
    components: { middle, LastSection},
    props: [],
})
</script>


<template>
    <div class="">
        <middle/>
        <LastSection />
    </div>
</template>


<style></style>