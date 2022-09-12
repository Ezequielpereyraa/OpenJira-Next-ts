import { FC, useReducer } from 'react'
import { UIContext } from "./UIContext"
import { uiReducer } from './uiReducer'

export interface UIState {
 sideMenuOpen: boolean,
 isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
 sideMenuOpen: false,
 isAddingEntry: false
}

interface Props {
 children: React.ReactNode
}

const UIProvider: FC<Props> = ({ children }) => {

 const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

 const openSideBar = () => dispatch({ type: 'UI - Open Sidebar' })
 const closeSideBar = () => dispatch({ type: 'UI - Close Sidebar' })
 const setIsAddingEntry = (show: boolean) => dispatch({ type: 'UI - Set isAddingEntry', payload: show })

 return <UIContext.Provider value={{
  ...state,
  openSideBar,
  closeSideBar,
  setIsAddingEntry
 }}>
  {children}
 </UIContext.Provider>
}

export default UIProvider;