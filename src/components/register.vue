

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
                  <v-btn  @click="register" color="red">Register</v-btn>
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
  name: 'register',
  props: [ 'search'],
  
    data: function() {
    return {
      slash: "/",
      data : [],
      email:[],
      password:[]

    }
  },
  methods: {
   register : function() { firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
   .then(console.log("done")).then(alert("successfully registered")).then(() => 
      this.$router.push("/"));
  },
  }
 
}
</script>


<style scoped>
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