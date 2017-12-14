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
  <li >
    <a >
      <span class="icon is-small"><i class="fa fa-users"></i></span>
      <span  v-on:click="home()">MEMBER</span>
    </a>
  </li>
  <li class="is-active">
    <a>
      <span class="icon is-small"><i class="fa fa-user-plus"></i></span>
      <span v-on:click="addadmin()" >Add admin</span>
    </a>
  </li>
  <li >
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
<!--  เริ่ม addd user -->
<!-- Main container -->
<nav class="level-item">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="email"  v-model="email"  placeholder="E-mail">
        </p>
        <p class="control">
          <input class="input" type="password"  v-model="password" placeholder="Password">
        </p>
        <p class="control">
          <button class="button is-primary is-outlined"  @click="add()" >
            Add
          </button>
        </p>

      </div>
    </div>
  </div>
</nav>
<!--  จบ addd user -->


<!--  ตาราง user  -->
<div  class="table1" >
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">E-mail</th>
      <th scope="col">Password</th>
      <th scope="col">Delete Account</th>
    </tr>
  </thead>
    <tbody class="" v-for = " (admin, key, count) in showAdmin">
      <tr>
        <td>  {{count+1}}  </td>
        <td> {{admin.email}} </td>
        <td> {{admin.password}}  </td>
        <td>
          <a class="button is-danger is-outlined"><span  @click="remove(key)" >Delete</span><span class="icon is-small">  <i class="fa fa-times"></i></span></a>
        </td>
      </tr>
    </tbody>

</table>

</div>
<!-- จบ ตาราง user  -->


 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'addadmin',
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      showAdmin: '',
      count: 0
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
    pullData: function () {  /* แสดงชืตาราง Admin */
      let that = this
      firebase.database().ref('/Admin/').once('value').then(function (snapshot) {
        that.showAdmin = snapshot.val()
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
    add: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.data.email = this.email
          this.data.password = this.password
          firebase.database().ref('Admin').push(this.data)
          this.$router.replace('/addadmin1')
          alert('Add Admin Complete')
          this.pullData()
          this.email = ''
          this.password = ''
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    remove: function (key) {
      alert('Delete Admin Complete')
      firebase.database().ref('Admin').child(key).remove()
      this.pullData()
    }
  }
}
</script>

<style lang="css">
.table1{
  width: 80%;
  margin-left: 10%;

}
</style>
