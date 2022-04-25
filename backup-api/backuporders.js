const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devx-348322-default-rtdb.firebaseio.com/"
});


const db = admin.firestore();

const testFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const usersRef = db.collection('users');
    const allUsers = usersRef.get()
      .then(snapshot => {
        let arrayR = snapshot.docs.map(doc => {
          return doc.data();
        });
        res.json(arrayR);
      })
      .catch(err => {
        res.json({ err });
      });
  }
  else if (req.method === "POST") {

    const newuser = {
      dateCreated: new Date().toLocaleTimeString()
    };
    const collection = await db.collection("users");

    // const liam = collection.doc(newuser).set({
    //     married: true
    //   }, { merge: true });

    // Take the user in the post
    //insert the user into the database.
    const users = await collection.doc('newuser').set(newuser, { merge: true });

    const usersRef = db.collection('users');
    const allUsers = usersRef.get()
      .then(snapshot => {
        let arrayR = snapshot.docs.map(doc => {
          return doc.data();
        });
        res.json(arrayR);
      })
      .catch(err => {
        res.json({ err });
      });
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: "Error route note found" });
  }
}

const handler = (data, context) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = testFn(handler);
