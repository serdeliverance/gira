import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
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

        <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight: 2 }}>
          <Typography variant='body2'>xxxxx</Typography>
        </CardActions>
    </Card>
  )
}
