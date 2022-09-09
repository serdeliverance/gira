import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC, DragEvent, useContext } from 'react'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('text', entry._id)

    startDragging()
  }
  
  const onDragEnd = () => {
    endDragging()
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
