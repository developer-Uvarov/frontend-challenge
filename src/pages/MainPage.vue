<template>
  <div class="main-page">
    <images-list
        :cats="cats"
        :favouriteCats="favouriteCats"
        @on-change="updateFavouriteCats"
    />
    <div class="main-page__loader">... загружаем еще котиков ... </div>
    <div
        ref="observer"
        v-infinity-scroll="getMoreCats"
    />
  </div>
</template>

<script>
import ImagesList from "@/components/ImagesList";

import { catRequests } from "@/api/GetCats";


export default {
  name: "MainPage",
  components: { ImagesList },
  data() {
    return {
      cats: [],
      favouriteCats: [],
      limit: 20,
    }
  },
  mounted() {
    this.getMoreCats()
    this.favouriteCats = localStorage.favouriteCats ? JSON.parse(localStorage.favouriteCats) : []
  },
  methods: {
    updateFavouriteCats(cats) {
      this.favouriteCats = cats
      localStorage.favouriteCats = JSON.stringify(this.favouriteCats)
    },
    async getMoreCats() {
        const response = await catRequests.moreCats()
        this.cats = [...this.cats, ...response.data]
    },
  },

}
</script>

<style lang="scss" scoped>
.main-page {
  &__loader {
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
</style>
