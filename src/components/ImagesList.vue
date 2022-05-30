<template>
  <transition-group class="image-list" tag="div" name="cards">
    <image-card
        v-for="cat in cats"
        :key="cat.id"
        @onLike="addToFavourites"
        @onDislike="deleteFromFavourites"
        :cat="cat"
        :isLiked="checkLike(cat)"
        class="image-list__item"
    />
  </transition-group>
</template>

<script>
import ImageCard from "@/components/ImageCard";
export default {
  name: "ImagesList",
  emits: ["onChange"],
  components: {ImageCard},
  props: {
    cats: {
      type: Array,
      required: true,
    },
    favouriteCats: {
      type: Array,
      required: true,
    }
  },
  methods: {
    addToFavourites(cat) {
      const cats = [...this.favouriteCats]
      cats.push(cat)
      this.$emit('onChange', cats)
    },
    deleteFromFavourites(cat) {
      const cats = [...this.favouriteCats]
      const index = cats.findIndex(({ id }) => id === cat.id)
      cats.splice(index,1)
      this.$emit('onChange', cats)
    },
    checkLike(cat) {
      return this.favouriteCats.some(({ id }) => id === cat.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.image-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__item {
    margin-right: 48px;
    margin-bottom: 46px;

    &:nth-child(5n) {
      margin-right: 0;
    }
  }

  .cards-enter-active,
  .cards-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .cards-enter-from,
  .cards-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>
