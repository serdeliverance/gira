import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesContext } from '../../context/entries'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext)

  const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [ entries ])
  
  const onDropEntry = ( event: DragEvent) => {
    const id = event.dataTransfer.getData('text')
    console.log(id);
    
  }

  const allowDrop = ( event: DragEvent) => {
    event.preventDefault()
  }

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
    >
        <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
            <List sx={{ opacity: 1}}>
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={ entry._id } entry={ entry }/>
                  ))
                }
            </List>
        </Paper>
    </div>
  )
}
