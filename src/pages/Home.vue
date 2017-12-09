<template >
  <div >
    <section class="hero is-medium is-primary is-bold">
      <div class="tabs is-medium">
        <div class="level-right">
          <p class="level-item"><a><img src="../assets/logo.png" alt=""></a></p>
          <p class="control is-primary is-bold">
        <input class="input" type="text" placeholder="Amount of money"><span class="icon is-small is-right">
      <i class="fa fa-search"></i>
    </span>
           </p>
          <p></p>
      </div>
      <div class="level-right">
        <p class="level-item"><a>  <img :src="user.fb && user.fb.photoURL" class="photo-url" alt=""></a></p>
        <p>
          <div class="select is-small">
             <select>
               <option >{{user.displayName}}</option>
               <option>Add eventpop</option>
               <option>logout</option>
             </select>
           </div>
        </p>

        <p></p>

 </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1 ">
        <section class="hero is-danger ">
</br>
            <center><img src="../assets/img1.jpg" alt="" width="95.5%"></center>
 </br>

      <div class="columns">
  <div class="column">
    <div class="col-sm-4 dropdown eventpop-dropdown">
 <p  class="dropdown-toggle text-center" data-toggle="dropdown"  aria-expanded="false">
        EXPLORE EVENTS
      <i class="fa fa-fw fa-angle-down"></i>
    </p>
    <ul class="dropdown-menu">
      <li class=""><a href="https://www.eventpop.me/events">Upcoming Events</a></li>
      <li class="divider"></li>
        <li class=""><a href="/g/science-tech#events">Science &amp; Tech</a></li>
        <li class=""><a href="/g/business#events">Business</a></li>
        <li class=""><a href="/g/family#events">Family</a></li>
        <li class=""><a href="/g/education#events">Education</a></li>
        <li class=""><a href="/g/hobbies#events">Hobbies</a></li>
        <li class=""><a href="/g/music#events">Music</a></li>
        <li class=""><a href="/g/health#events">Health</a></li>
        <li class=""><a href="/g/community#events">Community</a></li>
        <li class=""><a href="/g/food-drink#events">Food &amp; Drink</a></li>
        <li class=""><a href="/g/fashion#events">Fashion</a></li>
        <li class=""><a href="/g/arts#events">Arts</a></li>
        <li class=""><a href="/g/sports-fitness#events">Sports &amp; Fitness</a></li>
        <li class=""><a href="/g/film-media#events">Film &amp; Media</a></li>
        <li class=""><a href="/g/charity-causes#events">Charity &amp; Causes</a></li>
    </ul>

  </div>
  </div>
  <div class="column">
      <router-link to="addevent"><button class="button is-medium is-dark" @click="prompt()">
             <p>ADD EVENTS<i class="fa fa-download"></i></p>
       </button> </router-link>
  </div>

</div>
</section></br> </br>
    <!-- <marquee >
      <img  src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_1.jpg" />
      <img src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_2.jpg" />
      <img src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_3.jpg" />
      <img  src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_4.jpg" />
      <img  src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_1.jpg" />
      <img src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_2.jpg" />
      <img src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_3.jpg" />
      <img  src="http://tips.ninenic.com/download/tips_ninenic_com/slide1/show1_4.jpg" />
      </marquee> -->
    <div class="hero">
      <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">One</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
      <div class="tile is-child box">
        <p class="title">Two</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Three</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
        <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
        <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
      </div>
    </div>
  </div>
    </div>

</div>
</div>
  </section>
  </div>
    <!-- <a @click="logout"><h1 class="title is-1">Logout</h1></a> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      newPostInput: ''
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
    }
  },
  created () {
    this.setPostRef()
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
