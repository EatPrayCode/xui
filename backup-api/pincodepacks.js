const admin = require("firebase-admin");
const functions = require('firebase-functions');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const pincodePacksFn = fn => async (req, res) => {

  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/pincodepacks?id=';
    const pincodeId = url.slice(baseURLPath.length);

    const pincodepacksRef = await db
      .collection('pincodes')
      .doc(pincodeId)
      .collection('storepacks')
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
  else if (req.method === "POST") {

    const payload = req.body;
    const { pincode } = payload;
    const pack = {
      name: 'PackName',
      value: 'PackValue'
    };

    const mainpacksRef = await db
      .collection('mainpacks')
      .add(pack)
      .then(docRef => {
        let pinPack = {
          ...pack,
          mainPacksId: docRef.id
        };
        const pincodepacksRef = db
          .collection('pincodes')
          .doc(pincode.id)
          .collection('storepacks')
          .add(pinPack)
          .then(querySnapshot => {
            res.status(200).json([]);
            console.log("Added to pincode packs");
          })
          .catch(err => {
            res.status(500).json({ err });
          });
        console.log("Added to main packs");
      })
  }
  else if (req.method === "PUT") {
    const payload = req.body;
    let { pack, pincode } = payload;
    pack = {
      ...pack,
      packName: new Date().toDateString
    };
    console.log(pack);
    const pincodepacksRef = await db
      .collection('pincodes')
      .doc(pincodedocvalue)
      .collection('storepacks')
      .doc(pack.id)
      .set(pack)
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

module.exports = pincodePacksFn(handler);
