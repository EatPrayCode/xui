const axios = require('axios');
const {
    Telegram
} = require('telegraf');

const BOT_TOKEN = '1841730026:AAFb_36iJfPpiwf-DvPeHOBIDXa2GFNU6ro';
const GROUP_ID = '-1001203922057';
const tg = new Telegram(BOT_TOKEN);

const botFn = fn => async (req, res) => {
    let txt = '';
    if (req.method === "GET") {
        axios.get('https://api.chucknorris.io/jokes/random').then(response => {
            txt = response.data.value || 'ERROR_OCCURRED';
            sendTelegramMessage(txt, res);
        });
    }
    else if (req.method === "POST") {

    }
    else if (req.method === "OPTIONS") {
        res.status(200).json([]);
    }
    else {
        res.status(404).json({ status: "Error Occured." });
    }
}

function sendTelegramMessage(txt, reference) {
    const telegramMessageUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendmessage?chat_id=${GROUP_ID}&text=${txt}`;
    axios.get(telegramMessageUrl).then(response => {
        reference.status(200).json({
            status: 'Message Sent',
            data: txt
        });
    });
}

const handler = (data, context) => {
    const d = new Date();
    res.end(d.toString());
}

module.exports = botFn(handler);
