<script>

</script>

<template>
  <div>
    <footer>
      <div class="footerFirst">
        <p class="footer_oneP">Адреса:<br/><br/></p>
        <p class="footer_twoP">Проспект Ленина 77<br/>Улица Кулёва, 4</p>
      </div>
      <div class="footerSecond">
        <p class="footer_oneP">Время работы кофеен: <br/>
          <span class="footer_twoP">ежедневно с 9:00 до 21:00</span> <br><br> </p>
        <p class="footer_oneP">Связаться с нами: <br>
          <span class="footer_twoP">client@coffeecrew.ru</span> <br><br></p>
        <p class="footer_oneP">По всем вопросам сотрудничества: <br>
          <span class="footer_twoP">oui@coffeecrew.ru</span> <br><br></p>
        <div>
          <ul class="Slider-block-list-social_two">
            <li><a href="https://www.facebook.com/" target="_blank"><img id="Facebook" src="../img/Vector (2).png" alt="facebook"></a></li>
            <li><a href="https://vk.com/" target="_blank"><img id="VK" src="../img/Vector (1).png" alt="VK"></a></li>
            <li><a href="https://instagram.com/" target="_blank"><img id="Instagram" src="../img/insta.png" alt="instagram"></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  <div class="footerUnder">
    <p>Made by Baburin Misha</p>
  </div>
</template>

<style>
footer {
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 4em 0;

}
.footerFirst {
  margin-right: 15em;
}
.footerSecond {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.Slider-block-list-social_two {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}
.Slider-block-list-social_two li {
  margin-right: 1em;
  list-style-type: none;
}
.footer_oneP {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.footer_twoP {
  font-weight: 300;
  font-size: 1.2rem;

  margin: 0.5em 0;
}
.footerUnder {
  color: #525050;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  background: black;
  text-align: center;
  padding: 1em 0;
}
@media (max-width: 768px) {
  footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2em 1em;
  }
  .footerFirst {
    margin: 0 0 2em 0;
  }
  .footerSecond {
    align-items: center;
  }
}
</style>