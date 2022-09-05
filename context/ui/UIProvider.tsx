import { FC, ReactNode, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './uiReducer'

export interface UIState {
    sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false
}

interface Props {
    children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar'})
    }

    return (
        <UIContext.Provider value={{ 
            ...state,
            openSideMenu
        }}>
            { children }
        </UIContext.Provider>
    )
}