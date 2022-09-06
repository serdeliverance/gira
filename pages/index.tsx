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
            <CardContent>
              <EntryList></EntryList>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In Progress'></CardHeader>
          </Card>
        </Grid>
        
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done'></CardHeader>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage
