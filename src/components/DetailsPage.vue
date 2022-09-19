<!-- eslint-disable max-len -->
<template>
    <div>
        <NavBar></NavBar>
        <section class="dropdown-sec2">
            <div class="right">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="container-fliud">
                                    <div class="wrapper row">
                                        <div class="preview col-md-6">

                                            <div class="preview-pic tab-content">
                                                <div class="tab-pane active" id="pic-1">
                                                    <img :src="this.details.volumeInfo.imageLinks.thumbnail" >
                                                </div>
                                            </div>

                                        </div>
                                        <div class="details col-md-6">
                                            <h3 class="product-title">{{this.details.volumeInfo.title}}</h3>
                                            <p>Publisher: {{this.details.volumeInfo.publisher}}</p>
                                            <p>Published Date: {{this.details.volumeInfo.publishedDate}}</p>
                                            <p class="product-description">Authors: <span v-for="(item, index) in this.details.volumeInfo.authors" v-bind:key="index">{{item}} |</span> </p>
                                        </div>
                                        <div class="col-md-12 py-4">
                                            <p v-html="this.details.volumeInfo.description"></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import NavBar from './NavBar.vue';

export default {
  name: 'DetailsPage',
  components: { NavBar },
  props: ['url'],
  data() {
    return {
      details: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(this.url);
        this.details = response.data;
      } catch (error) {
        throw error;
      }
    },
  },

  created() {
    this.getData();
  },
};

</script>

<style scoped>
</style>
