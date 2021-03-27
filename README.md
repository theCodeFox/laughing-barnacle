# **React Weather App**
This is a simple React weather app designed for a single day workshop. I originally created it for a workshop I ran for Code and Stuff in 2019. The focus of the workshop was to introduce the use of API's in React. Some JavaScript knowledge is required, however as I kept it simple, no prior React experience or API experience was necessary.

See below for instructions on how to pull and play with this code. I have put in plenty of comments to help walk you through everything. I have also added a section in this README with some advice on difficulties I came across when running this workshop and the general run through I used.

`Good luck!`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***

## **Getting Started**
1. Fork from **`GitHub`**: https://github.com/theCodeFox/laughing-barnacle
2. `Clone into the directory that you will be working from`
3. Install all dependancies and dev-dependancies *(see Installing below)*
4. **`npm start`** - runs the app in the development mode *(Open [http://localhost:3000](http://localhost:3000) to view it in the browser, it will reload if you make edits)*
5. Play around and most importantly... **_have fun!_**

***NOTE**: though I have left `npm eject` in, **DO NOT USE** as is a one-way operation and will remove the single build dependency from this project*

### **Installing**

Once you have cloned the repo then cd into the directory. These instructions are based on the assumption you will already have node and npm installed.

From here:

**Install dependancies**

```
npm install
```

This should install everything you need from the package JSON. If in doubt just copy the example package.json below into your one and then run the code above in your terminal.

**Add browserslist to Package JSON**

```JSON
  {
      "browserslist": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ]
  }
```

*Your Package JSON should look something like this:*

```JSON
{
  "name": "laughing-barnacle",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

**Don't forget a gitignore file!**

```ruby
# dependancies
node_modules

# misc
.DS_Store
```

***

## **Workshop Rundown**

I would recommend running this with new deveolpers that have some experience with `JavaScript`, `HTML` and `CSS`. No React knowledge is necessary as app is kept as simple as possible.

Timing wise, I did mine in 3 hours, but would recommend longer so it can be broken up with small breaks. If you decide to run this over a day then it would give you options to expand the code further and give you time to allow the attendees some free play on styling and extra tasks.

Timeline:

1. Housekeeping.
2. Brief intro's.
3. Installs. For this, make sure you are aware of how the installs will work with Windows, Mac & Linux.
4. Chat about GitHub and the benefits of version control. If this is the first time for your attendees using Git, then you will have to run through install of this too.
5. Set-up a basic repo with them, so they can play with their own apps and get used to using GitHub.
6. Quick explaination into React, including usage, language options (JavaScript, JSX, TypeScript). Remember your audience and cater it to their level of current experience. Don't scare them away!
7. Start build using the create react app bootstrap.
8. Let them code along, answering any short questions as you go.
9. Explain what an API is and their usage. `!Stress importance of hiding API key and NOT pushing to GitHub!`
10. Continue code along. Let attendees expand on their code if they finish quickly and help those that are struggling so they have enough to continue on their own after the workshop has finished.
11. Break 20-30 mins before end so can have a Q&A session. This is the perfect opportunity to answer any longer questions they may have had during the workshop that you didn't have time to answer before.