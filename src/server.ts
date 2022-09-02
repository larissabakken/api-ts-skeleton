import express,{Request, Response} from 'express';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes'

dotenv.config()
const app = express();

app.use(express.json())
app.use(routes)


mongoose.connect('mongodb+srv://ramoslarissa:'+process.env.DB_PASSWORD+'@cluster0.bm7dtfv.mongodb.net/test')
.then((data) => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err)
})

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});