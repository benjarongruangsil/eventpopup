<template >
  <div id="home">
<section class="hero is-primary">
<!-- startmenu -->
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
<a class="navbar-item">
  <router-link to="/">
<img src="../assets/logo3.png" alt="" height="500" width=""> </router-link></a>
<p class="navbar-item">
  <input class="input" type="text" placeholder="Amount of money">
  <span class="icon is-small is-right"><p></p><i class="fa fa-search"></i></span></p>
<div class="navbar-menu">
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped">
             <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
        <p class="control">
           {{user.displayName}}
          <div class="col-sm-4 dropdown eventpop-dropdown">
        <p  class="dropdown-toggle " data-toggle="dropdown"  aria-expanded="false">
           <i class="fa fa-fw fa-angle-down"></i> </p>
          <ul class="dropdown-menu">
            <li class=""><router-link to="/Profile">Profile</router-link></li>
            <li v-link-active ><router-link to="/addevent"> add event </router-link></li>
              <li class="divider"></li>
            <li class=""><a @click="logout">Logout</a></li>
          </ul>
        </div>
        </p>
      </div>
    </div>
  </div>
  1as
</div>
</nav>

<!-- endstartmenu -->

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
              <router-link :to="{ name: 'tickets', params: { userID : key }}">
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
            </router-link>
          </div>
        </div>
      </div>
    </div>


<div class="column"></div>
</div>

</div>
<!-- จบส่วนของข้อมูล -->
  </div>
    <!-- <a @click="logout"><h1 class="title is-1">Logout</h1></a> -->
</template>

<script>
import tickets from './Tickets.vue'
import { mapGetters, mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'home',
  components: {
    tickets
  },
  data () {
    return {
      newPostInput: '',
      showpost: ''
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'setPostRef',
      'unSetPostRef',
      'insertPost',
      'inserFakePost'
    ]),
    submitPost () {
      this.insertPost(this.newPostInput)
    },
    pullData: function () {  /* แสดงpost */
      let that = this
      firebase.database().ref('/event/post/').once('value').then(function (snapshot) {
        that.showpost = snapshot.val()
      })
    }
  },
  created () {
    this.setPostRef()
    this.pullData()
  },
  destroyed () {
    this.unSetPostRef()
  },
  prompt () {
    this.$dialog.prompt({
      message: 'What s your name?',
      inputAttrs: {
        placeholder: 'e.g. Walter',
        maxlength: 10
      },
      onConfirm: (value) => this.$toast.open(`Your name is: ${value}`)
    })
  }
}
</script>

<style scoped>
.photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
</style>
