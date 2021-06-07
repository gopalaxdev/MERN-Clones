
import express from 'express'; //Express is used for routing 
import cors from 'cors'; //used for cross site scripting 
import bodyParser from 'body-parser'; //used to work with request and response
import mongoose from 'mongoose'; // used to connect with mongo db database
import postRoutes from './routes/routes.js';

const app = express(); // creting an instance of the express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/posts', postRoutes);
//mongoose setup 

const CONNECTION_URL = 'mongodb+srv://gopala_123:gopala_123@cluster0.b6n0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 500;

//coonect is an async function
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on PORT: ${PORT}`)
        })
    })
    .catch((error) => { console.log(error.message) });

mongoose.set('useFindAndModify', false);