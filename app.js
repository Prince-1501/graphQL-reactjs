const express  = require('express');
const bodyParser = require('body-parser');
const grahpqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

var app = express();
app.use(bodyParser.json());

app.use('/graphql' , grahpqlHttp({
  schema: buildSchema(`

        type RootQuery {
            events : [String!]!
        }

        type Rootmutation {
            createEvent(name : String) : String
        }


        schema {
            query : RootQuery
            mutation : Rootmutation
        }
  `),
  rootValue : {
        events : () =>{
          return ['Romantic Cooking' , 'Sailing' , 'All-night Coding']
        },
        createEvent : () =>{
          
        }
  }
}));

app.get('/',(req,res)=>{
  res.send('hello world');
});

app.listen(3000);
