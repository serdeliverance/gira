import { EntriesState } from './EntriesProvider'

type EntriesAction =
    | { type: 'Entries - ActionName' }

export const entriesReducer = ( state: EntriesState, action: EntriesAction ): EntriesState => {
    switch (action.type) {
        // case '':
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
}