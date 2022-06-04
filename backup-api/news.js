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
  const p1 = Promise.resolve(3);
  const p2 = 1337;
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      newsapi.v2.topHeadlines({
        sources: 'google-news-in',
        language: 'en'
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(response);
      });
    }, 100);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      newsapi.v2.topHeadlines({
        sources: 'the-hindu',
        language: 'en'
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(response);
      });
    }, 100);
  });
  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      newsapi.v2.topHeadlines({
        sources: 'the-times-of-india',
        language: 'en'
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(response);
      });
    }, 100);
  });
  Promise.all([p1, p2, p3, p4, p5]).then(values => {
    uploadNewsAPIDataToFirebase(req, res, values);
    console.log(values[2]); // [3, 1337, "foo"]
  });
}

async function uploadNewsAPIDataToFirebase(req, res, data) {
  const entry = {
    status: 200,
    syncDate: new Date().toISOString(),
    data: data
  };
  const collectionRef = await db.collection("siterefresh")
    .doc('livenewsapi').set(entry)
    .then(querySnapshot => {
      res.status(200).json([]);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}
