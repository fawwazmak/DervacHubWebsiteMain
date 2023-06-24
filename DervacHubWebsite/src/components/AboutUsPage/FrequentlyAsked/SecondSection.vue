<script>
import { defineComponent } from 'vue';
import elementStores from '../../../stores/store';


export default defineComponent({
    components: {},
    props: [],
    data () {
        return {
            showRealFaqsAnswerOne: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerTwo: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerThree: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFour: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerFive: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSix: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerSeven: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerEight: elementStores().$state.showAnswerInMainPage,
            showRealFaqsAnswerNine: elementStores().$state.showAnswerInMainPage,
        }
    }
})
</script>


<template>
    <div class="md:w-[50%] md:px-0 px-6 md:mx-auto py-16 flex flex-col gap-12 font-sans">
        <div class="text-center">
            <p class="font-extrabold md:text-[40px] text-[25px]">Frequently asked questions</p>
            <p class="sm:text-[18px]">Everything you need to know about Dervac</p>
        </div>

        <div>
            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerOne = !this.showRealFaqsAnswerOne">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerOne" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>


                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerOne ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerOne ? 'text-left' : 'md:text-left text-center'">What Does Dervac Hub Do?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerOne">Dervac HUB is an initiative od Dervac Global Services Ltd non-profit partnership program that authorizes global universities and colleges to deliver industry-recognized Huawei Certification courses to students.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerTwo = !this.showRealFaqsAnswerTwo">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerTwo" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerTwo ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerTwo ? 'text-left' : 'md:text-left text-center'">How Can I Enroll Into Dervac Hub Fellowship Program</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerTwo">To embark on the enlightening Dervac Hub Fellowship Program, visit their website and explore the dedicated enrollment section. Fill out the online application form with your personal details, academic background, and a compelling statement of purpose. Ensure you meet the eligibility criteria and submit your application before the specified deadline.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerThree = !this.showRealFaqsAnswerThree">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerThree" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerThree ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerThree ? 'text-left' : 'md:text-left text-center'">What Next After Registration?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerThree">After registration, prepare for an incredible journey ahead. Stay tuned for program updates and instructions. Connect with fellow participants through provided communication channels. Be ready to engage in enriching activities and seize opportunities for personal and professional growth. Embrace the possibilities that await you on this exciting path.</p>
                </div>
            </div>

            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFour = !this.showRealFaqsAnswerFour">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFour" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFour ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFour ? 'text-left' : 'md:text-left text-center'">What Happens If I Don't Pass The Assessment?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="this.showRealFaqsAnswerFour">If you don't pass the assessment, fear not, for growth lies in resilience. Take the opportunity to reflect on areas for improvement. Seek guidance from mentors or resources provided by Dervac Hub. Embrace the chance to learn and reapply, for success often blooms from perseverance.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerFive = !this.showRealFaqsAnswerFive">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerFive" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerFive ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerFive ? 'text-left' : 'md:text-left text-center'">When Will Class For The First Cohort Start?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerFive">The eagerly awaited first cohort classes will commence soon. Stay tuned for official announcements and program schedules. Keep an eye on your email or the Dervac Hub website for updates. Prepare yourself for an immersive learning experience that will ignite your journey toward greatness.</p>
                </div>
            </div>


            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Long Is The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">If I Am Succesful, Can I Defer My Admission?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Will I Get A Certificate At The End Of The Training?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Are There Any Other Benefit That Comes With the Training?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Do I Need To Have A background In Tech To Apply?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">What Qualifies Me To Get Accepted Into The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Much Is The Tuition Fee?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Will I Receive Any Assistance In Securing A Job After I Graduate?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">What Will I Learn In Classes During The Seven Months?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Where Will The Class Take Place?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Will Application Run For?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Can I Collaborate / Partner With Dervac?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>



            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">How Long Is The Fellowship Program?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>




            <div class="flex gap-6 p-6">

                <div class="flex w-fit h-fit" @click="() => this.showRealFaqsAnswerSix = !this.showRealFaqsAnswerSix">
                    <img src="../../LandingPage/images/plus-icon-gray-color.svg" v-if="!showRealFaqsAnswerSix" alt="">
                    <img src="../../LandingPage/images/minus-icon-gray-color.svg" v-else alt="">
                </div>
                <div class="w-[90%] flex flex-col gap-4 md:text-left text-center" :class="showRealFaqsAnswerSix ? 'bg-blue-50 p-6' : 'bg-none'">
                    <p class="font-medium text-[13px] sm:text-[18px]" :class="showRealFaqsAnswerSix ? 'text-left' : 'md:text-left text-center'">Holiday And Absence Policy?</p>
                    <p class="text-[9px] sm:text-[15px] font-medium" v-show="showRealFaqsAnswerSix">The Fellowship Program spans a transformative journey of eight months. Brace yourself for an intensive and rewarding experience. Engage in immersive learning, mentorship, and personal growth activities. Embrace the opportunity to delve deep into your field and emerge as a well-rounded professional.</p>
                </div>
            </div>
        </div>

        <!-- <div class="text-center"> -->
            <!-- <button class="bg-gray-200 px-[1.5em] py-[0.5em] font-bold rounded-[5px]" >See more</button> -->
            <!-- <router-link to="/faqs"> -->
                <!-- <Button value="See more" class="bg-white px-[1.5em] py-5 rounded-[10px] border-[2px] border-gray-200"/> -->
            <!-- </router-link> -->

        <!-- </div> -->
    </div>
</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.font-sans {
    font-family: 'Inter', sans-serif;
}
</style>