import { List, Paper } from '@mui/material'
import React from 'react'

export const EntryList = () => {
  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent' }}>
            <List sx={{ opacity: 1}}>
                <h1>item</h1>
                <h1>item</h1>
                <h1>item</h1>
            </List>
        </Paper>
    </div>
  )
}
