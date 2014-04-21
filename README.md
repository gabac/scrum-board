scrum-board
===========

# Setup
All the dependencies are maneged through npm and bower. To download the necessary dependencies execute following commands

```
npm install
```

```
bower install
```

# Development
To use the app localy please start the app through following command

```
node server.js
```

# Tests
## Server Tests

Server tests have been written in jasmin-node. Run it through following command

```
node-jasmine ./tests/server
```

## Backbone Tests
For the backbone tests the html reporter feature of jasmine has been used. Please open following html to run the tests

```
/tests/backbone/index.html
```

# Deployment
The app has been deployed to [Heroku](http://sheltered-savannah-1827.herokuapp.com/index.html)