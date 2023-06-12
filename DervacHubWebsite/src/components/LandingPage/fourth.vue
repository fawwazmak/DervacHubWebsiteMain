<template>
  <div class="px-6 py-[96px] bg-white">
      <div class="flex md:flex-row flex-col justify-between items-center">
        <p class="text-center sm:text-start text-[24px] lg:text-[30px] font-[600] text-[#224C75] h-fit leading-6">Dervac HUB Training Products</p>
        <button class="my-4 py-[12px] md:text-[16px] text-white md:my-0 px-[20px] bg-[#224C75] rounded-[15px]" >View all courses</button>
      </div>
      <p class="text-[#475467] text-[20px] md:py-[20px] text-center sm:text-start">Discover our range of courses and select the one that best suits your needs and interests.</p>
      <div class="my-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:my-2">
        <TrainingSection field="Frontend development"/>
        <TrainingSection field="Backend development"/>
        <TrainingSection field="Fullstack development"/>
        <TrainingSection field="Devops engineering"/>
        <TrainingSection field="Product Design"/>
        <TrainingSection field="Product management"/>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TrainingSection from '../TrainingSection.vue';


export default defineComponent({
  components: {TrainingSection}
})
</script>

<style scoped>

</style>