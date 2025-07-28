<template>
  <VSidebar :items="sidebarItems" />
</template>

<script lang="ts" setup>
const sidebarItems = ref([
  { label: 'Home', icon: 'mdi:home', to: '/home' },
  { label: 'Anamnese', icon: 'mdi:clipboard-list', to: '/anamnese' }
])
</script>

<style></style>