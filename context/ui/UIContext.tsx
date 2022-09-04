import { createContext } from "react";

interface ContextProps {
    sideMenuOption: boolean
}

export const UIContext = createContext({} as ContextProps)