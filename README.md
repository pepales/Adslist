# Nodepop

## Description
This is an api created with Nodejs, Express and MongoDB to provide service to an app called Nodepop.

## Installation

1. Install the dependencies
```sh
$ npm install
```
2. Reset the database
```sh
$ npm run installDB
```
3. Run the API
```sh
$ npm run start
```

## Access

The api is running in http://localhost:3000/apiv1/

| Method | URL | Description
| ------ | ------ | ------ |
| GET | /ads | Get all ads without filters
| GET | /ads?tags=mobile | Get ads by filter tags (without condition)
| GET | /ads?tags=lifestyle&sort=name | Get ads by filter tags by condition sort
| GET | /ads?sell=false | Get ads by filter sell |
| GET | /ads?price=10-50 | Get ads by filter price between 10 and 50
| GET | /ads?price=10- | Get ads by filter price over 10
| GET | /ads?price=-50 | Get ads by filter price under 50
| GET | /ads?name=c | Get ads by filter name |
| GET | /tags | Get all tags | 
| GET | /ads?skip=2&limit=2&sort=name | Get all ads paginated by condition sort
| POST | /ads | Create a new ad (Content-Type: application/x-www-form-urlencoded) | 

### POST
- Request Body

    | key | 
    | ----- | 
    | name | 
    | sell | 
    | picture | 
    | tags | 
    | tags | 
    | price | 