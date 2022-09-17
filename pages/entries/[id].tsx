import { Button, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material"
import { Layout } from "../../components/layouts"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

export const EntryPage = () => {
    return (
        <Layout>
            <Grid container justifyContent='center' sx={{marginTop: 2}}>
                <Grid item xs={12} sm={8} md={6}>
                    <CardHeader title='Entry' subheader={`Created at...`}></CardHeader>

                    <CardContent>
                        <TextField
                            sx={{ marginTop: 2, marginBottom: 1}}
                            fullWidth
                            placeholder="New entry"
                            autoFocus
                            multiline
                            label="New entry"
                        >

                            {/* RADIO */}

                        </TextField>
                    </CardContent>
                    <CardActions>
                        <Button
                            startIcon={<SaveOutlinedIcon />}
                            variant="contained"
                            fullWidth
                        >
                            Save
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default EntryPage