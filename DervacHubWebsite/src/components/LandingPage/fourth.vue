<template>
  <div class="md:px-24 px-8 py-[96px] bg-white">
      <div class="flex md:flex-row flex-col justify-between items-center">
        <p class="text-center sm:text-start text-[24px] lg:text-[30px] font-[600] text-[#224C75] h-fit leading-6">Dervac HUB Training Products</p>
        
        <router-link to="/trainingPage">
          <Button class="my-4 py-[12px] md:text-[16px] text-white md:my-0 px-[20px] bg-[#224C75] rounded-[10px]" value="View all courses"/>
        </router-link>
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
import Button from '../Button.vue';


export default defineComponent({
  components: {TrainingSection, Button}
})
</script>

<style scoped>

</style>