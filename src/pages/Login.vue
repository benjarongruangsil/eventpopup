<template lang="html">
  <div class="login--container">

  <section class="hero is-primary">
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
  <img src="../assets/logo3.png" alt="" height="500" width=""></a>
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <p class="bd-tw-button button" @click="login()">
            <span class="icon">
              <i class="fa fa-facebook-square"></i>
            </span>
            <span>facebook</span>
          </p>
        </p>
      </div>
    </div>
  </div>
  </nav>
  </section>
</br>
<!-- ส่วนของข้อมูล -->
<div class="">
<div class="columns">
<div class="column"></div>
    <div class="column is-three-quarters">
      <div class="columns" >
        <div class="column">

            <div class="" style="width: 30%; float: left; margin-left: 2%;" v-for = "(post, key, count) in showpost"  >
              <article class="message is-dark" >
              <div class="message-body">
                <figure class="image is-square">
                 <img src="https://bulma.io/images/placeholders/256x256.png">
                </figure>
                <strong>{{post.name}} {{count+1}}</strong><br></br>
                  <i class="fa fa-clock-o"></i> {{post.startdate}} | {{post.starttime}} - {{post.starttime}}  </br>
                  <i class="fa fa-map-marker"></i> {{post.location}}
            </div> </br>
            </article>
          </div>
        </div>
      </div>
    </div>


<div class="column"></div>
</div>
</div>
<!-- จบส่วนของข้อมูล -->

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  computed: {
    data () {
      return {
        showpost: ''
      }
    },
    ...mapGetters([
      'isReady'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    pullData: function () {  /* แสดงpost */
      let that = this
      firebase.database().ref('/event/post/').once('value').then(function (snapshot) {
        that.showpost = snapshot.val()
      })
    }
  },
  created () {
    this.pullData()
  }
}
</script>

<style scoped>
.login--container {
  float: left;
  width: 100%;
  background-color: #fff;
}
</style>
