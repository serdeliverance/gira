import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { EntryList } from '../components/ui'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home Open Gira'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendings'></CardHeader>
            <EntryList status='pending'/>
          </Card>
        </Grid>
        
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In Progress'></CardHeader>
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done'></CardHeader>
            <EntryList status='finished'/>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage
