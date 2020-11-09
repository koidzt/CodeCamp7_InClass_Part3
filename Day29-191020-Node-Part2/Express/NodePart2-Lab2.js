const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const registers = JSON.parse(fs.readFileSync('./mocks/register.json'));

app.get('/register', (req, res) => {
  res.status(200).send(registers);
});

app.post('/register', (req, res) => {
  const newId = registers[registers.length - 1].id + 1;
  const newName = req.body.register.name;
  const newRegisters = { id: newId, name: newName };
  registers.push(newRegisters);
  fs.writeFileSync('./mocks/register.json', JSON.stringify(registers));
  res.status(201).send({
    register: newRegisters
  });
});

app.patch('/register/:id', (req, res) => {
  const idx = registers.findIndex(el => el.id === +req.params.id);
  console.log(idx);
  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  }
  // const newRegisters = registers.filter(el => el.id !== +req.params.id);
  // fs.writeFileSync('./mocks/register.json', JSON.stringify(newRegisters));
  res.send({ message: 'Patch Method' });
});

app.put('/register', (req, res) => {

});

app.delete('/register/:id', (req, res) => {
  const idx = registers.findIndex(el => el.id === +req.params.id);
  console.log(idx);
  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  }
  const newRegisters = registers.filter(el => el.id !== +req.params.id);
  fs.writeFileSync('./mocks/register.json', JSON.stringify(newRegisters));
  res.status(204).send();
});


const port = 3000;
app.listen(port, () => {
  console.log(`sever starting on port ${port}`)
});
