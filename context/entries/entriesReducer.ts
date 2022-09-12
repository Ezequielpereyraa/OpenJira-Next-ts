import { ENTRIES_State } from "./ENTRIESProvider"
import { Entry } from "../../Interface";

type ENTRIESActionType = { type: 'ENTRIES - Add entry', payload: Entry }
  | { type: 'ENTRIES - Update entry', payload: Entry }

export const entriesReducer = (state: ENTRIES_State, action: ENTRIESActionType) => {

  switch (action.type) {

    case 'ENTRIES - Add entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case 'ENTRIES - Update entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (action.payload._id === entry._id) {
            entry.status = action.payload.status,
              entry._id = action.payload._id,
              entry.description = action.payload.description,
              entry.createdAt = action.payload.createdAt
          }
          return entry
        })
      }

    default:
      return state
  }
}

