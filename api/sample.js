let Parser = require('rss-parser');
let parser = new Parser();
import micro from "micro-cors";

const cors = micro();


const sayHi = (req, res) => {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  FetchRSS(req, res);
  // const name = req.query.name || 'there';
  // fetch('https://www.deccanchronicle.com/nation/current-affairs/150522/call-to-reduce-workload-and-stress-of-medicos.html')
  // .then(response => response.json())
  // .then(formatedResponse =>    res.end(formatedResponse))
};
module.exports = sayHi;

function FetchRSS(req, res){
  (async () => {
    let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');
  
    console.log(feed.title);
    res.end(feed);
  
    feed.items.forEach((item) => {
      console.log(item.title);
    });
  })();
  
}