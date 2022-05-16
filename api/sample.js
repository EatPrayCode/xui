
// let Parser = require('rss-parser');
// let parser = new Parser();
// import micro from "micro-cors";
// const cors = micro();
// const sayHi = (req, res) => {
//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }
//   const name = req.query.name || 'there';
//   async function fetchMovies() {
//     const response = await fetch('https://www.google.com/');
//     // waits until the request completes...
//     console.log(response);
//   }
//   fetchMovies();
//   res.end(`Hi ${name}!`);
// };
// module.exports = sayHi;

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

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

  async function fetchMovies() {
    const response = await fetch('https://www.google.com/');
    // waits until the request completes...
    console.log(response);
  }
  fetchMovies();

  res.end(`Hi ! ${name}!`);
}

module.exports = testFn(handler);
