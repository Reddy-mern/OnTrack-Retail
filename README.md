onTrack Test
I have developed the below functionality:

On page load, I am loading first 20 books with the pagination enabled
Once we select the specific pageNumber, I am fetching the data again by passing pageNumber to the api
We also have pageNumber in the URL, So if we referesh it will still be with the same page results
Also implemented the search functionality
Modified the bootstrap original theme primary colour to #1D7874
NOTE: Created a master branch with just readme file and pushed the code to develop branch. Raised a PR and shared in the mail

Running application
Once you cloned the repository, Run the below command to install node modules
npm i
Once node modules are installed successfully then run the below command to launch the application in http://localhost:3000 url from project directory
npm start
Which will open the home page and it has above functionalities implemented

Production build
npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
