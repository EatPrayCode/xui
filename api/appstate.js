const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrshop-overthemoon-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const appStateFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { uid } = req.query;
    // console.log(uid);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const userRef = await db.collection('users')
        .doc(uid)
        .collection('usersettings')
        .get()
        .then(querySnapshot => {
          const arrayR = [];
          querySnapshot.forEach(doc => {
            let data = {
              ...doc.data(),
              settingsId: doc.id
            };
            arrayR.push(data);
          });
          res.json(arrayR[0]);
        })
        .catch(err => {
          res.status(500).json({ err });
        });
    }
  }
  else if (req.method === "POST") {
    const { uid } = req.query;
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const extraData = req.body;
      const usersRef = await db.collection('users')
        .doc(uid)
        .collection('usersettings').add(extraData)
        .then(querySnapshot => {
          res.json([]);
        })
        .catch(err => {
          res.status(500).json({ err });
        });
    }
  }
  else if (req.method === "PUT") {
    const { uid } = req.query;
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const extraData = req.body;
      const userSettingsId = extraData.settingsId;
      console.log(userSettingsId);
      const usersRef = await db.collection('users')
        .doc(uid)
        .collection('usersettings').doc(userSettingsId)
        .update(extraData)
        .then(querySnapshot => {
          res.json([]);
        })
        .catch(err => {
          res.status(500).json({ err });
        });

      // res.json([]);
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

module.exports = appStateFn(handler);
