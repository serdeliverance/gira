import { createContext } from 'react';


interface ContextProps {
    entries: []; // TODO define datatype
}


export const EntriesContext = createContext({} as ContextProps );