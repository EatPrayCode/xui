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

const airtableConfig = [
  {
    baseName: 'Gujrat Netas',
    apiKey: 'key3ITRiEPhABhtTC',
    baseId: 'app0blxbqN1rHDD24',
    tableId: 'tbli25Rj23fMFdZ1v'
  }
];
const mainEntryUrl = 'MAY30';
const recordsList = [];

const testFn = fn => async (req, res) => {

  if (req.method === "GET") {
    getFromAirtable(req, res);
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


async function getFromAirtable(req, res) {
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: 'key3ITRiEPhABhtTC' }).base('appWvCVRmhAlOUo5T');

  base('NEWSFEED').select({
    maxRecords: 100,
    view: "NEWSFEEDVIEW"
  }).eachPage(function page(records, fetchNextPage) {

    records.forEach(function (record) {
      recordsList.push(record);
    });

    fetchNextPage();

  }, function done(err) {
    const parsedRecordsList = JSON.parse(JSON.stringify(recordsList));
    uploadToFirebase(req, res, parsedRecordsList);
    if (err) { console.error(err); return; }
  });
}

function testName(payload) {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()

  const nameDate = day + "_" + month + "_" + year;
  return nameDate;
}

async function uploadToFirebase(req, res, recordsList) {
  const entry = {
    status: 200,
    syncDate : new Date().toISOString(),
    data: recordsList
  };
  const key = testName({});
  const collectionRef = await db.collection("site-refresh")
    .doc(key)
    .collection('newsfeedsyncs').add(entry)
    .then(querySnapshot => {
      res.status(200).json([]);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}