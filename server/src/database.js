const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/databasetest';

(async () => {
  const db = await mongoose.connect(uri);
  console.log(`Connected to: ${db.connection.name}`);
})();
