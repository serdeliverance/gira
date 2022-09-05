import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean
    openSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps)