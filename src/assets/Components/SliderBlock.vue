<script >
import Map from "@/assets/Components/Map.vue";
export default{
  data(){
    return{
      index:0,
      LinkMain1:'src/assets/img/div.t552__blockimg.png',
      LinkMain2:'src/assets/img/div.t552__blockimg(1).png',
      LinkPhotoItems:[
          "src/assets/img/div.t552__blockimg.png",
          "src/assets/img/div.t552__blockimg(1).png",
          'src/assets/img/div.t552__blockimg(3).png',
          'src/assets/img/photo-eate.jpg',
          'src/assets/img/Croissant_Wicker_basket_513022_1920x1080.jpg',
          'src/assets/img/b386a902762911ee9ad5ceda526c50ab_upscaled.jpg'
  ]


    }
  },
  components:{Map},

  methods :{
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




<div class="mapSlide">
  <div class="map"><Map></Map></div>





  <div class="Slider-block-slider">

    <div class="Slider-block-slider-photo">

     <button  @click="slideLeft" ref="rowLeft" class="arrow-btn"> <img src="../img/Left-Arrow-PNG-Image%201.png"  id="arrow-left" alt="arrow-left"></button>
      <img id="photo_1" :src="LinkMain1"  alt="photo-1">
      <img  id="photo_2" :src="LinkMain2"  alt="photo-2">
      <button @click="slideRight" ref="rowRight" class="arrow-btn"><img src="../img/Left-Arrow-PNG-Image%202.png" id="arrow-right" alt="arrow-right"></button>
    </div>



  </div>

</div>

</template>

<style>

.mapSlide{

  display: flex;
  justify-content: center;
}
.map{
  margin-top: 5em;
  margin-bottom: 5em;
}
.Slider-block-slider-photo{
  margin-top: 7em;
  text-align: center;
}
#arrow-left{
  width: 4em;
  height: 4em;
  margin-right: 1em;
  margin-bottom: 11em;
  margin-left: 7em;
  cursor: pointer;
}
#arrow-right{
  width: 4em;
  height: 4em;
  margin-bottom: 11em;
  cursor: pointer;
}
#photo_1 {
  margin-right: 1em;
  width: 20em;
  height: 20em;
  border-radius:20px ;
}
#photo_2{
  margin-right: 10px;
  width: 20em;
  height: 20em;
  border-radius:20px ;
}
.arrow-btn {
  background: white;
  border: none;
}

</style>