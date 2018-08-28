const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Item = require('./routes/api/Item');

const app = express();

// body parser middleware
app.use(bodyParser.json(),cors());

// db config
const db = require('./config/keys').mongoURI;

// connect mongodb
mongoose.set('useCreateIndex', true);
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDb connected..'))
	.catch(err => console.log(err));

app.use('/api/items', Item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
