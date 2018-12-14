const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(8000, () => {
  console.log('Listening at port: 8000...');
});
