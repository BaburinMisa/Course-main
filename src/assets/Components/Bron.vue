<script>
export default {
  name: 'ReservationForm',
  data() {
    return {
      isModalOpen: true,
      isConfirmed: false,
      fadeOutModal: false,
      fadeOutConfirmation: false
    };
  },
  methods: {
    closeModal() {

      this.fadeOutModal = true;
      setTimeout(() => {
        this.isModalOpen = false;
        this.fadeOutModal = false;
      }, 500);
    },
    submitForm() {

      this.isConfirmed = true;

      setTimeout(() => {
        this.fadeOutConfirmation = true;
        setTimeout(() => {
          this.isConfirmed = false;
          this.fadeOutConfirmation = false;
        }, 500);
      }, 1000);

      setTimeout(() => {
        this.closeModal();
      }, 1000);
    }
  }
};
</script>

<template>
  <div>
    <div v-if="isModalOpen" class="body1" :class="{ 'fade-out': fadeOutModal }">
      <div class="container1">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h1 class="bronh">Забронируйте стол для комфортного отдыха заранее!</h1>
        <p class="bronp">Уютный вечер, деловая встреча или романтический ужин <br> Мы всегда вам рады!</p>
        <p class="bronp">После бронирования мы с вами свяжемся!</p>
        <form class="reservation-form" @submit.prevent="submitForm">
          <label for="name">Ваше имя:</label>
          <input autocomplete="off" type="text" id="name" name="name" required>

          <label for="phone">Номер телефона:</label>
          <input autocomplete="off" type="tel" id="phone" name="phone" required>

          <label for="guests">Количество гостей:</label>
          <input autocomplete="off" type="number" id="guests" name="guests" required min="1" max="20">

          <label for="date">Дата визита:</label>
          <input autocomplete="off" type="date" id="date" name="date" required>

          <button class="brohbutton" type="submit">Забронировать</button>
        </form>
      </div>
    </div>

    <div v-if="isConfirmed" class="booking-confirmation" :class="{ 'fade-out': fadeOutConfirmation }">
      <p class="confirmation-text">Успешно! Мы с Вами свяжемся!</p>
    </div>
  </div>
</template>

<style>
.booking-confirmation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-out;
}

.booking-confirmation.fade-out {
  opacity: 0;
}

.confirmation-text {
  font-size: 18px;
}
.body1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.container1 {

  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  color: #000;
  animation: slideFromRight 0.5s ease-out;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #ff0000;
}

.bronh {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.bronp {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.reservation-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: left;
}

input, select, .brohbutton {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.brohbutton {
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1em;
}

.brohbutton:hover {
  background-color: #4cae4c;
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>