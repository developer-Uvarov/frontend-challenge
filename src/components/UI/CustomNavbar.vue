<template>
  <section class="header">
    <div class="container header__nav">
      <div class="header__nav-btn" @click="$router.push('/')">Все котики</div>
      <div class="header__nav-btn" @click="$router.push('/favourites')">Любимые котики</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomNavbar"
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #2196F3;
  &__nav {
    display: flex;
    align-items: center;
  }
  &__nav-btn {
    font-size: 14px;
    align-items: center;
    padding: 23px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      background-color: #1E88E5;
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
