<script>
import { DefineComponent } from 'vue';
export default {
        
}
</script>


<template>
    <div class=" border border-[#EAECF0] border-1 rounded-[16px] p-[24px] pb-[28px] mx-auto w-[768px] my-[20px]">
      <div class="flex justify-between py-[5px]">
        <div class="flex">
            <p class="text-[#101828] font-[500] text-[18px]">Product Designer</p>
            <p class="text-[#026AA2] bg-[#F0F9FF] py-[2px] px-[10px] rounded-[16px]">Design</p>
        </div>

        <router-link to="/Apply">
          <button class=" bg-gradient-to-r from-[#0B1927] to-[#224C75] text-white py-[2px] pe-[10px] ps-[4px] rounded-[8px]">Apply Now</button>
        </router-link>
      </div>
      <p class="font-[400] text-[#475467]">We’re looking for a mid-level product designer to join our team.</p>
      <div class="flex gap-[30px] mt-[10px]">
         <div class="flex"><img src="" alt=""><p class="font-[400] text-[16px] text-[#475467]">Full-time</p></div>
         <div class="flex"><img src="" alt=""><p class="font-[400] text-[16px] text-[#475467]">80k - 100k</p></div>
      </div>
    </div>
</template>



<style>

</style>