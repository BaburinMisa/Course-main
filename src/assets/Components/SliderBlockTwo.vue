<script >

export default{
  data(){
    return{
      index:0,
      LinkMain4:'src/assets/img/OutTeamThree.png',
      LinkMain5:'src/assets/img/OutTeamTwo.png',
      LinkMain6:'src/assets/img/OutTeamOne.png',
      LinkPhotoItems:[
        "src/assets/img/OutTeamOne.png",
        "src/assets/img/OutTeamTwo.png",
        'src/assets/img/OutTeamThree.png',
        'src/assets/img/OutTeamFour.jpg',
        'src/assets/img/cafe-eda-crm-restoranka-l8hyutbym1.jpg',
        'src/assets/img/4871de3e24cf779a9c4dd0279c4c2a21_w470.jpg'
      ]


    }
  },


  methods :{
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





  <div class="Slider">


    <div class="Slider-block-slider">

      <div class="Slider-block-slider-photo2">

        <button  @click="slideLeft" ref="rowLeft" class="arrow-btn2"> <img src="../img/Left-Arrow-PNG-Image%201.png"  id="arrow-left2" alt="arrow-left"></button>
        <img id="photo_12" :src="LinkMain4"  alt="photo-1">
        <img  id="photo_22" :src="LinkMain5"  alt="photo-2">
        <img  id="photo_22" :src="LinkMain6"  alt="photo-2">
        <button @click="slideRight" ref="rowRight" class="arrow-btn2"><img src="../img/Left-Arrow-PNG-Image%202.png" id="arrow-right2" alt="arrow-right"></button>
      </div>

    </div>
      </div>


</template>

<style>
.Slider{
  background-color: #525050;
  height: 500px;
}


.Slider-block-slider-photo2{
  text-align: center;
  padding-top: 3.5em;
  margin-top: 2em;
}

#arrow-left2{

  width: 4em;
  height: 4em;

  margin-bottom: 9em;
  cursor: pointer;
}

#arrow-right2{
  width: 4em;
  height: 4em;
  margin-bottom: 9em;
  margin-right: 15em;
  cursor: pointer;

}

#photo_12 {
  margin-right: 1em;
  width: 25em;
  height: 25em;
  border-radius:20px ;
}
#photo_22{
  margin-right: 10px;
  width: 25em;
  height: 25em;
  border-radius:20px ;
}
.arrow-btn2 {
  background: #525050;
  border: none;
}

</style>