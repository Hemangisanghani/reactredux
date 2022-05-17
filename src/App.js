import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from './actions'

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)

  const dispatch=useDispatch();
  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>Increment/Decrement counter</h1>
      <h4>using Rect and redux</h4>
      <Box component="span"
        sx={{
          p: 2,
          border: '1px solid grey'
        }}
        style={{
          width: '300px',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: '50px'
        }}>
        <Box sx={{
          p: 1,
          border: '2px solid grey',
        }}
          style={{ backgroundColor: 'lightgrey' }}>
          <Button onClick={()=>dispatch(incNumber(5))}>+</Button>
        </Box>
        <Box sx={{
          p: 1,
          border: '2px solid grey',
        }}
          style={{ backgroundColor: 'lightgrey',marginLeft:'20px'}}>
          <input name='test' type='text' value={myState} style={{ backgroundColor: 'lightgrey', width:'40px' }}/>
        </Box>

        <Box sx={{
          p: 1,
          border: '2px solid grey',
        }}
          style={{ backgroundColor: 'lightgrey',marginLeft:'20px' }}>
          <Button onClick={()=>dispatch(decNumber())}>-</Button>
        </Box>
      </Box>
    </div>
  )
}

export default App