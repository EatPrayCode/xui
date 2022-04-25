const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrshop-overthemoon-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const pincodesFn = fn => async (req, res) => {

  const pincodecollectionname = 'pincodes';

  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/pincodepacks';
    const pincodepacksRef = await db
      .collection(pincodecollectionname)
      .get()
      .then(querySnapshot => {
        const arrayR = [];
        querySnapshot.forEach(doc => {
          const data = {
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
  else if (req.method === "POST") {
    const payload = req.body;
    const pincodepacksRef_ = await db
      .collection(pincodecollectionname)
      .add(payload)
      .then(querySnapshot => {
        res.status(200).json([]);
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  }
  else if (req.method === "PUT") {
    let payload = req.body;
    payload = {
      ...payload,
      name: new Date().toLocaleTimeString()
    };
    const pincodepacksRef = await db
      .collection(pincodecollectionname)
      .doc(payload.id)
      .set(payload)
      .then(querySnapshot => {
        res.status(200).json([]);
      })
      .catch(err => {
        res.status(500).json({ err });
      });
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

module.exports = pincodesFn(handler);
