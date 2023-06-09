<script>
import { defineComponent } from 'vue';
import SecSixth from './SecSixth.vue';

export default defineComponent({
    components: { SecSixth}

})
</script>
<template>
    <div class="py-[96px] bg-white px-20">
        <div class="flex justify-center flex-col items-center mb-[4.5rem]">
            <p class="text-[36px] text-[#224C75] font-semibold mb-4">How the Admission Process Works</p>
            <p class="text-[20px] text-[#475467] max-w-[770px] text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nisi quod animi commodi dolore nesciunt deleniti. Aut.</p>
        </div>
        <div class="flex justify-between items-center">
            <SecSixth heading="Fill and submit the application form"/>
            <SecSixth/>
            <SecSixth/>
        </div>
    </div>
</template>