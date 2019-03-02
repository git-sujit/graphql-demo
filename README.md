## STEPS TO MAKE MODULE WORKING
```java
 1. npm install --save express express-graphql graphql lodash
 2. npm install --save json-server (open source utility to server json as per db.json)
 3. npm install --save axios (to make outside API call of json-server)
 4. npm install --save nodemon (To bounce the server with latest code)
```
## To start json-server
```java
npm run json:server
```
## To start server with nodemon
```java
npm run dev
```
## To start server
```java
node server.js
```
##TEST DATA
```java
{
  company(id: "20"){
    id
    name
    description
    users{
      id
      firstName
    }
  }
}

query Connected_Graph {
  company(id: "20"){
    id
    name
    description
    users{
      id
      firstName
      company{
        id
        name
        users{
          id
          firstName
        }
      }
    }
  }
}

{
  MS: company(id: "20"){
    id
    name
    description
  }
  G: company(id: "21"){
    id
    name
    description
  }
}
```
## Query Fragments
```java
query fragment_demo {
  MS: company(id: "20"){
    ...companyDetails
  }
  G: company(id: "21"){
    ...companyDetails
  }
}

fragment companyDetails on Company{
  id
  name
  description
}
```
## mutation: add user
```java
mutation {
  addUser(firstName: "Larry", age: 55){
    id
    firstName
    age
  }
}
```
## mutation: delete user
```java
mutation {
  deleteUser(id: "c86qIBZ"){
    id
    firstName
  }
}
```
