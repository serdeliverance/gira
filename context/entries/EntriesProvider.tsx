import { FC, ReactNode, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '../../apis';

export interface EntriesState {
    entries: Entry[]
}


const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
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

    const updateEntry = ( entry: Entry ) => dispatch({ type: 'Entry-Updated', payload: entry})

    const refreshEntries = async() => {
        const resp = await entriesApi.get<Entry[]>('/entries')
        console.log(resp)
    }

    useEffect(() => {
      refreshEntries()
    }, [])
    

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
};