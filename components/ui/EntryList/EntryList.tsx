import { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import { Entry, entryStatus } from '../../../Interface'
import { EntryCard } from '../EntryCard'
import { ENTRIESContext } from '../../../context/entries'

interface Props {
 status: entryStatus
}
const EntryList: FC<Props> = ({ status }) => {
 const { entries, updateEntry } = useContext(ENTRIESContext)

 const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status])

 const onDragOver = (event: DragEvent) => {
  event.preventDefault();

 }

 const onDrop = (event: DragEvent) => {
  const id = event.dataTransfer.getData('text');
  const findEntry: Entry = entries.find(entry => entry._id === id)!;
  const modifyEntry = {
   ...findEntry,
   status
  }
  if (Object.keys(modifyEntry).length) updateEntry(modifyEntry)
 }

 return (
  <div
   onDragOver={onDragOver}
   onDrop={onDrop}
  >
   <Paper sx={{
    height: 'calc(100vh - 250px)',
    backgroundColor: 'transparent',
    padding: '20px 15px'
   }}>
    <List sx={{ opacity: 1 }}>
     {
      !!entriesByStatus?.length && entriesByStatus.map(entry => (
       <EntryCard key={entry._id} entry={entry} />
      ))
     }
    </List>
   </Paper>
  </div>
 )
}

export default EntryList