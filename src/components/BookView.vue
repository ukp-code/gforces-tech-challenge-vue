<!-- eslint-disable max-len -->
<template>
    <div>
        <NavBar></NavBar>
        <section class="dropdown-sec" style="width: 100%;">
            <div class="right">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="booklisting">
                                <div class="container-fluid">
                                    <div class="row" id="ads" >
                                        <div class="col-md-3 mt-4"  v-for="(item, index) in books.items" v-bind:key="index">
                                            <div class="card rounded">
                                                <div class="card-image text-center">
                                                    <span class="card-notify-year">{{item.volumeInfo.publishedDate.substring(0, 4)}}</span>
                                                    <img :src="item.volumeInfo.imageLinks.thumbnail" class="img-fluid" alt="">
                                                </div>

                                                <div class="card-body text-center">
                                                    <div class="ad-title m-auto">
                                                        <h5>{{item.volumeInfo.title}}</h5>
                                                    </div>
                                                     <button @click="goDetails(item.selfLink,item.id)" class="ad-btn">View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="down">
                                <div class="container-fluid">
                                    <div class="row mt-4 content-center">
                                        <div class="col-md-6">
                                            <ul class="list-group 100_list_container"></ul>
                                        </div>
                                    </div>
                                    <div class="row mt-4 content-center">
                                        <div class="col-md-6">
                                            <ul class="pagination content-center" id="page_container">
                                            </ul>
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

import NavBar from './NavBar.vue';


export default {
  name: 'BookView',
  components: { NavBar },
  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
  created() {
    this.$store.dispatch('fetchBooks');
  },
  methods: {
    goDetails(url, id) {
      this.$router.push({
        name: 'details',
        params: { url, id },
      });
    },
  },
};

</script>

<style scoped>
</style>
