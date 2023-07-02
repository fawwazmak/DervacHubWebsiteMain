<script>
import { defineComponent } from 'vue';
import SixthSection from '../../LandingPage/TenthSection.vue';
import ThirdSection from './ThirdSection.vue';
import OneSection from './firstSection.vue'
import SecondSection from './secondSection.vue'


export default defineComponent({
    components: { SixthSection, ThirdSection, OneSection, SecondSection},
    props: []
})
</script>



<template>

    <!-- bg-gradient from-blue-500 via-purple-500 -->
    <!-- #f3dee3 -->
    <!-- #f2f9ff -->
    
    <div class="bg-white pb-16">
        <OneSection />
        <SecondSection />
        <ThirdSection />

        <SixthSection />
    </div>
</template>


<style></style>