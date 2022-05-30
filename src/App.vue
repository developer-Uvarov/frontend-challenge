<template>
  <div>
    <custom-navbar></custom-navbar>
    <div class="page container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CustomNavbar from "@/components/UI/CustomNavbar";
export default {
  components: {CustomNavbar}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Roboto",sans-serif;
}
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
.container {
  max-width: 1320px;
  width: 100%;
  margin: auto;
}
.page {
  margin: 50px auto;
}
</style>
