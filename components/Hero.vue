<script lang="ts" setup></script>

<template>
  <div class="hero container">
    <div class="hero__title title">
      Привет!
      <br />
      Меня&nbsp;зовут&nbsp;Ева,
      <br />
      я — веб&#8209;дизайнер.
    </div>

    <div class="hero__right-side">
      <div class="photo"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  //   display: grid;
  //   grid-template-columns: repeat(12, 1fr);
  //   grid-auto-flow: row;
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;

  &__title {
    position: relative;
    z-index: 20;
    // grid-column: 1 / 8;
    // align-self: center;
  }

  &__right-side {
    z-index: 10;
    grid-column: 7 / 13;
    position: absolute;
    transform: rotate(15deg);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
  }
}

.title {
  font-size: 5rem;
  font-family: "Inter";
  font-weight: 500;
  color: black;
}

.photo {
  display: none;
  background-image: url("./photo1.png");
  aspect-ratio: 1.5;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: red;

  flex-grow: 1;
  transform: scaleX(-1);
}
</style>
