

<template>
    <v-container>

      <v-layout row warp>
        <v-row justify="center" >
          <div>
            <v-form >
              <v-col class="text-center">
                <v-text-field required label="mail" v-model="email"></v-text-field>
                <v-text-field class="text-center" required label="password" v-model="password"></v-text-field>
                <div class="my-4">
                  <v-btn  @click="signUp" color="red">Login</v-btn>
                </div>
                <p class="my-6">No account ? </p>
                
                <div>
                  <v-btn class="red"><router-link :to="register">Register</router-link></v-btn>
                </div>
               </v-col>
              </v-form>
            </div>  
          </v-row>
        </v-layout>
      </v-container>
</template> 

<script> 

import firebase from 'firebase'
export default {
  name: 'SignUp',
  props: ['search'],
  
    data: function() {
    return {
      slash: "/",
      data : [],
      email:"",
      password:"",
      register: "/register",
    

    }
  },
  methods: {
   signUp : function() { firebase.auth().signInWithEmailAndPassword(this.email, this.password)
   .then(this.loggedIn=true).then(alert("logged in")).then(() => 
      this.$router.push("/"))
      
      
  } },
  test : function () {if (firebase.auth().currentUser == null) {
      console.log(firebase.auth().currentUser)
      this.loggedIn = false
      
    } else {
      console.log("loogged in")
      this.loggedIn = true
    }}
  
}
</script>


<style scoped>

a {
  text-decoration: none;

}

.v-application a {
      color:white
}

.image {

border: 1px solid black;
border-radius:3%;
overflow: hidden;
max-width: 150px;
}

.theme--light.v-btn {
    color: white;
}
</style>