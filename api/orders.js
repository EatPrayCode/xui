const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const axios = require('axios');

// Telegram Stuff starts
const {
  Telegram
} = require('telegraf');
const BOT_TOKEN = '1841730026:AAFb_36iJfPpiwf-DvPeHOBIDXa2GFNU6ro';
const GROUP_ID = '-1001203922057';
const tg = new Telegram(BOT_TOKEN);

// Telegram Stuff ends

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-project-x-firebase-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const ordersFn = fn => async (req, res) => {
  if (req.method === "GET") {
    const { url } = req;
    const baseURLPath = '/api/orders?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const ordersRef = await db.collection('users')
        .doc(uid)
        .collection('orders')
        .get()
        .then(querySnapshot => {
          const arrayR = [];
          querySnapshot.forEach(doc => {
            let data = {
              ...doc.data(),
              id: doc.id
            };
            arrayR.push(data);
          });
          res.json(arrayR);
        })
        .catch(err => {
          res.status(500).json({ err });
        });
    }
  }
  else if (req.method === "POST") {
    const { url } = req;
    const baseURLPath = '/api/orders?UID=';
    const uid = url.slice(baseURLPath.length);
    if (!uid) {
      res.status(500).json({ status: "Error Occured." });
    }
    else {
      const newOrder = req.body;
      const collection = await db.collection("mobileOrders");

      //insert the order into the main orders collection.
      const mobileOrdersRef = await collection.add(newOrder)
        .then(querySnapshot => {
          // Notification
          sendNotificationToTelegramGroup(newOrder, res);
        })
        .catch(err => {
          res.status(500).json({ err });
        });

        //insert the order into the user orders collection.
        const usersRef = await db.collection('users')
        .doc(uid)
        .collection('orders').add(newOrder)
        .then(querySnapshot => {
          // Notification
          // sendNotificationToTelegramGroup(newOrder, res);
          res.status(200).json([]);
        })
        .catch(err => {
          res.status(500).json({ err });
        });
    }
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

function sendNotificationToTelegramGroup(newOrder, reference) {
  const totalPrice = newOrder.totalPrice || 'ERROR_OCCURED';
  const txt = `You have a new order of ${totalPrice}, Congrats !`;
  sendTelegramMessage(txt, reference);
}

function sendTelegramMessage(txt, reference) {
  const telegramMessageUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendmessage?chat_id=${GROUP_ID}&text=${txt}`;
  axios.get(telegramMessageUrl).then(response => {
    // reference.json([]);
  });
}

module.exports = ordersFn(handler);
