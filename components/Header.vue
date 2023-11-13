<script lang="ts" setup>
const scrollPosition = ref(0);

const updateScroll = () => {
  scrollPosition.value = window.scrollY;
  console.log(scrollPosition.value);
};

// onMounted(() => {
//   window.addEventListener("scroll", updateScroll);
// });

// Добавить smooth scroll
</script>

<template>
  <header class="header container">
    <nav class="menu">
      <a href="#" class="logo"></a>

      Надо бы добавить оранжевый акцентный цвет в лого и ещё куда-нибудь
      (например, бегающая точка на фоне из линий)

      <ul class="menu__list">
        <li class="menu__item">Проекты</li>

        <li class="menu__item">Обо мне</li>

        <li class="menu__item">Контакты</li>
      </ul>

      <ul class="menu__socials socials">
        <li class="socials__item">insta</li>

        <li class="socials__item">telegram</li>

        <li class="socials__item">linkedin</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 100px;
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
}

.logo {
  display: block;
  width: 32px;
  height: 32px;
  background-image: url("./eve_rose_logo.png");
  background-position: center;
  background-size: contain;
}

.menu {
  flex-grow: 1;

  display: flex;
  gap: 2rem;
  align-items: center;

  &__list {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  &__socials {
    margin-left: auto;

    display: flex;
    gap: 2rem;
  }
}
</style>
