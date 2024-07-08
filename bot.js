// bot.js

const { ActivityHandler } = require('botbuilder');

class MyBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            await context.sendActivity('Hello from MyBot!');
            await next();
        });
    }
}

module.exports.MyBot = MyBot;
