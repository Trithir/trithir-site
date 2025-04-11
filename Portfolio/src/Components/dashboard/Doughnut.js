import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const classes = useStyles();
  const [principalBalance, setPrincipalBalance] = useState(10);
  const [interest, setInterest] = useState(7);
  const [principal, setPrincipal] = useState(4);
  const data = {
    labels: ['Principal Balance', 'Interest', 'Principal'],
    datasets: [
      {
        label: 'Monie$',
        data: [principalBalance, interest, principal],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false
  }
  return (
    <div  className={classes.doughnut}>
      <div>
        <label>Principal Balance:</label>
        <input
          type="number"
          value={principalBalance}
          onChange={(e) => setPrincipalBalance(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Interest:</label>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Principal:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseInt(e.target.value))}
        />
      </div>
      <Doughnut options={options} data={data} />
    </div>
  );
}

const useStyles = makeStyles({
  doughnut: {
    height: 400,
    background: 'transparent'
  }
})