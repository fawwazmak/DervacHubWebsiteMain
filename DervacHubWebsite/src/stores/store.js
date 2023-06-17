import { defineStore } from 'pinia'

export default function elementStores() {
    return defineStore('elements', {
        state: () => ({
            testifier: 0,
            testimonials: [
                {
                    name: 'Bello Idris',
                    occupation: 'Mobile Dev., Google',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo aspernatur iusto consequatur, enim quibusdam illum est accusantium repudiandae nihil autem eligendi eveniet illo? Reiciendis neque dignissimos voluptatem modi est at! Architecto deleniti sapiente, quia ab commodi veniam.',
                    image: '/src/assets/testimonial-1.jpg'
                },
                {
                    name: 'Sanni Hammed',
                    occupation: 'Tech Asst., Dervac',
                    speech: 'At Dervac, we believe that everyone deserves the opportunity to pursue their dreams without the burden of the debt. Created a program that puts you in control of your education and career sapiente, quia ab commodi veniam. Reiciendis neque dignissimos voluptatem modi est at! Architecto deleniti sa',
                    image: '/src/assets/testimonial-2.jpg'
                },
                {
                    name: 'Luqman Abdulrahman',
                    occupation: 'Web Dev., Enyata',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo aspernatur iusto consequatur, enim quibusdam illum est accusantium repudiandae nihil autem eligendi eveniet illo? Reiciendis neque dignissimos voluptatem modi est at! Architecto deleniti sapiente, quia ab commodi veniam.',
                    image: '/src/components/LandingPage/images/gentle-coder-in-training-schedule-section.svg'
                },
                {
                    name: 'Olatunji Yusuf',
                    occupation: 'Backend Dev., Amazon',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo aspernatur iusto consequatur, enim quibusdam illum est accusantium repudiandae nihil autem eligendi eveniet illo? Reiciendis neque dignissimos voluptatem modi est at! Architecto deleniti sapiente, quia ab commodi veniam.',
                    image: '/src/assets/testimonial-1.jpg'
                },
            ],
            showSummer: false,
            showWeekend: false,
            showRemote: false,
            showWeekday: false,
            showExecutive: false,
            showAnswer: false,
            learnMoreBgBlue: true,
            changeHireColor: false,
            changeApplyNowColor: false,
            drop: false,
            dropCollaborateOptions: false,
        })
    })()
}