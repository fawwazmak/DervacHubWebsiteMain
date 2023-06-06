<script>
import { defineComponent } from 'vue';


export default defineComponent({
    props: ['value']
})
</script>


<template>
    <button class="px-6 py-[12px]">{{ value }}</button>
</template>


<style></style>