<template>
    <div>
        <div class="header">
            <div class="top">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="logo">
                    <img src="../assets/img/logo.png" alt="" class="logo">
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <router-link to="/books" class="menu-butt">BOOK SEARCH</router-link>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
};

</script>

<style scoped>


</style>
