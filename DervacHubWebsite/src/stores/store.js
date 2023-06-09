import { defineStore } from 'pinia'

export default function elementStores() {
    return defineStore('elements', {
        state: () => ({
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
            singleTraining: {}
        })
    })()
}