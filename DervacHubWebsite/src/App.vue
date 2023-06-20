<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import router from './routes';


export default defineComponent({
  components: {Navbar, Footer},
  data() {
    return {
    }
  }
})
</script>

                <!-- PLEASE MAKE YOUR DESIGN RESPONSIVE -->

<template>
  <div id="main" class="bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] 2xl:container 2xl:mx-auto overflow-x-hidden">
    <Navbar class="sticky top-2 mx-auto left-0 right-0 w-[95%] mx-auto z-50 shadow-2xl"/>
     <router-view></router-view>
    <Footer />
  </div>
</template>



<style></style>