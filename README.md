# Why?
### I wanted a way to be able to key on nested <code>div</code>'s within a <code>div</code>, which was not possible before.
### I made [this demo](https://react-scroll-trigger-container.litpoc.com) to show how you can track <code>div</code>'s within a scrollable <code>div</code>, while still keeping the original functionality in tact. 

### If you scroll to the *very* bottom of the demo page, you can test out "regular" functionality. 

# How?

```jsx
    /** 
     * Scrollable div container is needed
     * 
     * We need the 'ref' from this container div, since this component will be loaded before our 'ref',
     * is ready I find it easier to store the 'ref' in state. 
     */
    const [myRef, setMyRef] = useState();
    <div ref={r => setMyRef(r)} style={{ height: '300px', overflow: 'scroll'}}>
        {/** 
          * ScrollTrigger must use the 'ref' inside of the 'containerRef' prop!
          *  
          * Use an array of components. This allows you to trigger when a component
          * becomes visible within the scrollable div 
          */}
        {myObjects.map((obj, index) => {
            return (
                <ScrollTrigger                     
                    containerRef={myRef} 
                    onEnter={e => alert(`${obj.attribute} at index ${index} is now visible inside scrollable div!`)} 
                    onExit={e => alert(`${obj.attribute} at index ${index} is no longer visible inside scrollable div!`)} 
                    onProgress={e => alert(`${obj.attribute} Progress: ${e}`)} 
                    key={`${obj.attribute}_${index}`} 
                >
                    <SomeOtherComponent someProp={obj.attribute} />
                </ScrollTrigger>
            )
        })}
    </div>
```

##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
