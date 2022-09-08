import { Box, Button, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/Save'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [touched, setTouched] = useState(false)

    const onInputFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length === 0) return
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1}}>
        
        { isAdding ? (
            <>
                <TextField 
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 1}}
                    placeholder='New entry'
                    autoFocus
                    multiline
                    label='New entry'
                    helperText={inputValue.length <= 0 && touched && 'Add a value'}
                    error={ inputValue.length <= 0 && touched }
                    onChange={onInputFieldChange}
                    onBlur={() => setTouched(true)}
                />
                <Box display='flex' justifyContent='space-between'>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={ () => setIsAdding(false) }
                    >
                        Cancel
                    </Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        endIcon={<SaveOutlinedIcon /> }
                        onClick={onSave}
                    >
                        Save
                    </Button>
                </Box>
            </>   
        )
        :
        (
            <Button
            startIcon={ <AddCircleOutlineIcon /> }
            fullWidth
            variant='outlined'
            onClick={ () => setIsAdding(true) }
            >
                Add task
            </Button>
        )
    }
        
        
        
    </Box>
  )
}