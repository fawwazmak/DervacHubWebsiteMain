<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: ['name']
})
</script>


<template>
    <div class="bg-[#f9fafb] w-fit p-4">
        <img src="../images/AvatarInTeam.svg" alt="">
        <p>{{ name }}</p>
        <p>{{ expertise }}</p>
        <p>{{ role }}</p>

        <div class="flex gap-6" >
            <img src="../images/Twitter.svg" alt="">
            <img src="../images/Linkeden.svg" alt="">
            <img src="../images/WebLogo.svg" alt="">
        </div>
    </div>
</template>


<style></style>