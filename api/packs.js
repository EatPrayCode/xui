const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrshop-overthemoon-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const packsFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { countryId, pinId, categoryType } = req.query;
    if (countryId) {
      getCountryPacks(countryId, pinId, categoryType, res);
    }
    else {
      getDefaultPacks(res);
    }
  }
  else if (req.method === "POST") { }
  else if (req.method === "PUT") { }
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

function getDefaultPacks(res) {
  const packsRef = db
    .collection('maincatalog')
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

function getCountryPacks(countryId, pinId, categoryType, res) {
  const packsRef = db
    .collection('countries')
    .doc(countryId)
    .collection('countrycatalog')
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
