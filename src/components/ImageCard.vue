<template>
  <div class="image-card">
    <img class="image-card__image" v-lazy="{ src: cat.url }"/>
    <div
        class="image-card__footer"
    >
      <div
          :class="{ 'image-card__like--active': isLiked }"
          class="image-card__like"
          @click="onLikeClick(cat)"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "ImageCard",
  emits: ["onLike","onDislike"],
  props: {
    cat: {
      required: true,
      type: Object
    },
    isLiked: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    onLikeClick(cat) {
      if (this.isLiked) {
        this.$emit('onDislike', cat)
      } else {
        this.$emit('onLike', cat)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.image-card {
  position: relative;

  &__image {
    width: 225px;
    height: 225px;
    object-fit: cover;
    object-position: center;
    transition: 0.3s ease-in-out all;

    &[lazy=loading] {
      background: gray;
    }
  }

  &:hover {
    .image-card__image {
      transform: scale(1.1,1.1);
      box-shadow: 4px 7px 4px 1px rgba(34, 60, 80, 0.35);
    }
  }

  &__footer {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    transition: 0.3s ease-in-out all;
  }

  &:hover {
    .image-card__footer {
      opacity: 1;
      visibility: visible;
    }
  }

  &__like {
    width: 40px;
    height: 40px;
    background: url("@/assets/icons/like.svg") no-repeat;
    cursor: pointer;

    &:hover {
      background: url("@/assets/icons/like-hover.svg") no-repeat;
    }

    &--active {
      background: url("@/assets/icons/like-active.svg") no-repeat;
    }
  }
}

</style>
