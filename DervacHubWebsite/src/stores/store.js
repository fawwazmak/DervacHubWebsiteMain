import { defineStore } from 'pinia'

export default function elementStores() {
    return defineStore('elements', {
        state: () => ({
            showSummer: false,
            showWeekend: false,
            showRemote: false,
            showWeekday: false,
            showExecutive: false,

        })
    })()
}