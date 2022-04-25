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

    const { url } = req;
    const baseURLPath = '/api/realorders?UID=';
    const uid = url.slice(baseURLPath.length);
    req.params = { uid };
    const user = await admin.auth().getUser(uid);
    const usersRef = await db.collection('users')
      .doc(uid)
      .collection('wishlistCustom')
      .get()
      .then(querySnapshot => {
        let arrayR = [];
        querySnapshot.forEach(doc => {
          arrayR.push(doc.data());
        });
        res.json(arrayR);
      });
  }
  else {
    res.status(404).json({ status: "Error Occured." });
  }
}

const handler = (data, context) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = testFn(handler);
