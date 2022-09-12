import React, { DragEvent, FC } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { Entry } from '../../../Interface'
interface Props {
 entry: Entry
}
const EntryCard: FC<Props> = ({ entry }) => {

 const onDragStart = (event: DragEvent) => {
  event?.dataTransfer?.setData('text', entry._id)
 }

 return (
  <Card draggable sx={{ marginBottom: 1 }} onDragStart={onDragStart}>
   <CardActionArea>
    <CardContent>

     <Typography variant="h5" sx={{ whitespace: 'pre-line' }}>
      {entry.description}
     </Typography>
    </CardContent>
    <CardContent sx={{
     display: 'flex',
     justifyContent: 'flex-end',
     alignItems: 'center',
    }}>

     <Typography variant="body2" >
      {entry.createdAt}
     </Typography>
    </CardContent>

   </CardActionArea>
  </Card>
 )
}

export default EntryCard