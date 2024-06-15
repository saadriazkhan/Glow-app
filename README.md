# The application

The application is created with create-react app.
to start the app, go inside the base directory of this repo and do
`npm i`
followed by

`npm start`

This should open the application on browser on `localhost:3000`.

Below is the descrption given to me.
Followed by the answers required by you.

# Front-end Assessment

_This technical assignment aims to assess your ability to solve technical problems, design software, and write code._

## Overview

**Time expectations:** 90 - 120 minutes

**Language:** JavaScript / TypeScript (strong preference for TS)

**Frameworks/Libraries:** Any you prefer, however, use your best judgement — if they solve 80% of the complexity of the problem for you, it won’t help us in assessing your technical capability.

**Environment:** Your preference. No framework is specified, however, there is a strong preference for React + Typescript.

## Challenge

Design and build a simple front-end application that leads a user through a series of questions.

Questions should be defined as data (with the expectation that future versions will be provided by a backend service).

### Initial Questions

To begin with, consider this question list:

1. Does your business operate in CA? [Yes, No]
    - If “Yes”, go to 2.
    - If “No”, go to END.
2. How many employees do you have?
    - If more than 100, goto END.
    - Else, go to 3.
3. Do you serve food? [Yes, No]
    - If “Yes”, goto 4.
    - If “No”, goto 6.
4. Do you serve hot food? [Yes, No]
5. Are you open past midnight? [Yes, No]
6. Do you host live music? [Yes, No]

**End:** Display a “Thank You” message with a list of questions and answers.

### The application should be able to:

- Display a question and an input control for the user to provide the answer.
- Display a history of past questions and given answers.
- Allow the user to navigate back to the previous question and change their answer.

### Evaluation

Your app should be well-organized and written clearly. Tests are not required, but your code should be written in such a way that will easily facilitate testability in the future.

- Is the design easy to extend in the future?
- How would you test this app?


### Answers to required questions

- Yes I have tried to keep the question logic in a separate question component which can be extended easily having more child components for different type of questions. 
- Meanwhile, I have tried to think of a way where the app is more responding the type of configuration data being recieved. Alongside the state machine where the workflow should be dictated by the config data being recieved from api.
- Just used ant design for a butter quick ui. didnt include tailwind, but I usually think utility first when writing css, so just wrote a couple of required classes atm instead of bringing in another package. 
- I'll try to have unit tests around the pure functions and pure components in the app.
- Meanwhile the components or part of app which has states being maintained and involving other parts of app, i'll have integration tests written around them.
- Alongside maybe e2e test(s) as well going through the feature functionality having user interactions.
- Since I myself am color blind with some shades of green and yellow, being an engineer I have a strong bias to have accessibility tests within the app or atleast thinking UI while keeping accessibility into account.