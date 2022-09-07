import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../interfaces'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card
        sx={{ marginBottom: 1 }}
        // Drag events
    >   
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
            </CardContent>
        </CardActionArea>

        <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight: 2 }}>
          <Typography variant='body2'>xxxxx</Typography>
        </CardActions>
    </Card>
  )
}
