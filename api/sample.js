const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devx-348322-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

const testFn = fn => async (req, res) => {
  const newEntry = {
    syncdate: new Date()
  };
  const mainEntryUrl = 'MAY29';
  if (req.method === "GET") {
    const collectionRef = await db.collection("site-refresh")
      .doc(mainEntryUrl)
      .collection('syncs').add(newEntry)
      .then(querySnapshot => {
        res.status(200).json([]);
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  }
  else if (req.method === "POST") {
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: "Error route note found" });
  }
}

module.exports = testFn(handler);

