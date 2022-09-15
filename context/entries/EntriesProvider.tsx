import { FC, ReactNode, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
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

    const addNewEntry = async ( description: string) => {
        const {data} = await entriesApi.post<Entry>('/entries', { description })

        dispatch({ type: 'Add-Entry', payload: data })
    }

    const updateEntry = ( entry: Entry ) => dispatch({ type: 'Entry-Updated', payload: entry})

    const refreshEntries = async() => {
        const { data } = await entriesApi.get<Entry[]>('/entries')
        dispatch({ type: 'Refresh-Data', payload: data })
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