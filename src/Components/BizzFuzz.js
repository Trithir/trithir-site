import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function BizzFuzz() {
  const [answer, setAnswer] = React.useState('')
  const [result, setResult] = React.useState('')
  const stuff = [] 

  // const CssTextField = withStyles({
  //   root: {
  //     '& label.Mui-focused': {
  //       color: '#E57C12',
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: 'yellow',
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //         borderColor: '#E57C12',
  //       },
  //       '&:hover fieldset': {
  //         borderColor: 'white',
  //       },
  //       '&.Mui-focused fieldset': {
  //         borderColor: '#E57C12',
  //       },
  //     },
  //   },
  // })(TextField);

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
      setResult(stuff.join(', '))
      setAnswer('')
    }
  }  
  
  return (
    <>
      <TextField
        label="BizzFuzz"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        onChange={onBizzFuzzChange}
        onKeyUp={handleKeyUp}
      />
      <Typography > 
        {result}
      </Typography>
    </>
    )
}

export default BizzFuzz;