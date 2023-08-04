import express from "express";
import {router} from './router.js';


const app = express();



app.use('/api', router)


const port = 3000

app.listen(port, () => console.log("Server is listening... i think"));