<template>
  <div class="hello">
    <b-card-group deck>
      <b-card
          footer="$150 /night"
          footer-tag="footer"
          title="Modern English Basement Apartment"
          img-src="https://wander-lush.org/wp-content/uploads/2021/01/Medellin-Airbnb-Penthouse-in-Laureles.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
        <b-card-text>
          Good vibes of the city, catch the sunset from the rooftop.
        </b-card-text>
        <b-list-group>
          <b-list-group-item>Wifi, Kitchen, Heating</b-list-group-item>
          <b-list-group-item>Free Parking lot</b-list-group-item>
          <b-list-group-item>Gym and Swimming pool</b-list-group-item>
        </b-list-group>
        <br>
        <b-button href="#" variant="info" v-b-modal.modal-1>Book a stay</b-button>
        <b-modal id="modal-1" title="Payment Confirmation">
          <p class="my-4">You have just booked your Vuebnb</p>
        </b-modal>
      </b-card>
      <!-- end of card 1 -->
      <b-card
          footer="$200 /night"
          footer-tag="footer"
          title="Comfy 1 Bedroom Condo Downtown"
          img-src="https://media.cntraveler.com/photos/5e9907c14ab09800086faf63/master/pass/airbnb-view-37143825.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
        <b-card-text>
          Quiet neigborhood, host parties and invite friends over.
        </b-card-text>
        <b-list-group>
          <b-list-group-item>Wifi, Kitchen, Heating</b-list-group-item>
          <b-list-group-item>Free Parking lot</b-list-group-item>
          <b-list-group-item>Gym and Swimming pool</b-list-group-item>
        </b-list-group>
        <br>
        <b-button href="#" variant="info" v-b-modal.modal-2>Book a stay</b-button>
        <b-modal id="modal-2" title="Payment Confirmation">
          <p class="my-4">You have just booked your Vuebnb</p>
        </b-modal>
      </b-card>
      <!-- end of card 2 -->
      <b-card
          footer="$100 /night"
          footer-tag="footer"
          title="Private Spacious Retreat in Great Location"
          img-src="https://media.cntraveler.com/photos/5de7dbee45a09000087e427f/master/pass/airbnb-9232684-los-angeles.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
        <b-card-text>
          Greenry and zen is all you feel here, we got a bottler.
        </b-card-text>
        <b-list-group>
          <b-list-group-item>Wifi, Kitchen, Heating</b-list-group-item>
          <b-list-group-item>Free Parking lot</b-list-group-item>
          <b-list-group-item>Gym and Swimming pool</b-list-group-item>
        </b-list-group>
        <br>
        <b-button href="#" variant="info" v-b-modal.modal-3>Book a stay</b-button>
        <b-modal id="modal-3" title="Payment Confirmation">
          <p class="my-4">You have just booked your Vuebnb</p>
        </b-modal>
      </b-card>
      <!-- end of card 3 -->
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-left: 90px;
  padding-left: 20px;
}
</style>