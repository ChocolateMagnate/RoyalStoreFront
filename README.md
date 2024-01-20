# Royal Store
This is the main royal store application that features a comprehensive
e-commerce website built with React. It features user authentication, the
ability to add items to a cart, "liked" list, and it emulates orders by displaying
a list of items that have been purchased. It also features a search bar that allows
users to search for items by name, and a filter that allows users to filter items
by parameters, like price range, category, specs, brand name, etc.

To run this app, clone repository:
```commandline
git clone https://github.com/ChocolateMagnate/RoyalStoreFront/
```
Then, install dependencies:
```commandline
npm install
```
Then, run the app:
```commandline
npm start
```
The app will be running on localhost:3000. Notice that this app requires
the backend to be running as well. The backend can be found [here](https://github.com/ChocolateMagnate/RoyalStoreBack/).

In case if you need to run the app on a different port, you can do so by
passing the port number as an argument to the start script:
```commandline
npm start --port 3001
```
where 3001 is the port number.

If you need to configure the URL of the backend server, create a .env.local file
in the root directory of the project and add the following line:
```commandline
SERVER_ADDRESS=<your server address>
```
where <your server address> is the URL of the backend server. By default, it will run
try to call http://localhost:8080, which is the default port of the Spring server.