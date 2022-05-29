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
  if (req.method === "GET") {
    res.json([]);
  }
  else if (req.method === "POST") {
    const entry = {}
    const collection = await db.collection("site-refresh");
    const entries = await collection.insertOne(entry);
    res.status(200).json([]);
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: "Error route note found" });
  }
}

module.exports = testFn(handler);
