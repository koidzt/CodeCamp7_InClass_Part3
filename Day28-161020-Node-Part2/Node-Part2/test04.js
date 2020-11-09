const fs = require('fs');

const content = 'Some content!';

fs.writeFile('output.txt', content, err => {
  if (err){
    console.log(err);
    return
  };
  console.log(`content write on >>>> output.txt`)
})