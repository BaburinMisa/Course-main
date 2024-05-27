<script>
import SliderBlock from "@/assets/Components/SliderBlock.vue";
import TheFooter from "@/assets/Components/TheFooter.vue";
import TheHeader from "@/assets/Components/TheHeader.vue";
import Map from "@/assets/Components/Map.vue";

export default {
  components: { TheFooter, SliderBlock, TheHeader, Map },
  data() {
    return {
      index: 0,
      LinkMain1: 'src/assets/img/div.t552__blockimg.png',
      LinkMain2: 'src/assets/img/div.t552__blockimg(1).png',
      LinkPhotoItems: [
        "src/assets/img/div.t552__blockimg.png",
        "src/assets/img/div.t552__blockimg(1).png",
        'src/assets/img/div.t552__blockimg(3).png',
        'src/assets/img/photo-eate.jpg',
        'src/assets/img/Croissant_Wicker_basket_513022_1920x1080.jpg',
        'src/assets/img/b386a902762911ee9ad5ceda526c50ab_upscaled.jpg'
      ]
    }
  },

  methods: {
    slideRight() {
      this.index = (this.index + 1) % this.LinkPhotoItems.length;
      this.LinkMain1 = this.LinkPhotoItems[this.index];
      this.LinkMain2 = this.LinkPhotoItems[(this.index + 1) % this.LinkPhotoItems.length];
    },
    slideLeft() {
      this.index = (this.index - 1 + this.LinkPhotoItems.length) % this.LinkPhotoItems.length;
      this.LinkMain1 = this.LinkPhotoItems[this.index];
      this.LinkMain2 = this.LinkPhotoItems[(this.index + 1) % this.LinkPhotoItems.length];
    }
  }
}
</script>

<template>
  <div class="main_first">
    <h1>CoffeeCrew</h1>
    <h2>Французские кофейни<br />в Томске</h2>
    <h3>Проспект Ленина,75<br />Улица Кулёва,24 (через бронь)</h3>
  </div>
  <div class="main_second">
    <p>Наши кофейни — это маленькая Франция <br />
      в разных уголках Томска. Мы делаем десерты, <br />
      варим кофе и дарим хорошее настроение. К нам приходят завтракать,<br />
      обедать и ужинать, общаться с друзьями и коллегами. Bienvenue!
    </p>
  </div>

  <div class="mapSlide">
    <div class="map">
      <Map></Map>
    </div>

    <div class="Slider-block-slider">
      <div class="Slider-block-slider-photo">
        <button @click="slideLeft" ref="rowLeft" class="arrow-btn">
          <img src="../assets/img/Left-Arrow-PNG-Image%201.png" id="arrow-left" alt="arrow-left">
        </button>
        <img id="photo_1" :src="LinkMain1" alt="photo-1">
        <img id="photo_2" :src="LinkMain2" alt="photo-2">
        <button @click="slideRight" ref="rowRight" class="arrow-btn">
          <img src="../assets/img/Left-Arrow-PNG-Image%202.png" id="arrow-right" alt="arrow-right">
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.main_first {
  background: url("../assets/img/back2.png") no-repeat top center;
  width: 100%;
  height: 55em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main_first h1 {
  color: #fff;
  font-size: 4.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_first h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 2em;
}

.main_first h3 {
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  color: #ffffff;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 120px;
}

.main_second {
  font-family: "Roboto", sans-serif;
  font-size: 1.75rem;
  align-items: center;
  text-align: center;
  font-weight: 300;
  padding-top: 1em;
}

.mapSlide {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.map {
  margin-top: 4em;
  margin-bottom: 5em;
}

.Slider-block-slider-photo {
  margin-top: 4em;
  text-align: center;
}

#arrow-left {
  width: 4em;
  height: 4em;
  margin-bottom: 13em;
  margin-left: 7em;
  cursor: pointer;
}

#arrow-right {
  width: 4em;
  height: 4em;
  margin-bottom: 13em;
  cursor: pointer;
}

#photo_1 {
  margin-right: 1em;
  width: 25em;
  height: 25em;
  border-radius: 20px;
}

#photo_2 {
  margin-right: 10px;
  width: 25em;
  height: 25em;
  border-radius: 20px;
}

.arrow-btn {
  background: white;
  border: none;
}

@media (max-width: 768px) {
  .main_first {
    height: auto;
    padding: 2em 1em;
  }

  .main_first h1 {
    font-size: 3rem;
  }

  .main_first h2 {
    font-size: 2rem;
    padding-top: 1em;
  }

  .main_first h3 {
    font-size: 1.25rem;
    padding-top: 1em;
  }

  .main_second {
    font-size: 1.25rem;
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
  }

  .Slider-block-slider-photo {
    margin-top: 2em;
  }

  #arrow-left,
  #arrow-right {
    width: 3em;
    height: 3em;
    margin-bottom: 2em;
  }

  #photo_1,
  #photo_2 {
    width: 20em;
    height: 20em;
  }
}
</style>