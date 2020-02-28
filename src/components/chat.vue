

  <template>
  <v-container>
    <v-layout  id="content" row wrap class="my-1">
      <v-flex xs12 sm5 v-for="title in data" :key="title.content" >
        <v-card xs12 color="blue-grey lighten-5" class="pa-5 mx-5 my-1">
         <span class="font-weight-bold">{{title.author}}</span>
         <span> : {{title.content}}</span>
        </v-card>

      </v-flex>
    </v-layout>
   
    <v-card>
        <v-row xs11 wrap row justify="center" class="pa-5">
           
              <input size="30" class="text-center" type="text" placeholder="message" v-model="content">
            
        </v-row>
        <v-row justify="center">
             <v-btn   class="text-center mb-5" @click="saveBlog" type="submit" color="red accent-3">
             Post
              </v-btn>
           
            </v-row>
    </v-card>


    
  </v-container>
</template> 

<script> 

import firebase from 'firebase'
import db from './firebaseInit'
export default {
  name: 'chat',
  
    data: function() {
    return {
      slash: "/",
      blog:"/blog",
      data : [],
      timeStamp : new Date(),
      content: [],
      author: firebase.auth().currentUser.email,
    }
  },
  methods: {
     
    
        saveBlog()  {
            db.collection('ChatRoom').add({
                 author: this.author,
                content: this.content,
                timeStamp: this.timeStamp
               
            }).then(function() {
                console.log("done")
            }).then(
                db.collection('ChatRoom').orderBy("timeStamp", "asc").get().then(querySnapshot => {
      querySnapshot.forEach(doc =>  {
        console.log(doc.data())
        document.getElementById("content").innerHTML=""
        const data = {
          'id' : doc.id,
          'content':doc.data().content,
          'author': doc.data().author,
          'timeStamp': doc.data().timeStamp
        }
        
        
        this.data.push(data)
      
       

      })
    })
              
            )
          
            .catch(error =>  console.log(error))
        }
  ,

  },
  created ()  {
    db.collection('ChatRoom').orderBy("timeStamp", "asc").get().then(querySnapshot => {
      querySnapshot.forEach(doc =>  {
        console.log(doc.data())
        const data = {
          'id' : doc.id,
          'content':doc.data().content,
          'author': doc.data().author,
          'timeStamp': doc.data().timeStamp
        }
     
        this.data.push(data)
       

      })
    })
  },
  deleteBlog()  {

  }
 
}
</script>


<style scoped>

input{
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.178)
}

.theme--light.v-btn {
  color:white
}


</style>