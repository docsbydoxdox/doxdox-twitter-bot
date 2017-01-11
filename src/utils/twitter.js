const twitterAPI = require('node-twitter-api');

const twitter = new twitterAPI({
    'consumerKey': process.env.TWITTER_CONSUMER_KEY,
    'consumerSecret': process.env.TWITTER_CONSUMER_SECRET
});

const tweet = status => {

    twitter.statuses(
        'update',
        {status},
        process.env.TWITTER_ACCESS_TOKEN,
        process.env.TWITTER_ACCESS_TOKEN_SECRET,
        (error, data, response) => {

            if (error) {

                console.log(error);

            }

            console.log(data);

        }

    );

};

module.exports = {
    tweet
};
