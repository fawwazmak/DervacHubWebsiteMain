<script>
import { defineComponent } from 'vue';
import Button from '../../Button.vue';


export default defineComponent({
    components: {Button},
    props: [],
    data () {
        return {
            
        }
    }
})
</script>


<template>
    <div class="font-sans bg-[#f9fafb] mx-32 rounded-[10px] py-8 text-center flex flex-col items-center">
        <div>

        </div>

        <div class="flex flex-col items-center">
            <p>still have question</p>
            <p>Can't find the answer you are looking for? Please contact us.</p>
            <Button value="Get in touch" class="bg-gradient-to-r from-[#132b42] to-[#1d4266] rounded-[5px] text-white py-3 px-5 md:block hidden "/>
        </div>
    </div>
</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>