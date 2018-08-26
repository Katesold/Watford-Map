# Watford Neighbouthood Map
---

## Description:
The Watford Neighbourhood Map project was prepared for the Udacity Front-End Nanodegree. The project consists of a single page app which uses Google maps and the Foursquare API to list cafes near Watford, United Kingdom. To create the app the following were used: ReactJS, javaScript, Google Map and Foursquare API, HTML, CSS and responsive design. The app was created using the create-react-app command.

In the app you can search for cafes near Watford on a map from Google, click on markers to receive the detailed address and name of a place from Foursquare.

## Instructions:

Clone the project or download the zip file.

In the root project directory use the command:
```
npm install
```
then run:
```
yarn start
```
The app will open in a browser, however, you can open it manually by typing [http://localhost:3000/](http://localhost:3000/) to the address bar of a browser.

## Dependencies used whilst creating the app
[create-react-app](https://github.com/facebook/create-react-app) 

[react-google-maps](https://github.com/tomchentw/react-google-maps)


## Load the App in Production Build:
The Service worker which enables offline views of the site will only work in production mode.

To start the app in production mode run the command:
```
yarn build
```
Then run the command:
```
yarn global add serve
```
Then run the command:
```
serve -s build
```
Then you will be able to open http://localhost:5000 within a browser to test the web app.

## Thank you!