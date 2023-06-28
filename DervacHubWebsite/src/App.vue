<script>
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import router from './routes';
import elementStores from './stores/store';


export default defineComponent({
  components: {Navbar, Footer},
  data() {
    return {
      isAboutPage: elementStores().$state.ApplyPageShow,
    }
  },
  watch: {
    $route(to) {
      this.isAboutPage = to.path === '/Apply';
    },
  },
})
</script>

                <!-- PLEASE MAKE YOUR DESIGN RESPONSIVE -->

<template>
  <div id="main" class="bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] 2xl:container 2xl:mx-auto overflow-x-hidden">
    <Navbar class="sticky top-2 mx-auto left-0 w-[95%] mx-auto z-50 shadow-2xl" v-show="!isAboutPage"/>
     <router-view></router-view>
    <Footer v-show="!isAboutPage"/>
  </div>
</template>


<style></style>