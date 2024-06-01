<script>
import { defineComponent } from "vue";
import TheFooter from "@/assets/Components/TheFooter.vue";

export default defineComponent({
  components: { TheFooter }
});
</script>

<template>
  <header>
    <div class="header-items">
      <ul class="header-list-1">
        <router-link class="header-list-1-ul" to="/main">Главная</router-link>
        <router-link class="header-list-1-ul" to="/coffies">Кофейни</router-link>
        <router-link class="header-list-1-ul" to="/about">О Нас</router-link>
      </ul>

      <ul class="header-list-2">
        <li><a href="https://www.facebook.com/" target="_blank"><img id="Facebook" src="../img/Vector.png" alt="facebook"></a></li>
        <li><a href="https://vk.com/" target="_blank"><img id="VK" src="../img/Vector%20(1).png" alt="VK"></a></li>
        <li><a href="https://instagram.com/" target="_blank"><img id="Instagram" src="../img/Vector%20(2).png" alt="instagram"></a></li>
      </ul>
    </div>
  </header>
</template>

<style>
header {
  height: 3.5em;
  background: #000000;
  color: white;
  font-family: "Roboto Light";
  border-bottom: 1px solid white;
}

.header-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.header-list-1 {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-list-1-ul {
  list-style-type: none;
  margin-right: 1em;
  font-size: 1.1em;
  margin-top: 0.7em;
  transition: border-bottom 0.3s ease;
}

.header-list-1-ul:hover {
  border-bottom: 2px solid #ffffff;
}

.header-list-1 a {
  text-decoration: none;
  color: #fff;
}

.header-list-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-list-2 li {
  list-style-type: none;
  margin-right: 0.5em;
  margin-top: 0.7em;
}

@media (max-width: 768px) {
  header {
    height: auto;
    padding: 1em 0;
  }

  .header-items {
    flex-direction: column;
  }

  .header-list-1 {
    flex-direction: column;
    margin-top: 1em;
    align-items: center;
  }

  .header-list-1-ul {
    margin-right: 0;
    margin-bottom: 1em;
  }

  .header-list-2 {
    margin-top: 1em;
    justify-content: center;
  }

  .header-list-2 li {
    margin-right: 1em;
  }
}
</style>