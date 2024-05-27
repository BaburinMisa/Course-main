<script>
import TheFooter from "@/assets/Components/TheFooter.vue";
import TheHeader from "@/assets/Components/TheHeader.vue";
import SliderBlockTwo from "@/assets/Components/SliderBlockTwo.vue";
export default {
  components: { TheFooter, TheHeader, SliderBlockTwo },
  data() {
    return {
      index: 0,
      LinkMain4: 'src/assets/img/OutTeamThree.png',
      LinkMain5: 'src/assets/img/OutTeamTwo.png',
      LinkMain6: 'src/assets/img/OutTeamOne.png',
      LinkPhotoItems: [
        "src/assets/img/OutTeamOne.png",
        "src/assets/img/OutTeamTwo.png",
        'src/assets/img/OutTeamThree.png',
        'src/assets/img/OutTeamFour.jpg',
        'src/assets/img/cafe-eda-crm-restoranka-l8hyutbym1.jpg',
        'src/assets/img/4871de3e24cf779a9c4dd0279c4c2a21_w470.jpg'
      ]
    }
  },
  methods: {
    slideRight() {
      this.index = (this.index + 1) % this.LinkPhotoItems.length;
      this.LinkMain4 = this.LinkPhotoItems[this.index];
      this.LinkMain5 = this.LinkPhotoItems[(this.index + 1) % this.LinkPhotoItems.length];
      this.LinkMain6 = this.LinkPhotoItems[(this.index + 2) % this.LinkPhotoItems.length];
    },
    slideLeft() {
      this.index = (this.index - 1 + this.LinkPhotoItems.length) % this.LinkPhotoItems.length;
      this.LinkMain4 = this.LinkPhotoItems[this.index];
      this.LinkMain5 = this.LinkPhotoItems[(this.index + 1) % this.LinkPhotoItems.length];
      this.LinkMain6 = this.LinkPhotoItems[(this.index + 2) % this.LinkPhotoItems.length];
    }
  }
}
</script>

<template>
  <div class="main_first_about">
    <h1>CoffeeCrew</h1>
    <h2>Наша команда</h2>

    <div class="OurTeam">
      <div class="ourTeamOneTwo">
        <div class="ourTeamOne">
          <p>Никита Ананьев <span>Генеральный директор</span></p>
        </div>
        <div class="ourTeamTwo">
          <p>Артем Мрасов <br> <span>Старший администратор</span></p>
        </div>
      </div>
      <div class="ourTeamOneTwoSecond">
        <div class="ourTeamOneSecond">
          <p>Катерина Денилолер <span>Старший бариста</span></p>
        </div>
        <div class="ourTeamTwoSecond">
          <p>Азиза Мухтарова<br> <span>Шеф-повар</span></p>
        </div>
      </div>
    </div>
  </div>

  <div class="main_second_about">
    <p>Каждый прожитый миг ценен. Мы стараемся перенять многовековой <br> опыт французских мастеров и внести в него что-то новое, чтобы
      <br> дарить улыбки и настроение нашим гостям, даже если на посещение <br> кофейни у них совсем мало времени.</p>
  </div>

  <div class="Slider1">
    <div class="Slider-block-slider1">
      <div class="Slider-block-slider-photo21">
        <button @click="slideLeft" ref="rowLeft" class="arrow-btn21"> <img src="../assets/img/Left-Arrow-PNG-Image%201.png" id="arrow-left21" alt="arrow-left"></button>
        <img id="photo_121" :src="LinkMain4" alt="photo-1">
        <img id="photo_221" :src="LinkMain5" alt="photo-2">
        <img id="photo_221" :src="LinkMain6" alt="photo-2">
        <button @click="slideRight" ref="rowRight" class="arrow-btn21"><img src="../assets/img/Left-Arrow-PNG-Image%202.png" id="arrow-right21" alt="arrow-right"></button>
      </div>
    </div>
  </div>
</template>

<style>
.OurTeam {
  margin-bottom: 2em;
}
.ourTeamOne,
.ourTeamTwo,
.ourTeamOneSecond,
.ourTeamTwoSecond {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size:2.6vw;
  text-align: center;
}
.ourTeamOne span,
.ourTeamTwo span,
.ourTeamOneSecond span,
.ourTeamTwoSecond span {
  font-size: 2vw;
}
.ourTeamOneTwo,
.ourTeamOneTwoSecond {
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
}
.ourTeamOne,
.ourTeamTwo,
.ourTeamOneSecond,
.ourTeamTwoSecond {
  flex: 1;
}

.main_first_about {
  background: url("../assets/img/back2.png") no-repeat top center;
  background-size: cover;
  width: 100%;
  height: 55em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main_first_about h1 {
  color: #fff;
  font-size: 4vw;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}
.main_first_about h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 3vw;
}
.main_second_about {
  font-family: "Roboto", sans-serif;
  font-size: 1.75rem;
  align-items: center;
  text-align: center;
  font-weight: 300;
  padding-top: 1em;
}
.Slider1 {
  background-color: #525050;
  height: 33em;
  margin-top: 2em;
}
.Slider-block-slider-photo21 {
  text-align: center;
  align-items: center;
  padding-top: 4em;
  margin-left: 8em;
}
#arrow-left21,
#arrow-right21 {
  width: 4em;
  height: 4em;
  cursor: pointer;
}
#arrow-left21 {
  margin-bottom: 13em;
  margin-right: 2.5em;
}
#arrow-right21 {
  margin-bottom: 13em;
  margin-right: 15em;
  margin-left: 2em;
}
#photo_121,
#photo_221 {
  margin-right: 1em;
  width: 22em;
  height: 25em;
  border-radius: 20px;
}
.arrow-btn21 {
  background: #525050;
  border: none;
}

@media (max-width: 768px) {
  .main_first_about {
    height: auto;
    padding: 2em 1em;
    text-align: center;
  }
  .OurTeam {
    flex-direction: column;
  }
  .ourTeamOneTwo,
  .ourTeamOneTwoSecond {
    flex-direction: column;
    margin-top: 1em;
  }
  .Slider1 {
    height: auto;
    padding: 2em 1em;
  }
  .Slider-block-slider-photo21 {
    margin-left: 0;
    padding-top: 1em;
  }
  #arrow-left21,
  #arrow-right21 {
    width: 2em;
    height: 2em;
    margin-bottom: 1em;
  }
  #photo_121,
  #photo_221 {
    width: 100%;
    height: auto;
    margin-bottom: 1em;
  }
}
</style>