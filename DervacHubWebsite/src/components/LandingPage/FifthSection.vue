<script>
   import { defineComponent } from 'vue'
   import elementStores from '../../stores/store';

   export default defineComponent({
    data(){
        return{
            training: elementStores().$state.trainingSchedules,
            show: elementStores().$state.show,
            singleTraining: elementStores().$state.singleTraining
        }
    },
    methods: {
        showContent(data){
            this.singleTraining = data  
            console.log(this.singleTraining.content)         
        }
    }
   })
</script>

<template>
    <section id="fifth-section" class="h-fit px-16 py-20  w-full">
        <div class="space-y-6">
            <div class="space-y-4 lg:w-[70%] md:w-full">
                <p class="lg:text-6xl md:text-4xl text-sm text-red-400">Training Schedule</p>
                <p class="lg:text-2xl md:text-xl text-sm text-gray-500">We offer carefully organized training schedules that are tailored to meet the availability of our students and learners</p>
            </div>
            <div class="flex flex-col gap-20 md:flex-row">
                <img src="./images/gentle-coder-in-training-schedule-section.svg" class="image md:w-[50%] z-0" alt="">

                <div class=" w-full flex flex-col gap-8 md:justify-around">
                    <div class="w-full space-y-4" v-for="( trainings, index) in training"  :class="show ? 'bg-[#ffe8ec] p-4 rounded-xl' : 'bg-transparent'">
                        <div class="w-full flex justify-between">
                            <p class="font-semibold text-lg lg:text-xl md:text-md">{{ trainings.title }}</p>
                            <div class="flex" @click=" showContent(trainings)">
                                <svg v-if="!show" @click=" show = true" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="brown" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                                <svg v-else @click="show = false" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"/></svg>
                            </div>
                        </div>
                        <div v-show="show">
                            <p class="text-gray-500">{{singleTraining.content }}</p>
                            <div class="flex gap-8" v-show="index === 4">
                                <div class="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="lightgreen" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <p>{{ singleTraining.phyClass }}</p>
                                </div>
                                <div class="flex gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="lightgreen" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <p>{{ singleTraining.virClass }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- needed svgs -->
    
</template>

<style scoped>
  .image{
    transform: rotateY(180deg);
  }

</style>