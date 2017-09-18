# Altran BackEnd Assessment

## Instructions for running the project

The project has a virtual environment made with Docker. 
The environment can be run in two different ways, with Docker or install necessary packages in your development environment.

## Instructions for running the project with Docker

### Requirements 

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) Docker >= 17.05.0
- [Docker Compose](https://docs.docker.com/compose/) Docker-Compose >= 1.8.0

### Development

1. Go into the project folder and execute the `docker-compose up --build` command. This command will install all necessary packages into the container and leave the server ready to be used
2. Open the browser at http://localhost:3080/
3. To enter the container run `docker exec -it (container name) bash` command

## Instructions for running the project in the local enviroment

### Requirements 

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x, npm >= 3.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [Nodemon](https://nodemon.io/) (`npm install --global nodemon`)

### Development

1. Run `npm install` to install the server dependencies.
2. Run `npm run start_dev` to run the server in development mode.
3. Open the browser at http://localhost:3080/

## EndPoints

* Swagger: In the path http://localhost:3080/ has all the documentation of the APIs.

### /app/login - Method that allows the user to identify.

**Request**
``` 
{
    "email": "manningblankenship@quotezart.com"
}
```

**Response (code 200)**
```
{ 
    user_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4ZmQxNTliLTU3YzQtNGQzNi05YmQ3LWE1O
WNhMTMwNTdiYiIsIm5hbWUiOiJNYW5uaW5nIiwiZW1haWwiOiJtYW5uaW5nYmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsIn
JvbGUiOiJhZG1pbiIsImlhdCI6MTUwNTcwNDYwMSwiZXhwIjoxNTA1NzIyNjAxfQ.wp1KnUHriSeMN2Zj9CcpRpgLLawdCOdS
RMH9V74fqV8' 
}
```

**Response (code 404)**
```
{ 
    message: 'User not Found' 
}

```

### /app/getuser/{type}/{value} - Method that allows to obtain a user according to his id or name.


**Request (by id)**
``` 
/app/getuser/id/e8fd159b-57c4-4d36-9bd7-a59ca13057bb
``` 

**Request (by name)**
``` 
/app/getuser/name/Manning
``` 

**Response (code 200)**
``` 
{ 
    user:
        { 
            id: 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb',
            name: 'Manning',
            email: 'manningblankenship@quotezart.com',
            role: 'admin'
        }
 }
``` 

**Response (code 404)**
``` 
{ 
    message: 'User not Found 
}
```

3. /app/getpoliciesbyname/{name} - Method that allows to obtain a list of policies according to the name of a user.

**Request**
```
/app/getpoliciesbyname/Manning
```

**Response (code 200)**
```
{  
   policies:[  
      {  
         id:'64cceef9-3a01-49ae-a23b-3761b604800b',
         amountInsured:1825.89,
         email:'inesblankenship@quotezart.com',
         inceptionDate:'2016-06-01T03:33:32Z',
         installmentPayment:true,
         clientId:'e8fd159b-57c4-4d36-9bd7-a59ca13057bb'
      },
      {  
         id:'56b415d6-53ee-4481-994f-4bffa47b5239',
         amountInsured:2301.98,
         email:'inesblankenship@quotezart.com',
         inceptionDate:'2014-12-01T05:53:13Z',
         installmentPayment:false,
         clientId:'e8fd159b-57c4-4d36-9bd7-a59ca13057bb'
      }
   ]
}
```

**Response (code 404)**
User 
```
{ 
    message: 'User not Found' 
}
```

Policy
```
{ 
    message: 'Policies not Found' 
}
```

### /app/getuserbypolicy/{id} - Method that allows to obtain a user a user according to the id of a policy.

**Request**
```
/app/getpoliciesbyname/Manning
```

**Response (code 200)**
```
{ 
    user:
        { 
            id: 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb',
            name: 'Manning',
            email: 'manningblankenship@quotezart.com',
            role: 'admin'
        }
 }
```

**Response (code 404)**
User
``` 
{ 
    message: 'User not Found' 
}
```

Policy
```
{ 
    message: 'Policy not Found' 
}
```

## Testing

* The command `npm test` Run the test with Mocha and Chai.
* The `npm run test: watch` Command run the test with Mocha and Chai and will watch the file changes and run the test automatically.

## Frameworks & Librerias

### Framework
- "express": "^4.13.4"

### Task Manager
- "gulp": "^3.9.1"

### Promises
- "bluebird": "^3.5.0"

### Utils
- "body-parser": "^1.18.1"
- "lodash": "^4.17.4"
- "gulp-babel-minify": "^0.1.12"
- "request": "^2.81.0"

### Security
- "express-acl": "^1.0.3"
- "jsonwebtoken": "^8.0.1"

### Documentation
- "swagger-jsdoc": "^1.9.6"
- "swagger-ui-express": "^2.0.1"

### Transpilers
- "babel": "^6.23.0"
- "babel-cli": "^6.26.0"
- "babel-core": "^6.26.0"
- "babel-preset-es2015": "^6.24.1"
- "babel-preset-es2016": "^6.24.1"
- "babel-preset-es2017": "^6.24.1"
- "gulp-babel": "^6.1.2",

###Test
- "chai": "^4.1.2"
- "mocha": "^3.5.3"
- "supertest": "^3.0.0"

###Hints
- "gulp-eslint": "^4.0.0"
- "babel-eslint": "^8.0.0"
