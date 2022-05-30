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
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key3ITRiEPhABhtTC' }).base('appWvCVRmhAlOUo5T');

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
  base('Designers').select({
    // Selecting the first 3 records in All designers:
    maxRecords: 100,
    view: "All designers"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
      // console.log('Retrieved', record.get('Name'));
      recordsList.push(record);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    const parsedRecordsList = JSON.parse(JSON.stringify(recordsList));
    uploadToFirebase(req, res, parsedRecordsList);
    if (err) { console.error(err); return; }
  });
}

async function uploadToFirebase(req, res, recordsList) {
  const entry = {
    status: 200,
    data: recordsList
  };
  const collectionRef = await db.collection("site-refresh")
    .doc(mainEntryUrl)
    .collection('mysyncs').add(entry)
    .then(querySnapshot => {
      res.status(200).json(recordsList);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}