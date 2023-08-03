import express from "express";
// import cors from 'cors';
// import morgan from 'morgan';
// import router from '/router.js'

const app = express();

app.get('/api/users', (req, res) => {
  res.send([{
    id: 1,
    name: 'John Doe',
    age: 32
  }, {
    id: 2,
    name: 'Jane Doe',
    age: 43
  }])
})
// app.use(morgan('tiny'));
// app.use(cors());
// app.use()
const port = 3000
app.listen(port, () => console.log("Server is listening... i think"));