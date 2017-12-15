<template lang="html">
  <div >
    <!--  แทปฟ้า -->
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          W a s h
          <h2 class="is-pulled-right">
              <img class="image is-64x64" @click = "logout()" src="../assets/logout3.png">
          </h2>
        </h1>
      </div>
    </div>
  </section>
  <!--  จบ แทปฟ้า -->
<br>
<!--  เมนู -->
<div class="tabs is-centered is-boxed is-medium">
<ul>
  <li>
    <a >
      <span class="icon is-small"><i class="fa fa-users"></i></span>
      <span v-on:click="home()">MEMBER</span>
    </a>
  </li>
  <li>
    <a>
      <span class="icon is-small"><i class="fa fa-user-plus"></i></span>
      <span v-on:click="addadmin()" >Add admin</span>
    </a>
  </li>
  <li class="is-active">
    <a>
      <span class="icon is-small"><i class="fa fa-money"></i></span>
      <span  v-on:click="Add_user_credit()" >Add user credit</span>
    </a>
  </li>
  <li>
    <a>
      <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>
      <span v-on:click="Earnings_Revenue()">Earnings Revenue</span>
    </a>
  </li>
</ul>
</div>
<!--  จบ เมนู -->
<!--  เมนูย่อย เครดิต -->
<div class="tabs is-fullwidth">
  <ul>
    <li v-on:click="credit_left()" >
      <a>
        <span class="icon"><i class="fa fa-angle-left"></i></span>
        <span >credit</span>
      </a>
    </li>
    <li  v-on:click="Add_credit_right()" >
      <a>
        <span>Add credit</span>
        <span class="icon"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul>
</div>
<!-- จบ เมนูย่อย เครดิต -->
<!--  ตาราง user เครดิต -->
<div  class="table1" >
<table class="table" v-if= " type === 'credit'" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">E-mail</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">   Photo</th>
    </tr>
  </thead>
    <tbody v-for = " (User, key, count) in showimage">
      <tr>
          <td>  {{count+1}}  </td>
        <td>  {{User.email}}  </td>
        <td>  {{User.Date}}  </td>
        <td>  {{User.Time}}  </td>
        <td>
          <a class="lightbox" :href="'#'+key"><img class="image is-128x128" v-bind:src="User.url"/></a>
            <div class="lightbox-target" :id="key"><img v-bind:src="User.url"/><a class="lightbox-close" href="#"></a></div>
          </td>

   </tr>
    </tbody>
</table>
 <table class="table" v-if= " type === 'addcredit'" >
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">Name</th>
       <th scope="col">Money</th>
       <th scope="col">Approved</th>
     </tr>
   </thead>
     <tbody v-if="checkEdit !== key"  v-for = " (User, key, count) in showusers">
       <tr >
          <td>  {{count+1}}  </td>
         <td>  {{User.email}}  </td>
         <td>  {{User.money}}  </td>
         <td> <button type="button" class="button is-primary is-outlined" name="buttonAdd" @click="swap(key)" >update</button> </td>
       </tr>
     </tbody>
     <tbody  class="content" v-else >
       <tr>
         <td>  {{count+1}}  </td>
         <td>  {{User.email}}  </td>
         <td>  <input type="number"  name="" value="" v-model="User.money"> </td>
         <td> <button type="button" class="button is-info is-outlined" name="buttonAdd" @click="update(key,User.money)" >Approved</button> </td>
       </tr>
     </tbody>
 </table>

</div>
<!-- จบ ตาราง user เครดิต -->

 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'Add_user_credit',
  data () {
    return {
      data: {
        name: '',
        surname: '',
        money: 0
      },
      showusers: '',
      showimage: '',
      checkEdit: '',
      type: 'credit',
      img: this.$route.params.img
    }
  },
  created: function () { /* แสดงชื่อ Admin */
    var user = firebase.auth().currentUser
    if (user != null) {
      this.admin = user.email
    }
    this.pullData()
  },
  methods: {
    pullData: function () {   /* แสดงชือตาราง User ที่ส่งรูปมาให้ Approved */
      let that = this
      firebase.database().ref('/image/').once('value').then(function (snapshot) {
        that.showimage = snapshot.val()
      })
      firebase.database().ref('/users/').once('value').then(function (snapshot) {
        that.showusers = snapshot.val()
      })
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    },
    addadmin () {
      this.$router.push({path: '/addadmin1'})
    },
    Earnings_Revenue () {
      this.$router.push({path: '/Earnings_Revenue1'})
    },
    home () {
      this.$router.push({path: '/home1'})
    },
    Add_user_credit () {
      this.$router.push({path: '/Addcredit1'})
    },
    update: function (key, money) {
      console.log(key)
      alert('Add Credit Complete')
      firebase.database().ref('/users/').child(key).update({
        money: money
      })
      this.checkEdit = ''
    },
    swap: function (key) {
      this.checkEdit = key
    },
    credit_left: function () {
      this.type = 'credit'
    },
    Add_credit_right: function () {
      this.type = 'addcredit'
    }
  }
}
</script>

<style lang="css">
.table1{
  width: 80%;
  margin-left: 10%;
}

/*Eliminates padding, centers the thumbnail */



/* Styles the thumbnail */

a.lightbox img { /* รูป */
height: 150px;
border: 3px solid white;
box-shadow: 3px 0px 8px rgba(0,0,0,.3);
margin: 0px 20px 0px 20px;
}

/* Styles the lightbox, removes it from sight and adds the fade-in transition */

.lightbox-target {
margin-top: 10px;
margin-bottom: 10px;
position: fixed;
top: -100%;
width: 65%;
background: rgba(0,0,0,.7);
width: -100%;
opacity: 0;
-webkit-transition: opacity .5s ease-in-out;
-moz-transition: opacity .5s ease-in-out;
-o-transition: opacity .5s ease-in-out;
transition: opacity .5s ease-in-out;
overflow: hidden;
margin-left: -50%

}

/* Styles the lightbox image, centers it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */

.lightbox-target img {
margin: auto;
position: absolute;
top: 0;
left:0;
right:0;
bottom: 0;
max-height: 0%;
max-width: 0%;
border: 3px solid white;
box-shadow: 5px 0px 8px rgba(0,0,0,.3);
box-sizing: border-box;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}

/* Styles the close link, adds the slide down transition */

a.lightbox-close {
display: block;
width:50px;
height:50px;
box-sizing: border-box;
background: white;
color: black;
text-decoration: none;
position: absolute;
top: -80px;
right: 0;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:before {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(45deg);
-moz-transform:rotate(45deg);
-o-transform:rotate(45deg);
transform:rotate(45deg);
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:after {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(-45deg);
-moz-transform:rotate(-45deg);
-o-transform:rotate(-45deg);
transform:rotate(-45deg);
}

/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox-target anchor */

.lightbox-target:target {
opacity: 1;
top: 0;
bottom: 0;
}

.lightbox-target:target img {
max-height: 100%;
max-width: 100%;
}

.lightbox-target:target a.lightbox-close {
top: 0px;
}

</style>
