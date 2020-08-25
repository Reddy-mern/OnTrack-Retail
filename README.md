## onTrack Test

I have developed the below functionality:

1. On page load, I am loading first 20 books with the pagination enabled
2. Once we select the specific pageNumber, I am fetching the data again by passing pageNumber to the api
3. We also have pageNumber in the URL, So if we referesh it will still be with the same page results
4. Also implemented the search functionality
5. Modified the bootstrap original theme primary colour to `#1D7874`

NOTE: Created a master branch with just readme file and pushed the code to develop branch. Raised a PR and shared in the mail

## Running application

1. Once you cloned the repository, Run the below command to install node modules

### `npm i`

2. Once node modules are installed successfully then run the below command to launch the application in http://localhost:3000 url from project directory

### `npm start`

Which will open the home page and it has above functionalities implemented

3. Running Unit Tests

### `npm test`

I have written unit tests using Jest and enzyme

4. Production build

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
