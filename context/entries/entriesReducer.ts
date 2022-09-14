import { Entry } from '../../interfaces'
import { EntriesState } from './EntriesProvider'

type EntriesAction =
    | { type: 'Add-Entry', payload: Entry }
    | { type: 'Entry-Updated', payload: Entry }
    | { type: 'Refresh-Data', payload: Entry[]}

export const entriesReducer = ( state: EntriesState, action: EntriesAction ): EntriesState => {
    switch (action.type) {
        case 'Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload]
            }
        case 'Entry-Updated':
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if ( entry._id === action.payload._id ) {
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }
                    return entry
                })
            }
        case 'Refresh-Data':
            return {
                ...state,
                entries: [...action.payload ]
            }
        default:
            return state
    }
}