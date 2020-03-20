<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-row justify="space-around" align="center">
        <div v-on:click="resetRandom" class="d-flex align-center">
          <router-link :to="slash">
            <v-img class="mr-2" src="./assets/LogoM.png" width="70" />
          </router-link>
        </div>

        <v-btn small color="red" @click="randomNumberApp">
          <v-icon small>shuffle</v-icon>
        </v-btn>
        <input
          class="white black--text text-center"
          type="text"
          v-model="searchApp"
          placeholder="search"
        />

        <v-btn small class="mx-2" v-if="loggedIn" color="red" :to="chat">
          <v-icon small>chat</v-icon>
        </v-btn>
        <v-btn small class="mx-2" v-if="!loggedIn" :to="signup" color="red">Log in</v-btn>
        <v-btn small v-if="loggedIn" @click="logOut" color="red">Log out</v-btn>
      </v-row>
    </v-app-bar>

    <v-content>
      <router-view :randomNumber="randomNumber" :search="searchApp"></router-view>
    </v-content>
    <v-footer class="black white--text" app>
      <v-flex justify="end" class="text-center">Data provided by Marvel. © 2016 Marvel.</v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  components: {},

  data: () => ({
    slash: "/",
    searchApp: "",
    random: "random",
    loggedIn: "",
    signup: "/signup",
    chat: "/chat",
    randomNumber: ""

    //
  }),
  methods: {
    logOut: function() {
      firebase
        .auth()
        .signOut()
        .then(alert("logged out"))
        .then(() => this.$router.push("/"));
    },

    randomNumberApp: function() {
      this.randomNumber = Math.ceil(Math.random() * 100);
    },
    resetRandom: function() {
      this.randomNumber = "";
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("signedin");
        this.loggedIn = true;
      } else {
        console.log("signedout");
        this.loggedIn = false;
      }
    });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.v-application a {
  color: white;
}

input {
  width: 60px;
  height: 28px;
  margin-left: 8px;
  border-radius: 2%;
}

.v-toolbar__content {
  padding: 10px;
}

@media only screen and (min-width: 600px) {
  #app > div > header > div > div.row.align-center.justify-space-around > a {
    width: 100px;
  }
}
</style>

