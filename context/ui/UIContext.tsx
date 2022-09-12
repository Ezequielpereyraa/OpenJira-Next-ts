import { createContext, useContext } from "react";

interface ContextProps {
 sideMenuOpen: boolean,
 isAddingEntry: boolean
 openSideBar: () => void,
 closeSideBar: () => void,
 setIsAddingEntry: (show: boolean) => void
}

export const UIContext = createContext({} as ContextProps)

export const UIUseContext = () => useContext(UIContext);
