import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import SaveOutlinedIcon from '@mui/icons-material/Save'

export const NewEntry = () => {
  return (
    <>
        <TextField 
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1}}
            placeholder='New entry'
            autoFocus
            multiline
            label='New entry'
            helperText='Add a value'
        />
        <Box display='flex' justifyContent='space-between'>
            <Button
                variant='outlined'
                color='secondary'
            >
                Cancel
            </Button>
            <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlinedIcon /> }
            >
                Save
            </Button>
        </Box>
    </>
  )
}