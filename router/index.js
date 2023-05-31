const twitter = require("../modules/twitterApis");
const check = require("../modules/check");
const food = require("../modules/foodApis");

module.exports = (app) => {
    app.get('/populardish1', twitter.populardish1);
    app.get('/populardish2', twitter.populardish2);
    app.get('/populardish3', twitter.populardish3);
    app.get('/breakfastList', twitter.breakfastList);
     app.get('/populardishtest', food.populardishtest);
     app.get('/rephrase', food.rephrase);
    // app.get('/populardish2', food.populardish2);
   // app.get('/populardish4', food.populardish3);
    // app.get('/breakfastList', food.breakfastList);
    // app.get('/test', food.test);
    app.get('/check', check.check);
}