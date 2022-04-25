const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const countriesFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const countriesRef = await db
      .collection('countries')
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

module.exports = countriesFn(handler);
