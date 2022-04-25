const admin = require("firebase-admin");
const { v4: uuid } = require('uuid');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const addressesFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/addresses?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const usersRef = await db.collection('users')
        .doc(uid)
        .collection('addresses')
        .get()
        .then(querySnapshot => {
          const arrayR = [];
          querySnapshot.forEach(doc => {
            let data = {
              ...doc.data(),
              id: doc.id
            };
            arrayR.push(data);
          });
          res.json(arrayR);
        })
        .catch(err => {
          res.status(500).json({ err });
        });
    }
  }
  else if (req.method === "POST") {
    const { url } = req;
    const baseURLPath = '/api/addresses?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const newAddress = req.body;
      const usersRef = await db.collection('users')
        .doc(uid)
        .collection('addresses').add(newAddress)
        .then(querySnapshot => {
          res.json([]);
        })
        .catch(err => {
          res.status(500).json({ err });
        });

      // res.json([]);
    }
  }
  else if (req.method === "PUT") {
    const { url } = req;
    const baseURLPath = '/api/addresses?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const newAddress = req.body;
      const addressId = newAddress.addressId;
      const usersRef = await db.collection('users')
        .doc(uid)
        .collection('addresses').doc(addressId)
        .update(newAddress)
        .then(querySnapshot => {
          res.json([]);
        })
        .catch((err) => {
          console.log('Error getting documents', err);
          return res.status(500).json({ status: "Error Occured." });
        })
    }
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: "Error Occured." });
  }
}

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

module.exports = addressesFn(handler);
