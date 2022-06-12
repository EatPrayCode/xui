const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: '1ewWjG1fLVZIjVkAquKHuRiae',
  appSecret: '8g3ASsQ4rw5yWix50CTYxXsYErO3GoSp1Cj4MHH85SWqI5tghy',
  accessToken: '1524896935651721216-ON5BAUTQguqXW8vRNIczbEk7MFtgGq',
  accessSecret: 'LLEZfnwa54yIYWWgqNVtL1LKvvI7deOOFf9mX5YRpEYOf',
});



const defaultFn = fn => async (req, res) => {

  if (req.method === "GET") {

    // const result = await client.v2.get('tweets/search/recent', { query: 'india', max_results: 100 });
    // console.log(result.data); // TweetV2[]

    // const { data: createdTweet } = await client.v2.tweet('twitter-api-v2 is awesome!', {
    //   poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] },
    // });
    // console.log('Tweet', createdTweet.id, ':', createdTweet.text);
    // const homeTimeline = await client.v2.homeTimeline({ exclude: 'replies' });
    // console.log('Tweet', homeTimeline.id, ':', createdTweet.text);
    // client.v2.singleTweet('1455477974489251841').then((val) => {
    //   console.log(val)
    //   res.status(200).json({ status: 200, data: val });
    // }).catch((err) => {
    //   console.log(err)
    // });

    // const jsTweets = await client.v2.search('JavaScript', { 'media.fields': 'url' });

    const users = await client.v2.usersByUsernames(['jack', 'plhery', 'alkihis']);

    
    console.log('Tweet', users);
    

    // // Consume every possible tweet of jsTweets (until rate limit is hit)
    // for await (const tweet of jsTweets) {
    //   console.log(tweet);
    // }


    // client.v2.singleTweet('1455477974489251841', {
    //   'tweet.fields': [
    //     'organic_metrics',
    //   ],
    // }).then((val) => {
    //   // console.log(val);
    //   res.status(200).json({ status: 200, data: val });

    // }).catch((err) => {
    //   console.log(err);
    // });
    // res.status(200).json({ status: 200, data: [] });
  }
  else if (req.method === "POST") {
    res.status(200).json({ status: 200 });
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: 404 });
  }
}

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

module.exports = defaultFn(handler);
