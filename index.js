'use strict';
var Alexa = require('./AlexaSkill');

var APP_ID = "amzn1.echo-sdk-ams.app.[95b4447a-2ce6-4f8c-a1cf-d08de2f65089]";
var SKILL_NAME = 'Fungi Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
  "Fungi are more closely related to animals than plants.",
  "The cell walls of most fungi are surrounded by chitin, which is the same material that forms the shells of lobsters, crabs, and shrimp.",
  "Fungi are saprotrophs that live by eating dead organic material, such as leaves, bark, meat, and used food.",
  "Fungi are found on every continent and in every climate.",
  "There are fungi that live in Antarctica, feeding on penguin guano and dead mosses.",
  "There are fungi that live in your home, eating the untreated wood, bits of hair and dead skin cells that every human sheds.",
  "More than eight hundred and fifty million dollars worth of mushrooms were sold in the US alone in twenty fourteen, for purposes ranging from food to medicine",
  "Mycology is the study of fungi and their genetics, biochemical properties, classification, and their danguers and uses to humans.",
  "The largest organism on Earth is a fungus in eastern Oregon. Spreading over twenty three hundred acres.",
  "Fungi harvest the energy in ionizing radiation with the help of melanin.",
  "A Fairy ring starts from a piece of mycelium or spore at a single point feeding in the thatch layer or on soil organic matter. The uniform outward growth of the fungus results in the development of rings.",
  "Some mushrooms called fox fire glow bright enough to read a book. Foxfire is the informal term for many different bioluminescent fungi. ",
  "the zombie ant fungi, known to target ants and release chemicals inside their heads that hijack its hosts central nervous system. The fungus then forces the ant to climb up vegetation to clamp down on to a leaf or twig prior to killing it. Afterwards the fungi grows a spore releasing stalk out of the back of the victims head to affect the ants below. "
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fungi fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
