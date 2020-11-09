const express = require('express');
const app = express();

app.get('/bye',(req,res) => {
  res.send('Good bye')
})


const port = 5555;
app.listen(port, () => {
  console.log(`sever starting on port ${port}`)
});
