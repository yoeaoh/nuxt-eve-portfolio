<script lang="ts" setup></script>

<template>
  <div class="projects-card">
    <div class="projects-card__content">
      <div class="projects-card__title">Онлайн-магазин косметики</div>

      <div class="projects-card__text">Крутое описание кейса</div>
    </div>

    <div class="projects-card__image">image</div>
  </div>
</template>

<style lang="scss" scoped>
.projects-card {
  display: flex;

  &__content {
    flex-basis: 40%;
    flex-grow: 1;
    flex-shrink: 1;

    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 1rem;

    padding: 2rem 1rem 1rem;
    text-align: right;
  }

  &__title {
    font-size: 2rem;
  }

  &__text {
    font-size: 1rem;
  }

  &__image {
    flex-basis: 55%;
    flex-grow: 1;
    flex-shrink: 1;

    background-color: orangered;
    width: 100%;
    aspect-ratio: 1.5;
  }
}
</style>
