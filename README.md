https://codepen.io/cesardanielhg/pen/gOOyzdq
https://codepen.io/imprakash/pen/epZvbQ
https://codepen.io/emoyal4/pen/LYjxWpb
https://codepen.io/iremlopsum/pen/KKogBK
https://stackoverflow.com/questions/47145113/angular-material-2-how-to-lock-mat-toolbar-and-mat-tabs-to-the-top

https://stackoverflow.com/questions/45794634/loading-google-analytics-after-page-load-by-appending-script-in-head-doesnt-alw
https://codepen.io/denmch/pen/KpjYVM

https://stackblitz.com/edit/e-commerce-ictch?file=app%2Fheader%2Fheader.component.html




CODE
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3ITRiEPhABhtTC'}).base('app0blxbqN1rHDD24');

base('Furniture').select({
    // Selecting the first 3 records in All netas:
    maxRecords: 3,
    view: "All netas"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Neta Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
OUTPUT
Retrieved Madrid chair
Retrieved Samari bookshelf
FETCH FIRST PAGE
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Furniture').select({
    view: 'All netas'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Neta Name'));
    });
});
