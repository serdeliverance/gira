import { FC, ReactNode, useReducer, useState } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './uiReducer'

export interface UIState {
    sideMenuOpen: boolean
    isAddingEntry: boolean
    isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

interface Props {
    children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
    
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    const setIsAddingEntry = (isAdding: boolean) => dispatch({ type: 'UI - Adding Entry', payload: isAdding })

    const startDragging = () => dispatch({ type: 'UI - Start Dragging'})

    const endDragging = () => dispatch({ type: 'UI - End Dragging' })

    return (
        <UIContext.Provider value={{ 
            ...state,
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
        }}>
            { children }
        </UIContext.Provider>
    )
}