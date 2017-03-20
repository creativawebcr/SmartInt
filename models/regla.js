
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema


var productSchema = new mongoose.Schema({
    name: String,
     "condition": {
    "type": String,
    "inputs": [
      [
        {
          "type": "compare",
          "a": [
            [
              {
                "type": "fact",
                "field": String
              }
            ]
          ],
          "condition": String,
          "b": [
            [
              {
                "type": "constant",
                "type_value": String,
                "value": String
              }
            ]
          ]
        },
        {
          "type": String,
          "a": [
            [
              {
                "type": "fact",
                "field": String
              }
            ]
          ],
          "condition": String,
          "b": [
            [
              {
                "type": "fact",
                "field": String
              }
            ]
          ]
        }
      ]
    ]
  }
});

// Return model
module.exports = restful.model('Products', productSchema);

