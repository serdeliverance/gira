import { FC, ReactNode, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid'

export interface EntriesState {
    entries: Entry[]
}


const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: something 1',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'In-progress: something 2',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
        {
            _id: uuidv4(),
            description: 'Finished: something 3',
            status: 'pending',
            createdAt: Date.now() - 200000
        }
],
}

interface Props {
    children: ReactNode
}


export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , ENTRIES_INITIAL_STATE )

    const addNewEntry = ( description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: 'Add-Entry', payload: newEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
};