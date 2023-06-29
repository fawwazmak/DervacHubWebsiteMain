<script>
import { defineComponent } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
import TenthSection from '../LandingPage/TenthSection.vue';
import FirstSectionToReuse from '../FirstSectionToReuse.vue';


export default defineComponent({
    components: {TestimonialCard, TenthSection, FirstSectionToReuse},
})
</script>




<template>
    <div class="pb-16 bg-white">
        <!-- This is the div for the first section. Start the first section here -->
        <div>
            <FirstSectionToReuse  heading="Testimonials" caption="Hear from some of our amazing students"/>
        </div>



        <!-- Second section begins here -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-12 mx-4 min-[175px]:mx-8 md:mx-16 lg:mx-28 pt-20 bg-white">
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>
            <TestimonialCard  name="Fellow Olatunji" skill="Web dev., Google"/>

        </div>



        <!-- The third section start here  and it is the join 2000+ subscribers-->

        <div>

        </div>


        <!-- The fourth section starts here -->
            <TenthSection class="w-[83%]"/>
    </div>


</template>



<style></style>