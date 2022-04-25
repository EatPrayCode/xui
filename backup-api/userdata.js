const admin = require("firebase-admin");
const { v4: uuid } = require('uuid');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrshop-overthemoon-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const userDataFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/accessclaims?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
  }
  else if (req.method === "POST") {
    const { url } = req;
    const baseURLPath = '/api/userdata?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      console.log(uid);
      const userData = req.body;
      admin
        .auth()
        .setCustomUserClaims(uid, userData)
        .then(() => {
          res.json(userData);
          // The new custom claims will propagate to the user's ID token the
          // next time a new one is issued.
        });

      // const usersRef = await db.collection('users')
      //   .doc(uid)
      //   .collection('addresses').add(claims)
      //   .then(querySnapshot => {
      //     res.json([]);
      //   })
      //   .catch(err => {
      //     res.status(500).json({ err });
      //   });
      // res.json(claims);
      // res.json([]);
    }
  }
  else if (req.method === "PUT") {

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

module.exports = userDataFn(handler);