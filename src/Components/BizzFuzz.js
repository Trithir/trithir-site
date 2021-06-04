import React from 'react';
import TextField from '@material-ui/core/TextField';

function BizzFuzz() {
  const [answer, setAnswer] = React.useState('')
  const [result, setResult] = React.useState('')
  const stuff = [] 

  function onBizzFuzzChange(event) {
    setAnswer(event.target.value)
  }
  
  function handleKeyUp(event) {
    if (event.keyCode === 13 && answer) {
      for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          stuff.push('BizzFuzz')
        } else if (i % 3 === 0) {
          stuff.push('Bizz');
        } else if (i % 5 === 0) {
          stuff.push('Fuzz');
        } else {
          stuff.push(i);
        }
      }
      setResult(stuff)
      setAnswer('')
    }
  }  
  
  return (
    <React.Fragment>
      <TextField
        label="BizzFuzz"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        onChange={onBizzFuzzChange}
        onKeyUp={handleKeyUp}
      />
      {result}
    </React.Fragment>
    )
}

export default BizzFuzz;