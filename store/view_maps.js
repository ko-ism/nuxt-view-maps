import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

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