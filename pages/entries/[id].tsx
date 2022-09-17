import { capitalize, Button, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import { Layout } from "../../components/layouts"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { EntryStatus } from "../../interfaces"
import DeleteIcon from '@mui/icons-material/Delete'

const STATUS: EntryStatus[] = ['pending', 'in-progress', 'finished']

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
                        />
                        <FormControl>
                            <FormLabel>State:</FormLabel>
                            <RadioGroup row>
                                {
                                    STATUS.map(option => (
                                        <FormControlLabel 
                                            key={option}
                                            value={option}
                                            control={ <Radio />}
                                            label={capitalize(option)}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>

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

            <IconButton sx={{
                position:'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'text.secondary'
            }}>
                <DeleteIcon />
            </IconButton>
        </Layout>
    )
}

export default EntryPage