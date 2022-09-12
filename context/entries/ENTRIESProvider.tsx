import { FC, useReducer } from 'react'
import { Entry } from '../../Interface'
import { v4 as uuidV4 } from 'uuid';
import { ENTRIESContext } from "./ENTRIESContext"
import { entriesReducer } from './entriesReducer'

export interface ENTRIES_State {
 entries: Entry[]
}

const ENTRIES_INITIAL_STATE: ENTRIES_State = {
 entries: [
  {
   _id: uuidV4(),
   description: 'First Task Pending',
   createdAt: Date.now(),
   status: 'pending'
  },
  {
   _id: uuidV4(),
   description: 'First Task InProgress',
   createdAt: Date.now(),
   status: 'inProgress'
  },
  {
   _id: uuidV4(),
   description: 'First Task Done',
   createdAt: Date.now(),
   status: 'done'
  }
 ]
}

interface Props {
 children: React.ReactNode
}

const ENTRIESProvider: FC<Props> = ({ children }) => {

 const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

 const addEntryTask = (description: string) => dispatch({
  type: 'ENTRIES - Add entry',
  payload: {
   _id: uuidV4(),
   description,
   createdAt: Date.now(),
   status: 'pending'
  }
 })



 const updateEntry = (entry: Entry) => dispatch({
  type: 'ENTRIES - Update entry',
  payload: entry
 })

 return <ENTRIESContext.Provider value={{
  ...state,
  addEntryTask,
  updateEntry
 }}>
  {children}
 </ENTRIESContext.Provider>
}

export default ENTRIESProvider;