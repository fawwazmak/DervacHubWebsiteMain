<script>
import { defineComponent } from 'vue';
import TrainingSection from './TrainingSection.vue';
import SecSixth from './fellowshipPage/SecSixth.vue';
import TenthSection from './LandingPage/TenthSection.vue'


export default defineComponent({
    components: { TrainingSection, SecSixth, TenthSection,}
})
</script>




<template>
    <div class="bg-white pb-16">

        <!-- first section starts -->
        <div class="flex lg:flex-row flex-col relative text-center lg:text-left lg:gap-20 gap-0 bg-gradient-to-tl from-[#f2f6fb] to-[#f3e0e5] py-8 md:py-12 lg:pb-28 justify-between md:px-20 px-8 font-sans w-full items-center">
            <div class="flex flex-col gap-8 lg:w-[40%] w-full">
                <p class="md:text-[42px] font-extrabold sm:text-[30px] text-[#224c75]">Our <span class="text-[#d82e21]">training program</span> will help you secure a future in tech</p>

                <p class="text-[#224c75] md:text-[16px] text-[15px]">Our Fellowship program is a 8 months intensive tech program through an agile delivery methodology, mentor matching, and leadership modules that equips young people with the skills and resources to launch and grow successful careers in tech and be able to work competitively in any global team.</p>

                <div class="lg:block hidden z-40">
                    <component is="Button" value="Join now" class="text-[15px] md:text-[18px] px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Join now</component>
                </div>
            </div>

            <div>
                <img src="./training-hero-image.svg" alt="" class="z-50 mb-0">
                <img src="./LandingPage/images/blue-curve.svg" alt="" class="absolute right-0 top-0 lg:block hidden">
            </div>
            <div class="lg:hidden mb-32 w-full">
                    <component is="Button" value="Join now" class="text-[15px] w-full px-8 rounded-[10px] py-5 bg-[#224c75] text-white">Join now</component>
            </div>   
            
            <img src="./fellowshipPage/images/red-curve.svg" alt="" class="absolute bottom-0 lg:left-0">
            
        </div>


        <!-- second section start -->

        <div class="md:px-20 px-8 py-[96px] bg-white">
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


        <!-- third section starts -->
        <div class="md:px-20 px-8 md:py-24 bg-white">
            <p class="md:text-[40px] text-[30px] font-bold text-[#224C75]">Payment Plans</p>
            <p class="md:text-[20px] text-[17px] text-[#475467] leading-[30px] my-[20px] md:w-[648px] lg:w-[768px]">
                Our payment plans are designed to be flexible, allowing you to concentrate on your learning. We offer the flexibility to pay upfront, either concurrently with your learning or successfully completing the program.
            </p>


            <div class="grid md:grid-cols-2 md:grid-rows-2 grid-rows-3 gap-8 md:gap-x-8">
                <div class="bg-[#FFF2F8] flex flex-col  gap-4 items-center py-[40px] md:px-[32px] px-4 rounded-[10px] h-fit">
                    <p class="md:text-[32px] text-[24px] font-bold text-[#224C75]">Upfront</p>
                    <p class="md:text-[24px] text-[18px] font-bold text-[#B42318]">#380,000</p>
                    <p class="text-[16px] text-[#475467]">
                        Prospective learners make payment and be part of the class. No additional charge is required at any point during or after the course
                    </p>
                </div>


                <div class="bg-[#F2F9FF] rounded-[10px] md:pt-16 lg:pt-28 px-4 py-8 pt-4 md:px-[32px] text-center md:row-span-2 flex flex-col items-center gap-4 ">
                    <p class="md:text-[32px] text-[24px] font-bold text-[#224C75]">Financial Investment Bond</p>
                    <p class="md:text-[24px] text-[18px] font-bold text-[#B42318]">#1,500,000</p>
                    <p class="md:text-[16px] text-[#475467]">Learners who cannot afford the training costs at once can opt for the DFIB (Dervac Financial Investment Bond). This is a (Work-Earn-Pay) action plan. Here, Dervac through its financier partners will agree to sponsor learners throughout the training under which the student agrees to pay XY% of your post-training income to spread repayment over a duration up to 12 months as agreed by the candidate. An initial commitment of 5% payment is mandatory for management approval. Learner will attend the training FREE but with a post training commitment of 12 months bond.
                    </p>
                </div>

            
                <div class="bg-[#F4F6FD] flex flex-col items-center rounded-[10px] py-[40px] px-4 text-center md:px-[32px] h-fit gap-4">
                   <p class="md:text-[32px] text-[24px] font-bold text-[#224C75]">Schedule Pay</p>
                    <p class="md:text-[24px] text-[18px] font-bold text-[#B42318]">#550,000</p>
                    <p class="text-[16px] text-[#475467]">
                        After making an initial upfront payment of 55%, prospective learners provide a documented schedule outlining the timeline for subsequent payments. Not more than 3 schedules of payments are allowed.
                    </p>
                </div>
            </div>
        </div>



        <!-- fourth section starts  -->
        <div class="bg-white md:px-20 px-8 max-[464px]:px-[1rem]">
            <div class="flex justify-center flex-col items-center mb-[4.5rem]">
                <p class="text-[36px] text-[#224C75] font-semibold mb-4 text-center max-[320px]:text-[29px]">Begin your journey with us</p>
                <p class="text-[20px] text-[#475467] max-w-[770px] text-center max-[524px]:text-[17px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nisi quod animi commodi dolore nesciunt deleniti. Aut.</p>
            </div>
            <div class=" flex flex-col gap-12">
                <div class="grid grid-cols-3 relative gap-6 mb-[11rem] max-[948px]:grid-cols-2 max-[612px]:grid-cols-1">
                    <SecSixth heading="Personal details" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="1" class="relative z-20"/>


                    <SecSixth class="relative z-20" heading="Educational details" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="2"/>

                
                    <SecSixth class="relative z-20" heading="Payments & Sponsporship" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="3"/>

                    <div class="w-fit">
                        <img class="absolute max-[948px]:hidden left-[12.5rem] top-[2.5rem] max-[1280px]:left-[10rem] max-[1176px]:left-[7rem] max-[1120px]:w-[40rem]" src="../assets/admission.png" alt="">
                    </div>
                </div>


                <div class="grid grid-cols-3 relative gap-6 mb-[11rem] max-[948px]:grid-cols-2 max-[612px]:grid-cols-1 ">
                    <SecSixth class="relative z-20" heading="Application Review" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="4"/>

                    <SecSixth class="relative z-20" heading="Application Submission" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="5"/>

                    <SecSixth class="relative z-20" heading="Get Admitted" description="Lorem ipsum dolor sit amet consectetur. Facilisis venenatis nascetur volutpat quis diam " steps="6"/>



                    <div class="w-fit">
                        <img class="absolute max-[948px]:hidden left-[12.5rem] top-[2.5rem] max-[1280px]:left-[10rem] max-[1176px]:left-[7rem] max-[1120px]:w-[40rem]" src="../assets/admission.png" alt="">
                    </div>
                </div>
                
            </div>


            <div class="flex items-center flex-col justify-center mt-20">
                <p class="md:text-[36px]  text-[20px] text-[#224C75] font-semibold mb-8 text-center">Candidates Attendance</p>
                <p class="md:text-[20px] text-[#475467] text-center max-w-[980px] text-center">Candidates are expected to be intentional about learning, be physically present at all your classes, Monday to Thursday, from 9am – 3pm; take your lessons seriously and participate in all your assessments, assignments and projects which will enable them bridge their skill-gaps and stand a better chance accelerate your pace to secure a future in the tech space.</p>
            </div>
        </div>



        <!-- fifth section starts -->

        <TenthSection />
    </div>
</template>





<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>