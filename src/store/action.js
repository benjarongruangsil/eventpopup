import firebase from '../../../services/firebase'
import axios from 'axios'

const noImage = [
  'https://goo.gl/9AyvwQ',
  'https://goo.gl/Kn7y75',
  'https://goo.gl/DJrn5M',
  'https://goo.gl/CjZKae',
  'https://goo.gl/2GJoQ8'
]

const randomImage = () => {
  return noImage[parseInt(Math.random() * 5)]
}

export const createAuth = async (store, form) => {
  store.commit('setLoading', true)
  let err
  try {
    const res = await axios.put('https://us-central1-patient-care-grab-c135f.cloudfunctions.net/api/create-user', {data: form})
    const employee = await firebase.database().ref(`/employee/${res.data}/image`)
    let storageRef = await firebase.storage().ref(`/profileImage/${res.data}image`)
    let url = form.image
    if (form.image) {
      if (!form.image.includes('http')) {
        let res = await storageRef.putString(form.image, 'data_url')
        url = res.downloadURL
      }
    } else url = randomImage()
    employee.set(url)
    err = 'success'
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}

export const login = async (store, form) => {
  store.commit('setLoading', true)
  let err
  try {
    await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}

export const signOut = async (store) => {
  store.commit('setLoading', true)
  try {
    await firebase.auth().signOut()
  } catch (error) {
    console.error(error.code, error.message)
  }
  store.commit('setLoading', false)
}

export const resetPassword = async (store, email) => {
  store.commit('setLoading', true)
  let err
  if (!email) return
  try {
    const auth = firebase.auth()
    await auth.sendPasswordResetEmail(email)
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}

export const checkCurrentUser = async (store) => {
  store.commit('setLoading', true)
  await firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      let data
      const employee = await firebase.database().ref(`/employee/${user.uid}`)
      employee.on('value', snap => {
        let val = snap.val()
        if (val) {
          data = {
            key: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            firstName: val.firstName,
            lastName: val.lastName,
            address: val.address,
            department: val.department,
            image: val.image
          }
          store.commit('setUser', data)
        }
      })
    }
  })
  store.commit('setLoading', false)
}

export const updateProfile = async (store, form) => {
  store.commit('setLoading', true)
  let err
  try {
    let user = await firebase.auth().currentUser
    let storageRef = await firebase.storage().ref(`profileImage/${user.uid}image`)
    let url = form.image
    if (form.image) {
      if (!form.image.includes('http')) {
        let res = await storageRef.putString(form.image, 'data_url')
        url = res.downloadURL
      }
    } else url = randomImage()
    const employee = await firebase.database().ref(`/employee/${user.uid}`)
    employee.set({
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      department: form.department,
      image: url
    })
  } catch (error) {
    err = error.message
    console.log(error)
  }
  store.commit('setLoading', false)
  return err
}

export const deleteAccount = async (store, uid) => {
  store.commit('setLoading', true)
  let err
  try {
    await axios.delete(`https://us-central1-patient-care-grab-c135f.cloudfunctions.net/api/delete-user?uid=${uid}`)
    err = 'success'
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}

export const fetchAllAuth = async (store) => {
  store.commit('setLoading', true)
  let err
  try {
    let user = await firebase.auth().currentUser
    const employee = await firebase.database().ref(`/employee`)
    employee.on('value', snap => {
      let value = Object.entries(snap.val())
      let data = value.map(val => {
        return {
          key: val[0],
          ...val[1]
        }
      })
      if (user) data = data.filter(member => member.key !== user.uid)
      store.commit('setMembers', data)
    })
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}

export const fetchDepartment = async (store) => {
  store.commit('setLoading', true)
  let result = []
  try {
    const departments = await firebase.database().ref(`/departments`)
    departments.once('value', snap => {
      result = snap.val()
    })
  } catch (error) {
    // console.error(error)
  }
  store.commit('setLoading', false)
  return result
}

export const updateUser = async (store, form) => {
  store.commit('setLoading', true)
  let err
  try {
    const member = await firebase.database().ref(`/employee/${form.key}`)
    member.set(form.data)
    err = 'success'
  } catch (error) {
    err = error.message
  }
  store.commit('setLoading', false)
  return err
}
