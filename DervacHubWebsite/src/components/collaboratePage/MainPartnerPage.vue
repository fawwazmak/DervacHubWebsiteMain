<script>
import { defineComponent } from 'vue';
import Fourth from './Fourth.vue';
import sectionTwoSponsor from './section-two.vue';
import FirstSection from './FirstSection.vue';


export default defineComponent({
    components:{Fourth, sectionTwoSponsor, FirstSection}
    
})
</script>




<template>

    <div>
        <FirstSection />
        <sectionTwoSponsor />
        <Fourth />
    </div>

</template>




<style></style>