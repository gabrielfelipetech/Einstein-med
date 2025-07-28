<template>
  <header class="header">
    <VImage
      class="header__logo"
      src="/logo.png"
      alt="Logo"
      :width="40"
      :height="40"
    />
    <h1 class="header__title">Einstein Med.AI</h1>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.header {
  background-color: #013352;
  border-bottom: 1px solid #f3fbff;
  @apply p-6 w-full flex items-center;

  &__logo {
    @apply mr-4;
  }

  &__title {
    color: #fff;
    @apply text-3xl;
  }
}
</style>
