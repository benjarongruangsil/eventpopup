<template >
  <div id="tickets">
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
      <div class=""  v-for = "(post, key) in showpost">
        <div class="" v-if= " key ===$route.params.userID">
          <article class="message is-dark">
              <div class="message-body">
                    <img src="../assets/logo3.png" alt="" style="width: 100%; height: 50%;"></br>
                    <strong>{{post.name}}</strong><br></br>
                      <i class="fa fa-clock-o"></i> {{post.startdate}} | {{post.starttime}} - {{post.starttime}}  </br>
                      <i class="fa fa-map-marker"></i> {{post.location}}
              </div>
          </article></br>
          <article class="message is-dark">
              <div class="message-body">
                  <strong>Description</strong><br></br>
                  {{post.description}}</br>
              </div>
          </article></br>
          <article class="message is-dark">
              <div class="message-body">
                    <center><strong>Tickets</strong><br></br></center>
                    <div class="columns">
                      <div class="column is-two-thirds">DAYS</div>
                      <div class="column">AMOUNT</div>
                      <div class="column"> PRICE</div>
                      <div class="column">SOLD OUT
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column is-two-thirds">  {{post.startdate}}</div>
                      <div class="column">{{post.amount}}</div>
                      <div class="column">  {{post.price}}$</div>
                      <div class="column">
                        <div class="field">
                              <div class="control">
                                <div class="select is-primary">
                                  <select >
                                    <option v-for="n in 6">{{n-1}}</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                      </div>
                    </div></br></br>

                            <div class="columns">
                              <div class="column">
                              *Some fees may be applied
                              </div>

                              <div class="column">
                                <p class="button is-primary"  style=" float: right; ">
                                    <span>Buy Ticksts</span>
                                  </p>
                              </div>
                            </div>
                      </br>
              </div>

          </article>
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
import { mapGetters, mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'tickets',
  props: ['userID'],
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
    console.log(this.userID + 'ff')
  },
  destroyed () {
    this.unSetPostRef()
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
