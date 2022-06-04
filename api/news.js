const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devx-348322-default-rtdb.firebaseio.com/"
});

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1b6ebad4ea2e433dbe0f4ce3521ff563');
const db = admin.firestore();

const handler = (data, context) => {
  const dDate = new Date();
  res.end(dDate.toString());
}

const testFn = fn => async (req, res) => {

  if (req.method === "GET") {
    getNewsSources(req, res);

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

async function getNewsSources(req, res, data) {

  // To query sources
  // All options are optional
  newsapi.v2.topHeadlines({
    category: 'technology',
    language: 'en',
    country: 'in'
  }).then(response => {
    uploadNewsAPIDataToFirebase(req, res, response);
  }).catch(err => {
    res.status(500).json({ err });
  });
}

async function uploadNewsAPIDataToFirebase(req, res, data) {
  const entry = {
    status: 200,
    syncDate: new Date().toISOString(),
    data: data
  };
  const collectionRef = await db.collection("siterefresh")
    .doc('newsapi').set(entry)
    .then(querySnapshot => {
      res.status(200).json([]);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}