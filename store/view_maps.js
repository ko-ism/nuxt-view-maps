import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
// import googlemaps from '@maps'

const db = firebase.firestore()
const dataRef = db.collection(process.env.FIRESTORE_COLLECTION_NAME)

export const state = () => ({
  all_data: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('all_data', dataRef)
  })
}

// export const googleMapsClient = require('@google/maps').createClient({
// export const googleMapsClient = googlemaps.createClient({
//   key: process.env.GOOGLE_MAPS_API_KEY,
//   Promise: Promise
// })