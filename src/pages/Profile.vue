<template >
  <div>
<section class="hero is-primary">
<!-- startmenu -->
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
<a class="navbar-item">
  <router-link to="/">
<img src="../assets/logo3.png" alt="" height="500" width=""> </router-link> </a>
<p class="navbar-item">
  <input class="input" type="text" placeholder="---- Search ----">&nbsp&nbsp&nbsp&nbsp
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
            <div class="" style="width: 100%;" v-if="checkEdit !== key" v-for = "(post, key, count) in showpost"  >
                <div class="" v-if= "user.displayName === post.users">
              <article class="message is-dark" >
              <div class="message-body">
                <div class="columns">
                  <div class="column">
                    <img src="https://bulma.io/images/placeholders/256x256.png"  style=" float:left; margin-right: 2%; ">
                    <strong>{{post.name}}</strong><br></br>
                      <i class="fa fa-clock-o"></i> {{post.startdate}} - {{post.enddate}} | {{post.starttime}} - {{post.starttime}}  </br>
                      <i class="fa fa-map-marker"></i> {{post.location}}</br>
                      <strong>Amount :    </strong>{{post.amount}}</br>
                      <strong>Price :    </strong>{{post.price}}</br>
                      <strong>Description </strong></br>{{post.description}}</br>
                    </br></br></br>
                      <p class="button is-success  is-outlined" style=" float:right; margin-left: 2%;"   @click="swap(key)" >
                        <span>Update</span>
                        <span class="icon is-small">
                            <i class="fa fa-refresh"></i>
                          </span>
                    </p>
                    <p class="button is-danger is-outlined" style=" float:right;"  @click="delete1(key)">
                       <span>Delete</span>
                         <span class="icon is-small">
                           <i class="fa fa-trash"></i>
                         </span>
                   </p>
                  </div>
                </div>
            </div>
          </article> </br></div>
          </div>

          <div class="" style="width: 100%;" v-else   >
              <div class="" v-if= "user.displayName === post.users">
                <article class="message is-dark" >
                <div class="message-body">
                  <div class="columns">
                    <div class="column">
                      <img src="https://bulma.io/images/placeholders/256x256.png"  style=" float:left; margin-right: 2%; ">

                      <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">EVENT</label>
              </div>
              <div class="field-body">
              <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name"  v-model="post.name" >
                <span class="icon is-small is-left">
                  <i class="fa fa-bicycle"></i>
                </span>
              </p>
              </div>
              <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input "  type="text"  v-model="post.location" placeholder="Location" value="alex@smith.com" >
                <span class="icon is-small is-left">
                  <i class="fa fa-map-marker"></i>
                </span>
              </p>
              </div>
              </div>
              </div>

              <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <label class="label">DATE</label>
                    </div>
                    <div class="field-body">
                    <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="date" placeholder="date" v-model="post.startdate">
                      <span class="icon is-small is-left">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </p>
                  </div> to
                    <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input class="input " type="date" placeholder="date" v-model="post.enddate">
                      <span class="icon is-small is-left">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </p>
                    </div>
                    </div>
                    </div>

                  <div class="field is-horizontal">
          <div class="field-label is-normal">
          <label class="label">TIME</label>
          </div>
          <div class="field-body">
          <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="time" placeholder="time" v-model="post.starttime">
            <span class="icon is-small is-left">
              <i class="fa fa-clock-o"></i>
            </span>
          </p>
        </div> to
          <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input " type="time" placeholder="time" v-model="post.endtime" >
            <span class="icon is-small is-left">
              <i class="fa fa-clock-o"></i>
            </span>
          </p>
          </div>
          </div>
          </div>

              <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">AMOUNT</label>
              </div>
              <div class="field-body">
              <div class="field is-narrow">
              <div class="control">
                <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input "  placeholder="amount" v-model="post.amount" >
                  <span class="icon is-small is-left">
                    <i class="fa fa-sort-numeric-asc"></i>
                  </span>
                </p>
                </div>
              </div>
              </div>
              </div>
              </div>

              <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">PRICE</label>
              </div>
              <div class="field-body">
              <div class="field is-narrow">
              <div class="control">
                <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input " placeholder="price" v-model="post.price">
                  <span class="icon is-small is-left">
                    <i class="fa fa-money"></i>
                  </span>
                </p>
                </div>
              </div>
              </div>
              </div>
              </div>

              <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">PHOTO</label>
              </div>
              <div class="field-body">
              <div class="field is-narrow">
              <div class="control">
                <div class="field">
                  <div class="file is-boxed">
                      <label class="file-label">
                        <input class="file-input" type="file" name="resume" @change="post.photo" v-on="post.photo">
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fa fa-upload"></i>
                          </span>
                          <span class="file-label">
                            Choose a file…
                          </span>
                        </span>
                      </label>
                    </div>
                </div>
              </div>
              </div>
              </div>
              </div>

              <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">DESCRIPTION</label>
              </div>
              <div class="field-body">
              <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="ใส่รายละเอียดงาน" v-model="post.description"></textarea>
              </div>
              </div>
              </div>
              </div>

                      </br></br></br>
                        <p class="button is-success  is-outlined" style=" float:right; margin-left: 2%;"   @click="Update(key, post.name, post.amount, post.description, post.enddate, post.endtime, post.location, post.photo, post.price, post.startdate, post.starttime)" >
                          <span>Save</span>
                          <span class="icon is-small">
                              <i class="fa fa-check"></i>
                            </span>
                      </p>
                    </div>
                  </div>
              </div>
              </article>



            </div>
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
import { mapGetters, mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'home',
  data () {
    return {
      newPostInput: '',
      showpost: '',
      nameuser: '',
      data: {
        name: '',
        location: '',
        startdate: '',
        enddate: '',
        starttime: '',
        endtime: '',
        amount: '',
        price: '',
        photo: '',
        description: '',
        users: ''
      },
      checkEdit: ''

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
      this.nameuser = this.user.displayName
      firebase.database().ref('/event/post/').once('value').then(function (snapshot) {
        that.showpost = snapshot.val()
      })
    },
    delete1 (key) {  /* แสดงpost */
      alert('Delete Admin Complete')
      this.nameuser = this.user.displayName
      firebase.database().ref('/event/post/').child(key).remove()
      this.pullData()
    },
    clear () {
      console.log('asd')
      this.data = ''
    },
    Update: function (key, name, amount, description, enddate, endtime, location, photo, price, startdate, starttime) {
      console.log(key)
      firebase.database().ref('event/post/').child(key).update({name: name, amount: amount, description: description, enddate: enddate, endtime: endtime, location: location, photo: photo, price: price, startdate: startdate, starttime: starttime})
      this.checkEdit = ''
    },
    swap: function (key) {
      this.checkEdit = key
    }
  },
  created () {
    this.setPostRef()
    this.pullData()
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
