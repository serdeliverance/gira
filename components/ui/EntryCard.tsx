import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC, DragEvent } from 'react'
import { Entry } from '../../interfaces'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id)
  }
  
  const onDragEnd = () => {
    // TODO
  }

  return (
    <Card
        sx={{ marginBottom: 1 }}
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
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
