const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL
            , {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
        console.log("Db is Connected Successfully");
    } catch (error) {
        console.log(`Error during connection ${error.message}`);
    }
};

module.exports = dbConnect;
