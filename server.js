import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import {students, auth} from "./routes"


const PORT = 3004;
const HOST = "localhost";
const app = express();

app.use('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(students);
app.use(auth);
app.get('*', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`)
});
