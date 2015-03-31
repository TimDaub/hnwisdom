# Hacker News Wisdom

A tiny express.js/neDB application that handles displaying and saving Hacker News comment IDs. I run an instance on [heroku](https://hnwisdom.herokuapp.com). Go check it out!
All comments are displayed on `/`. 
If you host this on your own, `POST /submissions` and `DELETE /submissions` can be used to maintain the displayed comments.

## RESTful comment management
See the three functions in `routes/index.js`.

## RESTful comment fetching from HN's API
See the frontend-javascript file in `public/javascripts/main.js`.

## Contributions
I'd absolute love to see contributions from other people. This project is just a place to bookmark wise comments, still it could grow into so much more.
If you want to participate just submit pull-requests.
If you have questions, you can hit me up on Twitter ([@TimDaub](https://twitter.com/TimDaub))
