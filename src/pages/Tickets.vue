<template >
  <div>
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

      <article class="message is-dark">
          <div class="message-body">
                <img src="../assets/logo3.png" alt="" style="width: 100%; height: 50%;"></br>
                sdfsdf
          </div>
      </article>

      <article class="message is-dark">
          <div class="message-body">
            Description</br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
      </article>

      <article class="message is-dark">
          <div class="message-body">
           <strong>Tickets</strong></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
      </article>

    </div>

<div class="column"></div>
</div>
</div>


<!-- ----------------------------------- -->

<div class=""  v-for = "(post, key, count) in showpost">

  {{post.name}} {{count}}
</div>

<!-- จบส่วนของข้อมูล -->


  </div>
    <!-- <a @click="logout"><h1 class="title is-1">Logout</h1></a> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'home',
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
