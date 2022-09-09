import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean
    isAddingEntry: boolean
    isDragging: boolean

    // methods
    openSideMenu: () => void
    closeSideMenu: () => void

    setIsAddingEntry: (setIsAdding: boolean) => void

    startDragging: () => void
    endDragging: () => void
}

export const UIContext = createContext({} as ContextProps)