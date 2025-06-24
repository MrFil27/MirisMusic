const { MongoClient, ServerApiVersion } = require('mongodb');
const colors = require('./UI/colors/colors');
const config = require("./config.js");
require('dotenv').config();

let client;

if(config.mongodbUri){
    const uri = config.mongodbUri;
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
}else{
    console.warn("\x1b[33m[ WARNING ]\x1b[0m MongoDB URI is not defined in the configuration.");
}

async function connectToDatabase(){
    if(!client){
        console.warn("\x1b[33m[ WARNING ]\x1b[0m Skipping MongoDB connection as URI is not provided.");
        return;
    }

    try{
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log('\n' + '─'.repeat(40));
        console.log(`${colors.magenta}${colors.bright}🕸️  DATABASE CONNECTION${colors.reset}`);
        console.log('─'.repeat(40));
        console.log('\x1b[36m[ DATABASE ]\x1b[0m', '\x1b[32mConnected to MongoDB ✅\x1b[0m');
    }catch(err){
        console.warn("\x1b[33m[ WARNING ]\x1b[0m Could not connect to MongoDB. Continuing without database functionality.");
        console.error(err.message);
        return;
    }
}

let db;
let playlistCollection;
let autoplayCollection;

async function initializeCollections(){
    if(client && client.isConnected()){
        db = client.db("PrimeMusicSSRR");
        playlistCollection = db.collection("SongPlayLists");
        autoplayCollection = db.collection("AutoplaySettings");
    }else{
        console.warn("\x1b[33m[ WARNING ]\x1b[0m MongoDB connection not established. Collections will be unavailable.");
    }
}

connectToDatabase().then(() => initializeCollections());

module.exports = {
    connectToDatabase,
    getPlaylistCollection: () => playlistCollection,
    getAutoplayCollection: () => autoplayCollection,
};
