<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        expertise:{
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        teamImage: {
            type: String,
            required: true,
        }
    }
})
</script>


<template>
    <div class="bg-[#f9fafb] w-fit py-4 px-6 flex flex-col gap-2 items-center text-center sm:text-[16px] text-[10px] fpnt-sans">
        <div>
            <img src="../images/AvatarInTeam.svg" alt="">
        </div>
        <p class="font-bold sm:text-[19px] text-[12px]">{{ name }}</p>
        <p class="text-[#8da3b7] sm:text-[16px]">{{ expertise }}</p>
        <p class="text-[#8da3b7]">{{ role }}</p>

        <div class="flex gap-6 w-fit" >
            <img src="../images/Twitter.svg" alt="">
            <img src="../images/Linkeden.svg" alt="">
            <img src="../images/WebLogo.svg" alt="">
        </div>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>