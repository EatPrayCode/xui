
const axios = require('axios')
const qs = require('qs');

const handler = (data, context) => {
  const dDate = new Date();
  res.end(dDate.toString());
}

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


const getAuth = async () => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    var client_id = '97ef0078c9e549e0a6d7e856f106b54e';
    var client_secret = '7a8b09a00c6b4f4bb375693989146d51';
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({ 'grant_type': 'client_credentials' });

    const response = await axios.post(token_url, data, {
      headers: {
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);   
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
}

async function getFromAirtable(req, res) {
  const access_token = await getAuth();
  console.log(access_token);
  res.status(200).json({ status: 200, token: access_token });
}
