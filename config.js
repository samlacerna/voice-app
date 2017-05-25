module.exports = {
    // HTTP port
    port: process.env.PORT || 5050,

    // MongoDB connection string - MONGO_URL is for local dev,
    // MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
    mongoUrl: 'confidential'
};
