const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devx-348322-default-rtdb.firebaseio.com/"
});


const db = admin.firestore();

// export default async (data, context) => {
//   if (data.method === "GET") {
//     const usersRef = db.collection('users');
//     const allUsers = usersRef.get()
//       .then(snapshot => {
//         let arrayR = snapshot.docs.map(doc => {
//           return doc.data();
//         });
//         context.json(arrayR);
//       })
//       .catch(err => {
//         context.json({ err });
//       });
//   }
//   else if (data.method === "POST") {
//     // Take the user in the post
//     const newuser = data.body;
//     // connect to the DB
//     // const db = await connectToDatabase();
//     // Use our collection
//     const collection = await db.collection("users");
//     //insert the user into the database.
//     const users = await collection.insertOne(newuser);
//     // Respond with a JSON string of all users in the collection
//     context.status(200).json({ users });
//   }
//   else {
//     context.status(404).json({ status: "Error route note found" });
//   }
// }

const validateFirebaseIdToken = async (req, res, next) => {

  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)) {
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    res.status(403).send('Unauthorized');
    return;
  }
};

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

const testFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const usersRef = db.collection('users');
    const allUsers = usersRef.get()
      .then(snapshot => {
        let arrayR = snapshot.docs.map(doc => {
          return doc.data();
        });
        res.json(arrayR);
      })
      .catch(err => {
        res.json({ err });
      });
  }
  else if (req.method === "POST") {
    // Take the user in the post
    const newuser = res.body;
    // connect to the DB
    // const db = await connectToDatabase();
    // Use our collection
    const collection = await db.collection("users");
    //insert the user into the database.
    const users = await collection.insertOne(newuser);
    // Respond with a JSON string of all users in the collection
    res.status(200).json({ users });
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: "Error route note found" });
  }
}

// module.exports = allowCors(handler);

// module.exports = validateFirebaseIdToken(handler);

module.exports = testFn(handler);

