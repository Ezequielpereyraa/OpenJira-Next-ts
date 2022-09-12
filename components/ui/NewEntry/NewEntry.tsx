import React, { ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material'
import { ENTRIESUseContext } from '../../../context/entries'
import { UIUseContext } from '../../../context/ui'

const NewEntry = () => {
 const { addEntryTask } = ENTRIESUseContext();
 const { isAddingEntry, setIsAddingEntry } = UIUseContext()
 const [inputValue, setInputValue] = useState('')
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

 const onSave = () => {
  if (!inputValue.length) return
  addEntryTask(inputValue)
  setInputValue('')
 }

 return (
  <div>
   {isAddingEntry ? (
    <>
     <TextField sx={{
      margin: '20px 0',
      padding: '10px'
     }}
      label="New Task"
      autoFocus
      fullWidth
      placeholder='New Task'
      multiline
      value={inputValue}
      onChange={handleChange}
     />
     <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 10px 10px'
     }}>
      <Button
       variant="text"
       color="primary"
       onClick={() => setIsAddingEntry(false)}
      >
       Cancel
      </Button>
      <Button
       variant="outlined"
       color="secondary"
       onClick={onSave}
       endIcon={<SaveOutlined />}
      >
       Save
      </Button>
     </Box>
    </>) : (<Button
     startIcon={<AddCircleOutlineOutlined />}
     fullWidth
     variant="outlined"
     onClick={() => setIsAddingEntry(true)}
    >
     Add Task
    </Button>
   )
   }
  </div>
 )
}

export default NewEntry