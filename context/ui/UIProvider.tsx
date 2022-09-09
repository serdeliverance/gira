import { FC, ReactNode, useReducer, useState } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './uiReducer'

export interface UIState {
    sideMenuOpen: boolean
    isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false
}

interface Props {
    children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
    
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    const setIsAddingEntry = (isAdding: boolean) => dispatch({ type: 'UI - Adding Entry', payload: isAdding })

    return (
        <UIContext.Provider value={{ 
            ...state,
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry
        }}>
            { children }
        </UIContext.Provider>
    )
}