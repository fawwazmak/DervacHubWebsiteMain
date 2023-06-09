import { defineStore } from 'pinia'

export default function elementStores() {
    return defineStore('elements', {
        state: () => ({
            testifier: 0,
            trainingSchedules: [
                {
                    title: 'Summer Academy',
                    content: 'Our Summer Academy is an intensive program that is designed to provide student with an immersive learning experience over the summer.'
                },
                {
                    title: 'Weekend Session',
                    content: 'Our Weekend Session is designed to accommodate the schedules of busy students who may not have the time to attend classes during the week.'
                },
                {
                    title: 'Remote Session',
                    content: 'Our Remote Session allows students to participate in classes and workshops from the comfort of their own homes.'
                },
                {
                    title: 'Weekday Sessions',
                    content: 'Our Weekdays Session is designed for students who have a more flexible schedule during the week.'
                },
                {
                    title: 'Executive Class',
                    content: 'Our Executive class is specifically designed for busy proffesionals who require training that fits their demanding schedules.',
                    phyClass: 'Physical and',
                    virClass: 'Virtual classes'
                }
            ],
            show: false,
            singleTraining: {},
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
            ]
        })
    })()
}