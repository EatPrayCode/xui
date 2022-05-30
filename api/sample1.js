
const afterLoad = require('after-load');
const Parser = require('rss-parser');
var request = require("request");


const testFn = fn => async (req, res) => {
  const name = req.query.name || 'there';

  // if (req.method === "GET") {
  //   const usersRef = db.collection('netainfoapproved');
  //   const allUsers = usersRef.get()
  //     .then(snapshot => {
  //       let arrayR = snapshot.docs.map(doc => {
  //         return doc.data();
  //       });
  //       res.json(arrayR);
  //     })
  //     .catch(err => {
  //       res.json({ err });
  //     });
  // }
  // else if (req.method === "POST") {
  //   // Take the user in the post
  //   const newuser = res.body;
  //   // connect to the DB
  //   // const db = await connectToDatabase();
  //   // Use our collection
  //   const collection = await db.collection("netainfoapproved");
  //   //insert the user into the database.
  //   const users = await collection.insertOne(newuser);
  //   // Respond with a JSON string of all users in the collection
  //   res.status(200).json({ users });
  // }
  // else if (req.method === "OPTIONS") {
  //   res.status(200).json([]);
  // }
  // else {
  //   res.status(404).json({ status: "Error route note found" });
  // }
  console.log("Hello");

  request({ uri: "https://www.google.com" },
    function (error, response, body) {
      res.status(200).json({
        data: body
      });
    });

  // res.end(`Hi ! ${name}!`);
}

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

module.exports = testFn(handler);



function postSample() {
  const collectionRef = await db.collection("site-refresh")
    .doc(mainEntryUrl)
    .collection('syncs').add(newEntry)
    .then(querySnapshot => {
      res.status(200).json([]);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}