const admin = require("firebase-admin");
const functions = require('firebase-functions');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrshop-overthemoon-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

const initDataFn = fn => async (req, res) => {

  if (req.method === "GET") {
    testInit(res);
  }
  else if (req.method === "POST") {
    res.status(200).json([]);
  }
  else if (req.method === "PUT") {
    res.status(200).json([]);
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

module.exports = initDataFn(handler);

function testInit(res) {

  setTimeout(function () {
    console.log('Setting Up Categories');
    // createCategories();
  }, 500);

  setTimeout(function () {
    console.log('Setting Up Countries');
    // createCountries();
  }, 1000);

  setTimeout(function () {
    // createCountryPincodes();
    console.log('Setting Up Pincodes');
  }, 3000);

  setTimeout(function () {
    addPacksUtil();
    console.log('Adding Pincode Packs');
  }, 3000);

  setTimeout(function () {
    console.log('Done');
    res.status(200).json([]);
  }, 6000);
}

function createCountryPincodes() {
  const docRef1 = db.collection('countries')
    .get()
    .then(querySnapshot => {
      const arrayR = [];
      querySnapshot.forEach(doc => {
        const data = {
          ...doc.data(),
          id: doc.id
        };
        arrayR.push(data);
      });
      arrayR.forEach(ele => {
        createMasterPincodesUtil(ele.id, ele.availablePinCodes);
      });
    });
}

function createMasterPincodesUtil(countryId, availablePinCodes) {
  const batch = db.batch();
  availablePinCodes.forEach((pincode) => {
    const docRef1 = db.collection('countries').doc(countryId).collection('pincodes').doc();
    batch.set(docRef1, pincode);
  });
  batch.commit();
  createCountryPinPacks(countryId);
}

function addPacksUtil(countryId) {
  const docRef1 = db.collection('countries')
    .get()
    .then(querySnapshot => {
      const arrayR = [];
      querySnapshot.forEach(doc => {
        const data = {
          ...doc.data(),
          id: doc.id
        };
        arrayR.push(data);
      });
      arrayR.forEach(ele => {
        createCountryPinPacks(ele.id);
      });
    });

}

function createCountryPinPacks(countryId) {
  const pack = {
    name: new Date().toDateString(),
    value: new Date().toDateString()
  };
  db.collection('maincatalog')
    .add(pack)
    .then(docRef => {
      let countryPack = {
        ...pack,
        mainPacksId: docRef.id
      };
      console.log('Added packs to Main Catalog');
      db.collection('countries')
        .doc(countryId)
        .collection('countrycatalog').add(countryPack).then(s => {

          console.log('Added packs to Country Catalog');

          db.collection('countries')
            .doc(countryId)
            .collection('pincodes')
            .get()
            .then(querySnapshot => {
              const arrayR = [];
              querySnapshot.forEach(doc => {
                const data = {
                  ...doc.data(),
                  id: doc.id
                };
                arrayR.push(data);
              });
              arrayR.forEach(ele => {
                setUpPacksForCountries(countryPack, countryId, ele.id)
              })
            });
        });
    });
}

function setUpPacksForCountries(pack, countryId, pincodeId) {
  db.collection('countries')
    .doc(countryId)
    .collection('pincodes')
    .doc(pincodeId)
    .collection('pincatalog').add(pack).then(s => {
      console.log('Added packs to PinCode Catalog');
    });
}

function createCountries() {
  console.log('Creating Countries');
  const countries = [
    {
      name: 'India',
      value: 'IND',
      availablePinCodes: [
        {
          name: 'Bellary',
          value: '583101'
        }, {
          name: 'Bangalore',
          value: '530068'
        }, {
          name: 'Hyderabad',
          value: '500001'
        }
      ]
    }, {
      name: 'USA',
      value: 'USA',
      availablePinCodes: [
        {
          name: 'Los Angeles',
          value: '90001'
        }, {
          name: 'Utah',
          value: '84101'
        },
      ]
    },
    {
      name: 'DEFAULT',
      value: 'GLOBAL',
      availablePinCodes: []
    }
  ];
  const batch = db.batch();
  countries.forEach((country) => {
    const docRef1 = db.collection('countries').doc();
    batch.set(docRef1, country);
  });
  batch.commit();
}

function createCategories() {
  const categories = [
    {
      name: 'Health',
      value: 'Health'
    }, {
      name: 'Men',
      value: 'Men'
    }, {
      name: 'Women',
      value: 'Women'
    }, {
      name: 'Peace',
      value: 'Peace'
    }, {
      name: 'Puja',
      value: 'Puja'
    }, {
      name: 'Others',
      value: 'Others'
    }, {
      name: 'All',
      value: 'All'
    }
  ];
  const batch = db.batch()
  categories.forEach((category) => {
    const docRef1 = db.collection('categories').doc();
    batch.set(docRef1, category);
  });
  batch.commit();
}
