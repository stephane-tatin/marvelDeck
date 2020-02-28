<template>
  <v-container>
    <v-layout row wrap justify-space-around>
      <v-flex ma-5 xs11 sm5 md3 v-for="character in filterSearchImages" :key="character.id">
        <v-card color="blue-grey lighten-5" class="pa-3">
          <v-row justify="center">
            <v-responsive class="image">
              <img :src="character.thumbnail.path+path" />
            </v-responsive>
          </v-row>
          <v-card-text>
            <h1 class="text-center pt-5 pb-4">{{character.name}}</h1>
            <p class="text-center mb-0">{{character.description}}</p>
          </v-card-text>
          <v-row justify="center">
            <v-card-actions>
              <v-btn color="red accent-3">
                <router-link :search="search" :to="slash + character.id">see comics</router-link>
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
import config from "../../config";

export default {
  name: "characterCard",
  props: ["search", "randomNumber"],

  data: function() {
    return {
      API: config.config.API,
      data: [],
      loggedIn: "",
      slash: "/",
      path: "/portrait_xlarge.jpg",
      notAvailable: "image_not_available"
    };
  },
  methods: {},

  created() {
    this.$http
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
          this.API +
          "&limit=100&offset=0"
      )
      .then(function(data) {
        this.data = data.data.data.results;
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=100"
        );
      })
      .then(function(data2) {
        this.data = this.data.concat(data2.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=200"
        );
      })
      .then(function(data3) {
        this.data = this.data.concat(data3.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=300"
        );
      })
      .then(function(data4) {
        this.data = this.data.concat(data4.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=400"
        );
      })
      .then(function(data5) {
        this.data = this.data.concat(data5.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=500"
        );
      })
      .then(function(data6) {
        this.data = this.data.concat(data6.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=700"
        );
      })
      .then(function(data7) {
        this.data = this.data.concat(data7.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=800"
        );
      })
      .then(function(data8) {
        this.data = this.data.concat(data8.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=900"
        );
      })
      .then(function(data9) {
        this.data = this.data.concat(data9.data.data.results);
        return this.$http.get(
          "https://gateway.marvel.com:443/v1/public/characters?apikey=" +
            this.API +
            "&limit=100&offset=1000"
        );
      })
      .then(function(data10) {
        this.data = this.data.concat(data10.data.data.results);
      });
  },

  computed: {
    filterSearchImages: function() {
      return this.data.filter(character => {
        return (
          !character.thumbnail.path.match(this.notAvailable) &&
          character.name.toLowerCase().match(this.search.toLowerCase()) &&
          character.id.toString().match(this.randomNumber)
        );
      });
    }
  }
};
</script>

<style scoped>
.v-application a {
  color: white;
  text-decoration: none;
}

.image {
  border-radius: 3%;
  max-width: 148px;
  max-height: 160px;
  overflow: hidden;
  border: 1px solid black;
}
</style>