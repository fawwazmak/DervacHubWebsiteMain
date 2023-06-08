<script>
  import { defineComponent } from 'vue';

  export default defineComponent({

  })
</script>

<template>
    <section id="sixth-section" class="overflow-hidden h-[100vh] px-16 py-20 w-full grid lg:grid-cols-2 gap-10 bg-[whitesmoke]">
        <div class="space-y-8">
            <p class="lg:text-5xl font-black text-[#224C75]">Build a successful tech career without tuition until you are hired</p>
            <p class="lg:text-xl text-[gray]">At Dervac, we believe that everyone deserves the opportunity to pursue their dreams without the burden of the debt. That's why we've created a program that puts you in control of your education and career</p>
            <div class="flex gap-10">
                <p class="cursor-pointer w-fit border border-[#224C75] rounded-md px-6 py-[13px] text-[#224C75] hover:bg-[#224C75] hover:text-[whitesmoke]">Learn more</p>
                <p class="cursor-pointer w-fit border border-[#224C75] rounded-md px-6 py-[13px] bg-[#224C75] text-[whitesmoke] hover:bg-transparent hover:text-[#224C75]">Apply Now</p>
            </div>
        </div>
        <div class="relative">
            <img src="./images/fifth-image-in-the-build-a-successful-tech-career-section.svg" class="absolute top-[250px] right-0 z-50" alt="">
            <img src="./images/fourth-image-in-the-build-a-successful-tech-career-section.svg" class="absolute bottom-0 left-[215px] z-50" alt="">
            <img src="./images/first-image-in-the-build-a-successful-tech-career-section.svg" class="absolute top-[80px] left-[150px] z-50" alt="">
            <img src="./images/second-image-in-the-build-a-successful-tech-career-section.svg" class="absolute top-0 left-[320px] z-50" alt="">
            <img src="./images/third-image-in-the-build-a-successful-tech-career-section.svg" class="absolute top-[250px] z-50" alt="">
            <div class="w-[600px] h-[600px] border-2 border-[#224C75] rounded-[50%] absolute z-0 left-[480px]"></div>
        </div>
    </section>
</template>