<script>
import { defineComponent } from 'vue';
import SixthSection from '../../LandingPage/TenthSection.vue';
import ThirdSection from './ThirdSection.vue';

export default defineComponent({
    components: { SixthSection, ThirdSection, },
    props: []
})
</script>



<template>

    <!-- bg-gradient from-blue-500 via-purple-500 -->
    <!-- #f3dee3 -->
    <!-- #f2f9ff -->
    
    <div class="bg-white pb-16">
        <ThirdSection />

        <SixthSection />
    </div>
</template>


<style></style>