const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const initialiseUserFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/initialiseuser?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const hashMap = {
        addresses: [],
        orders: [],
        userData: {}
      };
      const ordersRef = await db.collection('users')
        .doc(uid)
        .collection('orders')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            hashMap.orders.push(doc.data());
          });
        })
        .catch(err => {
          res.status(500).json({ err });
        });

      const addressesRef = await db.collection('users')
        .doc(uid)
        .collection('addresses')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let data = {
              ...doc.data(),
              id: doc.id
            };
            hashMap.addresses.push(data);
          });
        })
        .catch(err => {
          res.status(500).json({ err });
        });

      const user = await db.collection('users')
        .doc(uid)
        .get()
        .then(doc => {
          hashMap.userData = doc.data();
        })
        .catch(err => {
          res.status(500).json({ err });
        });
      res.json(hashMap);
    }
  }
  else if (req.method === "POST") {
    res.status(500).json({ status: "Error Occured." });
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

module.exports = initialiseUserFn(handler);
