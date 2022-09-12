import { Card, CardHeader, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { NewEntry } from '../components/ui'
import { EntryList } from '../components/ui/EntryList'

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{
            height: 'calc(100vh - 120px)',
          }}>
            <CardHeader title='Pending' />
            <NewEntry />
            <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            height: 'calc(100vh - 120px)',
          }}>
            <CardHeader title='In Progress' />
            <EntryList status='inProgress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            height: 'calc(100vh - 120px)',
          }}>
            <CardHeader title='Done' />
            <EntryList status='done' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
