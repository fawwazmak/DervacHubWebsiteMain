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

                <!-- PLEASE MAKE YOUR DESIGN RESPONSIVE -->


    <!-- The first section which include mr Anjorin Image to be done by Fawwaz-ME -->


    <!-- The second section will be done by ABDULAZEEZ which include people looking at the Laptop-->
    


    <!-- The third section will also be done by ABDULAZEEZ which talk about the types of program-->


    <!-- The fourth section will be done by EMMANUEL which include Dervac Hub training products-->


    <!-- for this section, You create a file for you to use to make components to be duplicated here. Thanks!  -->


    <!-- The fifth section will be done by ABDURRAHMAN which include the training schedule-->


    <!-- The sixth section will also be done by ABDURRAHMAN which include talk about buildig a successful tech career-->


    <!-- The seventh section will be done by ABDULHAMEED which include the testimonials-->
    

    <!-- for this section, You create a file for you to use to make components called TestimonialsCard to be duplicated here. Thanks!  -->

    <!-- The eight section will be done by AGBA which include the frequently asked questions-->

    <!-- The ninth section will be done by AGBA which include the logo of company our students work-->


    <!-- The tenth section will be done by ME which include start your career-->

<template>
  <Navbar />

  <component :is="currentPage"></component>

  <Footer />
</template>



<style></style>