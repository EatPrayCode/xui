const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const packsFn = fn => async (req, res) => {

  if (req.method === "GET") {
    const { url } = req;
    const countryId = req.query.countryId;
    const packId = req.query.packId;
    const pincodepacksRef = await db
      .collection('countries')
      .doc(countryId)
      .collection('packs')
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
        // res.json({
        //   pinCodeId,
        //   packId
        // });
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  }
  else if (req.method === "POST") {}
  else if (req.method === "PUT") {}
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

module.exports = packsFn(handler);
