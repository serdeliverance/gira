import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

export const EntryCard = () => {
  return (
    <Card
        sx={{ marginBottom: 1 }}
        // Drag events
    >   
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>Description</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
