<script >
import SliderBlock from "@/assets/Components/SliderBlock.vue";
import TheFooter from "@/assets/Components/TheFooter.vue";
import TheHeader from "@/assets/Components/TheHeader.vue";
import SliderBlockTwo from "@/assets/Components/SliderBlockTwo.vue";
export  default {
  components: {TheFooter, SliderBlock, TheHeader, SliderBlockTwo},
  data(){
    return{

    }
  }
}

</script>

<template>
  <TheHeader></TheHeader>
  <router-view />
<the-footer></the-footer>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
