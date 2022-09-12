import { createContext, useContext } from "react";
import { Entry } from "../../Interface";

interface ContextProps {
 entries: Entry[],
 addEntryTask: (description: string) => void,
 updateEntry: (entry: Entry) => void
}

export const ENTRIESContext = createContext({} as ContextProps)

export const ENTRIESUseContext = () => useContext(ENTRIESContext)