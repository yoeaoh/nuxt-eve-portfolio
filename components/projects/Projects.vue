<script lang="ts" setup></script>

<template>
  <div class="projects container">
    <div class="projects__title">Проекты</div>

    <div class="projects__list projects-list">
      <ProjectsCard v-for="i in 20" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: minmax(5rem, 10rem) minmax(40rem, 1fr);
  position: relative;

  &__title {
    position: sticky;
    top: 5rem;
    font-size: 3rem;
    color: #d9d9d9;
    justify-self: center;
    align-self: start;
    writing-mode: vertical-lr;

    font-family: "Inter";
    padding-top: 2rem;
  }
}
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
