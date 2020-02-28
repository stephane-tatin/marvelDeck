

  <template>
  <v-container>
    <v-layout row wrap>
      <v-flex ma-5 xs11 sm6 v-for="name in filteredData" :key="name.name">
        <v-card color="blue-grey lighten-5" class="pa-3">
          <v-row align="center">
            <v-responsive class="my-2" align="center">
              <img class="image" :src="name.thumbnail.path+path" />
            </v-responsive>
            <h1 class="pa-3 text-center">{{name.title}}</h1>
            <p class="mx-8 my-5 text-center">{{name.description}}</p>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
import config from "../../config";

export default {
  name: "ComicsCard",
  props: ["search"],

  data: function() {
    return {
      API: config.config.API,
      slash: "/",
      data: [],
      id: this.$route.params.id,
      path: "/portrait_xlarge.jpg"
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://gateway.marvel.com:443/v1/public/characters/" +
          this.id +
          "/comics?apikey=" +
          this.API
      )
      .then(function(data) {
        this.data = data.data.data.results;
      });
  },
  computed: {
    filteredData: function() {
      return this.data.filter(character => {
        return character.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>


<style scoped>
.image {
  border: 1px solid black;
  border-radius: 3%;
  overflow: hidden;
  max-width: 150px;
}
</style>