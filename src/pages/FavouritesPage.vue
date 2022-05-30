<template>
  <div class="favourites-page">
    <images-list
        :cats="favouriteCats"
        :favourite-cats="favouriteCats"
        @on-change="updateFavouriteCats"
    />
  </div>
</template>

<script>
import ImagesList from "@/components/ImagesList";
export default {
  name: "FavouritesPage",
  components: {ImagesList},
  data() {
    return {
      favouriteCats:[],
    }
  },
  mounted() {
      this.favouriteCats = localStorage.favouriteCats ? JSON.parse(localStorage.favouriteCats) : []
  },
  methods: {
    updateFavouriteCats(cats) {
      this.favouriteCats = cats
      localStorage.favouriteCats = JSON.stringify(this.favouriteCats)
    },
  }
}
</script>
