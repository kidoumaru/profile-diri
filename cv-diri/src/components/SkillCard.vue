<script setup>
defineProps({
    nama: String,
    level: String,
    icon: String,
})
</script>

<template>
    <div class="skill-card">
    <div class="skill-title">
        <img :src="icon" :alt="nama">
        <h3>{{ nama }}</h3>
    </div>
        <span v-if="level === 'mahir' " class="badge badge--mahir">Mahir</span>
        <span v-else class=" badge badge--pelajar ">Pelajar</span>
    </div>
</template>

<style scoped>
.skill-card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 12px;
}

.badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.85rem;
}

.badge--mahir {
    background: #ddd;
    color: #4500f2;
}

.badge--pelajar {
    background: #d03131;
    color: #f7e9e9;
}

.skill-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-title img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}
</style>