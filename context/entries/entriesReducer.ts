import { Entry } from '../../interfaces'
import { EntriesState } from './EntriesProvider'

type EntriesAction =
    | { type: 'Add-Entry', payload: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesAction ): EntriesState => {
    switch (action.type) {
        case 'Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload]
            }
        default:
            return state
    }
}