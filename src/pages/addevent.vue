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

 <!-- insertevent -->
 <div class="tile is-child">
  <div class="tile is-child notification is-danger">
</div>
<div class="tile is-parent">
 <div class="tile is-child box">
           <div class="columns">
             <div class="column">
               <div class="field">
           <div class="control">
             <input class="input is-info" type="text" placeholder="Info input">
           </div></div>
             </div>
             <div class="column">
               <input type="datetime-local" name="" value="">
             </div>
             <div class="column">
              <input type="file" name="" value="">
             </div>
           </div>
           <div class="columns">
             <div class="column">
               <div class="field">
           <div class="control">
             <input class="input is-info" type="text" placeholder="Info input">
           </div></div>
             </div>
             <div class="column">
              <input class="input is-info" type="text" placeholder="Info input">
             </div>
             <div class="column">
            <input class="input is-info" type="text" placeholder="Info input">
             </div>
             <div class="column">
            <input class="input is-info" type="text" placeholder="Info input">
             </div>
           </div>
</div>


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
