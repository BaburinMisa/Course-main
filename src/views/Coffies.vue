<script>

import TheFooter from "@/assets/Components/TheFooter.vue";
import TheHeader from "@/assets/Components/TheHeader.vue";
import Bron from "@/assets/Components/Bron.vue";

export  default {
  components: {TheFooter,TheHeader,Bron},
  data(){
    return{
    isActiveBron:false,
    }
  }
}
</script>

<template>
  <div class="CoffiesOne_coffies">

    <div class="CoffiesOneMain_coffies">

      <div class="CoffiesOneMainText_coffies">
        <h1 class="CoffiesOneMainH_coffies">Кофейня на Ленина</h1>
        <p class="CoffiesOneMainP_coffies">Первое заведение CoffeeCrew в формате
          кофейни. Мы открыли его в 2017 году
          Место уже успело полюбиться многим
          томичам за неповторимую атмосферу<br> <br>
          Днем в арочные окна попадает солнечный
          свет и играя с деталями интерьера, создает
          уют. Вечером в кофейне легкий полумрак,
          находясь в котором приятно проводить
          уходящий день<br> <br>
          Каждый сезон мы обновляем нашу
          витрину. Ещё внутри кофейни есть меловая
          доска, на которой живут разные герои,
          созданные руками приглашенных
          художников<br><br>
          В меню с самого утра есть салаты, супы и
          наши фирменные несырники.
          Представлена наша собственная выпечка и десерты</p>
        <a href="https://2gis.ru/tomsk/directions/points/%7C84.878993%2C56.278377%3B70030076306702478?m=84.92924%2C56.386002%2F11.33" target="_blank"><button class="MainSecondButton_coffies">Найти на карте</button></a>
      </div>

      <div class="CoffiesOneMainImg_coffies">
        <img src="../assets/img/IMGcoffiest.png" alt="">
      </div>

    </div>
  </div>

  <div class="CoffiesTwo_coffies">

    <div class="CoffiesTwoMain_coffies">
      <div class="CoffiesTwoMainImg_coffies">
        <img src="../assets/img/CoffiesTwoMainImg.png" alt="">
      </div>
      <div class="CoffiesTwoMainText_coffies">
        <h1 class="CoffiesTwoMainH_coffies">Кофейня на Кулёва</h1>
        <p class="CoffiesTwoMainP_coffies">И конечно же рассказ о наших заведениях был бы не полный без
          упоминания о нашем новом филиале CoffeeCrew<br> <br>
          Это необычный для нас формат, но от этого не менее интересный
          Мы разработали принципиально новое меню, добавили вино и
          дижестивы<br> <br>
          Обновили интерьер и подход к посадке. Это единственное заведение, где можно забронировать стол<br><br></p>
        <button @click="isActiveBron = true" class="MainSecondButton_coffies">Забронировать</button>
        <Bron v-if="isActiveBron"></Bron>
      </div>



    </div>
  </div>


</template>

<style>

.CoffiesOneMain_coffies{
  padding-left: 7em;
  display: flex;
  padding-top: 4em;
  padding-bottom: 5em;
  justify-content: center;
}
.CoffiesOne_coffies{
  background: url("../assets/img/CoffiesOne.png") no-repeat top center;
  width: 100%;
  height: 100%;

}
.CoffiesOneMainText_coffies{
  background: #EFEFEF;
  width: 35em;
  height: 55em;
}

.CoffiesOneMainH_coffies{
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  padding: 3.5rem 6rem 3rem 5rem;
}
.CoffiesOneMainP_coffies{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 1.3rem;
  padding: 0 4em 2em;
}
.MainSecondButton_coffies{
  width: 15em;
  height: 3.75em;
  background-color: black;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 5.1em;
  cursor: pointer;
  border: none;
  border-radius: 0.6em;
  transition: 0.8s ease;

}
.MainSecondButton_coffies:hover{
  background: #4cae4c;
}

.CoffiesTwoMain_coffies{
  padding-left: 3em;
  display: flex;
  padding-top: 5em;
  justify-content: center;
}
.CoffiesTwo_coffies{
  background: url("../assets/img/CoffiesMainTwo.png") no-repeat top center;
  width: 100%;
  height: 55em;

}
.CoffiesTwoMainText_coffies{
  background: #EFEFEF;
  width: 35em;
  height: 40em;
}

.CoffiesTwoMainH_coffies{
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  padding: 3.5rem 6rem 3rem 5rem;
}
.CoffiesTwoMainP_coffies{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 1.3rem;
  padding: 0 4em 2em;
}


</style>