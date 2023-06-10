<script>
import { defineComponent } from 'vue';
import SecSixth from './SecSixth.vue';

export default defineComponent({
    components: { SecSixth}

})
</script>
<template>
    <div class="py-[96px] bg-white px-[3.7rem] max-[464px]:px-[1rem]">
        <div class="flex justify-center flex-col items-center mb-[4.5rem]">
            <p class="text-[36px] text-[#224C75] font-semibold mb-4 text-center max-[320px]:text-[29px]">How the Admission Process Works</p>
            <p class="text-[20px] text-[#475467] max-w-[770px] text-center max-[524px]:text-[17px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nisi quod animi commodi dolore nesciunt deleniti. Aut.</p>
        </div>
        <div class="grid grid-cols-3 relative gap-6 mb-[11rem] max-[948px]:grid-cols-2 max-[612px]:grid-cols-1">
            <SecSixth heading="Fill and submit the application form" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam tristique metus nulla hendrerit." steps="1"/>
            <SecSixth class="relative z-20" heading="Take and pass all assessment tests" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam tristique metus nulla hendrerit." steps="2"/>
            <SecSixth class="relative z-20" heading="Complete the onboarding process and begin your journey" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="3"/>
            <div class="w-fit">
                <img class="absolute max-[948px]:hidden left-[12.5rem] top-[2.5rem] max-[1280px]:left-[10rem] max-[1176px]:left-[7rem] max-[1120px]:w-[40rem]" src="../../assets/admission.png" alt="">
            </div>
        </div>
        <div class="flex items-center flex-col justify-center">
            <p class="text-[36px] text-[#224C75] font-semibold mb-8 text-center">Candidates Attendance</p>
            <p class="text-[20px] text-[#475467] text-center max-w-[980px] text-center">Candidates are expected to be intentional about learning, be physically present at all your classes, Monday to Thursday, from 9am – 3pm; take your lessons seriously and participate in all your assessments, assignments and projects which will enable them bridge their skill-gaps and stand a better chance accelerate your pace to secure a future in the tech space.</p>
        </div>
    </div>
</template>