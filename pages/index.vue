<template>
  <div>
    {{ text }}

    <TheHeader />

    <TheHero />

    <ProjectsList />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "~/components/TheHeader.vue";
import TheHero from "~/components/TheHero.vue";
import ProjectsList from "~/components/projects/ProjectsList.vue";

const text = "hi";
</script>

<style lang="scss" scoped></style>
