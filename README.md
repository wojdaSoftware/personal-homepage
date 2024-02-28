# Personal homepage

This page showcases all my recent projects and skills - ones that I've acquired, and ones which I'm exctited to learn.

Check the site [**here**](https://wojdaSoftware.github.io/personal-homepage/).

![personal-homepage-demo](https://github.com/wojdaSoftware/personal-homepage/assets/141030238/5f3b7346-a6c5-4b1e-80ec-487a6a6e35f3)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies

* HTML
* CSS
  * Normalize.css
  * Grid
  * Flex
  * Media queries
  * styled-components
* Javascript
  * ES6+ features
  * create-react-app
    * React Redux Toolkit
    * Redux-Saga
    * React Hooks
    * Custom Hooks

## Functionality

![personal-homepage-loading-demo](https://github.com/wojdaSoftware/personal-homepage/assets/141030238/f57d2533-3e33-4fd8-b61e-a95d68474f0d)

This is a single page application written in React.js. It fetches public repository info from my account using Github's API and displays a list of my projects with links to demos and code. This is done on a component level using a custom hook that makes use of React's useEffect and useState hooks and async/await syntax. All states of the response are handled with an according component (loading screen, error screen, project list). Project data is only used by one component, so I chose not to use a global state management library (Redux) in this case. 

I use Redux to manage the app's theme. All components have an alternate theme, so storing theme state globally was my choice, as Redux makes it easier for components to access this data. 

I also use Redux-Saga to store theme state in LocalStorage, so the app's theme stays the same on refreshes and repeated visits.

# React.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
