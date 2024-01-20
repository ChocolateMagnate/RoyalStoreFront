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
creating a new file called .env.local in the root directory of the project
and adding the following line:
```commandline
SERVER_ADDRESS=http://localhost:PORT_NUMBER
```
Where PORT_NUMBER is the port number you want to run the app on.
