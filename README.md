# Object Calculator

## About this project
As a person who plays tabletop Warhammer games, I need to make a list with units with each of them a point value. The Warhammer app provides a tool that to realise this, but I can only make one list on the free version. However, I want to make multiple lists and I don't need the extra features that the Warhammer app provides. I simply need something that can count the unit points in total from a list, edit the list by changing name of the list, adding a new item to an existing list, editing the (points) value, creating new or removing existing lists.

You might think to yourself: "But if you want to create a list, just use a text file and a calculator.". You are correct! HOWEVER... I am using this as an oppurtunity to learn React which is the main purpose of this project. And hopefully that I this app can be used in the future for personal use.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Built with

* Reactjs
* Material UI

## Tools

* Visual Studio Code

## Current features

### Show list with its items

Able to show a list with its items. It shows the name and value of each item and count the total of the list.

![Alt preview showing list](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZqbHB2cnI0ZTk0ajVlbnhub3dodTRxaWF1cDZzZWY2MzFjNHNzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DbfAB5J3WlvvgW6lJy/giphy.gif)


Currently you can only view the list. The next steps for this feature


## Todo list

### FRONTEND
TODO: show list items visually that they are connected/related to a colapsed list
TODO: creating a new list, the popup should look bigger

### BACKEND
TODO CREATE: new (empty) list
TODO UPDATE: list with updated with added items
TODO UPDATE: change an existing list name
TODO UPDATE: change an existing list item name
TODO DELETE: existing list
TODO DELETE: existing list item 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.