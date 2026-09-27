<script setup>
import { Comment, ref } from 'vue'
import SkillCard from './components/SkillCard.vue'
import KartuRate from './components/KartuRate.vue'
import { useSkill } from './composables/useSkill'

const { daftarSkill } = useSkill()
const gambarProfil = ref('/public/lucy.jpg')
const linkAktif = ref(true)

// const daftarSkill = ref([
//   { id: 1, nama: 'html dan css', level:'mahir', icon: '/html dan css.png'},
//   { id: 2, nama: 'javascript', level:'mahir', icon: '/javascript.png'},
//   { id: 3, nama: 'Vue.js', level:'pelajar', icon: '/vuejs.png'},
// ])

const daftarRate = ref([
  {id: 1, nama: 'Profile Web Perusahaan', harga: 5500000},
  {id: 2, nama: 'Sistem HRIS', harga: 7500000},

])

const stok = ref(1)

function addToCart(id) {
  const item = daftarRate.value.find(item => item.id === id)
  if (item) {
    alert(`Item "${item.nama}" dengan harga Rp.${item.harga.toLocaleString('id-ID')} telah ditambahkan ke keranjang.`)
  }
}

const comment = ref('')
const skill = ref(['html', 'css', 'js'])


</script>

<template>

  <!-- contoh penggunaan v-bind -->
  <img :src='gambarProfil' alt='Foto Profil'/>
  <a :class="{aktif: linkAktif}" href='#'>Beranda</a>

  <!-- contoh penggunaan v-for -->
  <ul>
    <li v-for="item in skill" :key="item">{{ item }}</li>
  </ul>

  <!-- contoh penggunaan v-if  -->
  <p v-if="stok > 0">Stok BBM tersedia</p>
  <p v-else-if="stok === 1">Stok BBM tipis</p>
  <p v-else>Stok BBM kosong </p>


  <div class="skill-list">
    <Skill-card
      v-for="skill in daftarSkill"
      :key="skill.id"
      :name="skill.nama"
      :level="skill.level"
      :icon="skill.icon"
      />
  </div>

  <div class="rate-list">
    <KartuRate
        v-for="rate in daftarRate"
        :key="rate.id"
        :name="rate.nama"
        :price="rate.harga"
        @add-to-cart="addToCart"
    />
  </div>

  <p>n/</p>

  <!--contoh v-model-->
  <input v-model="comment" placeholder="Tulis komentar anda disini...">
  <p> Preview Komentar: {{ comment }}</p>

</template>

<style scoped></style>
