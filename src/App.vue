<template>
  <div id="app">

              <div v-if="$route.name !== 'Login'">
                <span v-if="$route.name === 'Home'">
                </span>
                <span v-else @click="goBack()" class="is-pointer">
                </span>

              </div>
              <router-view></router-view>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([
      'init'
    ]),
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
body {
  min-height: 100vh;
}
a {
   outline: 0;
   user-select: none;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.is-pointer {
  cursor: pointer;
  outline: 0;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
