# Hacker News Wisdom

A tiny express.js/neDB application that handles displaying and saving Hacker News comment IDs. 
All comments are displayed on `/`. 
If you host this on your own, `POST /submissions` and `DELETE /submissions` can be used to maintain the displayed comments.

## RESTful comment management
See the three functions in `routes/index.js`.

## RESTful comment fetching from HN's API
See the frontend-javascript file in `public/javascripts/main.js`.

## Installation
Make sure you have node.js installed.
1. `git clone git@github.com:TimDaub/hackernewswisdom.git`
2. `npm install`
3. `mv config_example.json config.json`
4. `node app.js`

## Contributions
I'd absolute love to see contributions from other people. This project is just a place to bookmark wise comments, still it could grow into so much more.
If you want to participate just submit pull-requests.
If you have questions, you can hit me up on Twitter ([@TimDaub](https://twitter.com/TimDaub))
