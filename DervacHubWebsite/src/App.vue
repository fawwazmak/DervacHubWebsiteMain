<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import MainLandingPage from './components/LandingPage/MainLandingPage.vue'



export default defineComponent({
  components: {Navbar, Footer, MainLandingPage},
  data() {
    return {
      currentPage: MainLandingPage,
    }
  }
})
</script>




<template>
  <Navbar />
  
  <component :is="currentPage"></component>

  <Footer />
</template>



<style></style>