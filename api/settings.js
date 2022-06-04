const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devx-348322-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1b6ebad4ea2e433dbe0f4ce3521ff563');
const recordsList = [];

const handler = (data, context) => {
  const dDate = new Date();
  res.end(dDate.toString());
}

const testFn = fn => async (req, res) => {
  if (req.method === "GET") {
    getAllSettings(req, res);
  }
  else if (req.method === "POST") {
    res.status(200).json({ status: 200 });
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: 404 });
  }
}

module.exports = testFn(handler);

async function getAllSettings(req, res, data) {
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: 'key3ITRiEPhABhtTC' }).base('appWvCVRmhAlOUo5T');
  base('SETTINGS').select({
    maxRecords: 100,
    view: "DEFAULTVIEW"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      recordsList.push(record);
    });
    fetchNextPage();
  }, function done(err) {
    const minimalRecords = recordsList.map(ele => {
      const record = {
        ...ele.fields,
        iconUrl: ele.fields.imageUrl[0].thumbnails.small.url,
        imageUrl: ele.fields.imageUrl[0].url
      };
      return record;
    });
    var settingsResponse = minimalRecords || [];
    var hashmap = {};
    settingsResponse.forEach(ele => {
      if (hashmap[ele.type]) {
        hashmap[ele.type].push(ele)
      }
      else {
        hashmap[ele.type] = [ele];
      }
    });
    uploadToFirebase(req, res, hashmap);
    if (err) { console.error(err); return; }
  });
}

async function uploadToFirebase(req, res, data) {
  const entry = {
    status: 200,
    syncDate: new Date().toISOString(),
    data: data
  };
  const collectionRef = await db.collection("sitesettings")
    .doc('settings').set(entry)
    .then(querySnapshot => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}