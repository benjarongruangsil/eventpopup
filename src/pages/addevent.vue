<template >
  <div>
<section class="hero is-primary">
  <nav class="navbar" role="navigation" aria-label="dropdown navigation">
<a class="navbar-item">
  <router-link to="/">
<img src="../assets/logo3.png" alt="" height="500" width=""> </router-link> </a>
<p class="navbar-item">
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

</section></br>

<div class="columns">
  <div class="column"></div>
  <div class="column is-two-thirds">
    <article class="message is-dark">
      <div class="message-header">
        <p>ADD EVENT POP</p>
      </div>
      <div class="message-body">
                          <div class="field is-horizontal">
                  <div class="field-label is-normal">
                  <label class="label">EVENT</label>
                  </div>
                  <div class="field-body">
                  <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Name"  v-model="data.name">
                    <span class="icon is-small is-left">
                      <i class="fa fa-bicycle"></i>
                    </span>
                  </p>
                  </div>
                  <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input " placeholder="Location"  v-model="data.location" >
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
                          <input class="input" type="date" placeholder="date" v-model="data.startdate" required>
                          <span class="icon is-small is-left">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </p>
                      </div> to&nbsp&nbsp
                        <div class="field">
                        <p class="control is-expanded has-icons-left has-icons-right">
                          <input class="input " type="date" placeholder="date" v-model="data.enddate"required>
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
                <input class="input" type="time" placeholder="time" v-model="data.starttime"required>
                <span class="icon is-small is-left">
                  <i class="fa fa-clock-o"></i>
                </span>
              </p>
            </div> to&nbsp&nbsp
              <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input " type="time" placeholder="time" v-model="data.endtime"required >
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
                      <input class="input " type="number" placeholder="amount" v-model="data.amount"required >
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
                      <input class="input " type="number" placeholder="price" v-model="data.price"required>
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
                            <input class="file-input" type="file" name="resume"  @change="onFileChange($event.target.files[0])"required>
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
                    <textarea class="textarea" placeholder="ใส่รายละเอียดงาน" v-model="data.description"required></textarea>
                  </div>
                  </div>
                  </div>
                  </div>

                  <div class="field is-horizontal">
                  <div class="field-label">
                  <!-- Left empty for spacing -->
                  </div>
                  <div class="field-body">
                  <div class="field">
                  <div class="control">
                    <button class="button is-success  is-outlined" @click="addevent()"> Send Event  </button>
                    <button class="button is-danger is-outlined" @click="clear()"> Clear  </button>
                  </div>
                  </div>
                  </div>
                  </div>

      </div>
    </article>
  </div>
  <div class="column"></div>
</div>
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
      data: {
        name: '',
        location: '',
        startdate: '',
        enddate: '',
        starttime: '',
        endtime: '',
        amount: '',
        price: '',
        image: '',
        description: '',
        users: ''
      },
      nameuser: '',
      dataImg: {}
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
    async addevent () {
      if (this.data.name === '' || this.data.location === '' || this.data.startdate === '' || this.data.enddate === '' || this.data.amount === '' || this.data.price === '' || this.data.description === '') {
        alert('กรุณากรอกข้อมูลให้ครบ')
      } else {
        console.log('pass')
        let urlsImg = await this.createImage()
        this.data.image = urlsImg.downloadURL
        this.nameuser = this.user.displayName
        this.data.users = this.user.displayName
        firebase.database().ref('event/post/').push(this.data)
        firebase.database().ref('event/user/' + this.nameuser).push(this.data)
        alert('Add event Complete')
        this.data = ''
      }
    },
    clear () {
      this.data = ''
    },
    onFileChange (fileImg) {
      this.dataImg = fileImg
    },
    createImage () {
      const storageRef = firebase.storage().ref('image/' + this.dataImg.name.toLowerCase().split(' ').join('-'))
      const uploadTask = storageRef.put(this.dataImg)
      return uploadTask
    }
  },
  created () {
    this.setPostRef()
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
