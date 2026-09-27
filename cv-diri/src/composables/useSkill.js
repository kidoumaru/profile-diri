import { ref } from 'vue'

export function useSkill() {
    const daftarSkill = ref([
        { id: 1, nama: 'html dan css', level:'mahir', icon:'/public/html dan css.png'},
        { id: 2, nama: 'javascript', level:'mahir', icon:'/public/javascript.png'},
        { id: 3, nama: 'Vue.js', level:'pelajar', icon:'/public/vuejs.png'},
    ])

    return { daftarSkill }
}