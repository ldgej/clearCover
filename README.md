# Clearcover's Front-end App Challenge

Hello front-end developer! Welcome. I'm Sunny; you've either met me during our interview, or you will soon, either way here's my Apple emoji!

![Alt text](/memoji.png?raw=true 'Me')

## Your mission

Your mission, should you choose to accept it, is to carve out 2-4 hours and create a single page app using the API defined below.

> **This is important**: We really appreciate you taking up to 4 hours on this project. If you can finish faster -- great! If not, limit yourself and don't spend more than 4 hours max.

## Your tasks

- Build an app that provides the ability for a user to select the vehicle that they own or lease. We've provided a set of endpoints that will provide you with necessary data to accomplish the above. [API](#Clearcover-Vehicle-API)
- Once the user has found the car they are looking for, come up with a way to signal to the user that their vehicle was found! This doesn't have to be anything grand; maybe some text below with the `vehicle_service_id` (which gets returned once vehicle is found based on a given criteria).
- Assume this code will be in production, so try to keep it simple and bug-free as much as possible.
- Be creative with this. We want to see a functional site that uses the api. When in doubt, make an executive decision.
  _Functionality is more important than the look and feel. If you finish early, feel free to polish it up._

## Some Tips & Tricks

- We've provided quite a bit of tooling for you. The app is built on [Create React App](https://create-react-app.dev/).
  - You will need `Node` & `npm` to be able to run the app. [Check out this link if you need help installing these](https://treehouse.github.io/installation-guides/mac/node-mac.html).
  - Fork this repository into your own github profile, and pull down the repository locally.
  - Once in the directory locally, run `npm install && npm start`. - This will open up a browser at `http://localhost:3000`; switch that to `http://0.0.0.0:3000` to make sure the API endpoints work properly. Unfortunately due to CORS, this is a limitation but the `0.0.0.0` is whitelisted. This will be fixed in future versions.
- The API lives under `src/Services/vehicle`. I have added a commented out file path for the vehicle service in `src/App.js`.
- If you have questions about how to write CSS in this project, please check out the create-react-app documentation linked above.
- The goal is for you to spend most of your allotted time on writing React JS/TS & CSS. If you're finding yourself working on understanding the tooling, please pause and send your questions to sunny@clearcover.com.

## Order of importance

When I'm looking at your code to assess, here's the order of importance for what I care about:

- **Functionality**: Is the user able to find the vehicle they own/lease?
- **Code quality**: Is the code clean and easy to understand? If you come back 6 months from now and look at this code, will you easily understand what's going on?
- **Code Organization**: If you're preparing for future features, is the code setup so I can easily build on top of existing code? Is the code compartmentalized logically and for good reason?
- **Look and Feel**: Self-explanatory here, but focus on this only time-permitting :).
- **UX**: Does the way the user go about finding their vehicle make sense? Would you ship this feature and allow 1000s of users each day to utilize this UX?

### Extra Credit:

- This app is built to support [Typescript](https://www.typescriptlang.org/). If you're familiar and comfortable with TS, rename your files with the `ts` & `tsx` (for React) and showcase your skills. **NOTE: Please only do this if you're very familiar with TS. It's ok to not know, but its not ok to spend most of your time learning TS :D.**
- Write tests! Time-permitting, write enough tests where you feel confident in the code and its functionality. Out of the box, the app supports [React-testing-library](https://github.com/testing-library/react-testing-library), but use whatever framework you're most comfortable with.
- PR Hygiene: Don't sweat this too much, but if you want to showcase your awesome PR organization, feel free to!

## Clearcover Vehicle API

All API requests are made to:

```
https://api.clearcoverpartner.com/api/v2
```

### GET Years

List of all supported vehicle years:

```
GET /vehicles/years
```

Sample Response:

```
[
  {
    label: '2000',
    value: '2000',
  },
  {
    label: '2001',
    value: '2001',
  }
]
```

### GET Makes By Year

List of all makes for a given year:

```
GET /vehicles/makes?year=2018
```

Sample Response:

```
[
  {
      "label": "Acura",
      "value": "Acura"
  },
  {
      "label": "Alfa Romeo",
      "value": "Alfa Romeo"
  }
]
```

### GET Models By Year and Make

List of all models for a given year and make:

```
GET /vehicles/models?year=2018&make=Acura
```

Sample Response:

```
[
  {
      "label": "ILX",
      "value": "ILX"
  },
  {
      "label": "MDX",
      "value": "MDX"
  }
]
```

### GET Body Styles By Year, make and model

List of all body styles for a given year, make & model:

```
GET /vehicles/body_styles?year=2018&make=Acura&model=ILX
```

Sample Response:

```
[
  {
    "label": "4-Door Sedan",
    "value": "SEDAN 4D",
  }
]
```

### GET Vehicle By Params

List of all body styles for a given year, make & model:

```
GET /vehicles?year=2018&make=Acura&model=ILX&body_style=SEDAN 4D
```

Sample Response:

```
{
    "id": "foo",
    "year": 2018,
    "make": "Acura",
    "model": "ILX",
    "body_style": "SEDAN 4D",
    "partial_vin": "JH4DE2F8&J",
    "vehicle_services_id": "v1_WzIwMTgsIkFjdXJhIiwiSUxYIiwiU0VEQU4gNEQiLCJKSDRERTJGOFx1MDAyNkoiXQ=="
}
```

## FIN

Have fun with this! Once finished, please send your github repo link to mac@clearcover.com
