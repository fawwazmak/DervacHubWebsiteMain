<template>
    <div class=" px-[112px] py-[46px] bg-white w-screen h-fit">
       <div>
        <midComponent/>
        <midComponent/>
        <midComponent/>
        <midComponent/>
        <midComponent/>
        <midComponent/>
       </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import midComponent from './middleComponent.vue'

export default defineComponent({
    components: {midComponent},
    props: [],
})
</script>

<style scoped>

</style>