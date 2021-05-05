import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPDMAn1eQUVNxSzbTpG_BtJbepjMy0DMc",
    authDomain: "olxapp-67894.firebaseapp.com",
    projectId: "olxapp-67894",
    storageBucket: "olxapp-67894.appspot.com",
    messagingSenderId: "713070565405",
    appId: "1:713070565405:web:cea23b2f0d03cfdb1e8ef4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const  db = firebase.firestore()
const storage = firebase.storage()

function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)


}
function addUserToDb(user) {
    return db.collection('user').add(user)
}


function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

function logout() {
    return auth.signOut()
}
function getAllAds() {
    return new Promise((resolve) => {
        db.collection('ads').get().then(snapshot => {
            const ads = []
            snapshot.forEach(doc => {
                ads.push({ ...doc.data(), id: doc.id })
            })
            resolve(ads)
        })

    })

}

function getSpecificUser(email) {
    return new Promise((resolve) => {
        db.collection('user').get().then(snapshot => {
            const user= []
            snapshot.forEach(doc => {
                if (email === doc.data().email){
                user.push({ ...doc.data(), id: doc.id })}
            })
            resolve(user)
            console.log(user)
        })

    })

}
function addAdToDb(ad) {
    return db.collection('ads').add(ad)
}
function getSpecificAd(adId) {
    return new Promise((resolve) => {
        db.collection('ads').doc(adId).get().then(doc => {
            resolve(doc.data())
        })
    })
}
function uploadProfileImage(files) {
    return new Promise((resolve,reject)=>{
        console.log(files)
    const file = files[0]
    const ref = storage.ref(`/profileImages/${file.name}`)
    ref.put(file).then((snapshot) => {
        ref.getDownloadURL().then(url => {
            
            resolve(url)
            console.log(`uploaded !! url == ${url}`)

        })
    }).catch(error => {
        reject(error.message)
    });
    } )
    
    
}
function uploadAdImage(files) {
    return new Promise((resolve,reject)=>{
        console.log(files)
    const file = files[0]
    const ref = storage.ref(`/adsImages/${file.name}`)
    ref.put(file).then((snapshot) => {
        ref.getDownloadURL().then(url => {
            console.log('url**', url)
            resolve(url)
        })
    }).catch(error => {
        reject(error.message)
    });
    } )
    
    
}

const updatingUserData = (name, contactNo,userDocID,profilePicture) =>{
    console.log(`Name : ${name} Contact No ${contactNo} ID ${userDocID}`)
  return db.collection('user').doc(userDocID).update({
      fullname:firebase.firestore.FieldValue=(name),
     phoneNumber:firebase.firestore.FieldValue=(contactNo),
     picture:firebase.firestore.FieldValue=(profilePicture)
  })
}
export {
    auth,
    db,
    register,
    login,
    addUserToDb,
    logout,
    getAllAds,
    getSpecificUser,
    getSpecificAd,
    uploadProfileImage,
    updatingUserData,
    uploadAdImage,
    addAdToDb

}