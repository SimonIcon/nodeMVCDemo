const mongoose = require('mongoose')

// creating a schema
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "please enter the string value"]
    },
},
    {
        timestamps: true,
    }
)
// creating model
const goalModel = mongoose.model('goal', goalSchema)
module.exports = goalModel;
