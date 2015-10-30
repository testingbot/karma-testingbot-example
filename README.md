# karma-testingbot-example

> An example of using the [Karma](http://karma-runner.github.io/) test runner with [TestingBot](https://testingbot.com)' browser cloud to run JavaScript unit tests.

## Getting Started

To get started, clone the repo:

```bash
git clone https://github.com/testingbot/karma-testingbot-example.git && cd karma-testingbot-example
```

Then run the following command to install the Karma command line interface globally and this repo's local node dependencies:

```bash
npm install -g karma-cli && npm install 
```

*Note: make sure you have [node.js](http://nodejs.org/) installed before running the above command.* 

## Running Karma on your machine

You can now run Karma on your local machine, to do this, run the `karma start` command.

This example will run [jasmine](http://jasmine.github.io/2.0/introduction.html) tests in Chrome and Firefox on your machine. To add more browsers, check the `karma.conf.js`'s `browsers` array.

## Running Karma with the [karma-testingbot-launcher](https://github.com/karma-runner/karma-testingbot-launcher) plugin

To use Karma with TestingBot, make sure you have the 2 environment variables TESTINGBOT_KEY and TESTINGBOT_SECRET set. To obtain a key and secret, sign up for free [here](https://testingbot.com)).

Once this is set up, you can run these same tests on TestingBot with `karma start karma.conf-ci.js`. This will start a TestingBot tunnel automatically and run the tests on the TestingBot browser grid. Once the test completes, you'll see the test in the TestingBot member area.