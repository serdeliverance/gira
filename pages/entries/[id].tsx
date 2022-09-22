import { capitalize, Button, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material"
import { Layout } from "../../components/layouts"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { Entry, EntryStatus } from "../../interfaces"
import DeleteIcon from '@mui/icons-material/Delete'
import { ChangeEvent, FC, useContext, useMemo, useState } from "react"
import { GetServerSideProps } from 'next'
import { db, dbEntries } from "../../database"
import { EntriesContext, EntriesProvider } from "../../context/entries"

const STATUS: EntryStatus[] = ['pending', 'in-progress', 'finished']

interface Props {
    entry: Entry
}

export const EntryPage: FC<Props> = ({entry}) => {    

    const { updateEntry } = useContext(EntriesContext)

    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState(false)

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus)
    }

    const onSave = () => {
        if (inputValue.trim().length === 0) return

        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        }

        updateEntry(updatedEntry)
    }

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
                            value={inputValue}
                            onChange={onInputValueChange}
                            helperText={ isNotValid && 'Ingress a value'}
                            onBlur={ () => setTouched(true) }
                            error={ isNotValid }
                        />
                        <FormControl>
                            <FormLabel>State:</FormLabel>
                            <RadioGroup 
                                row
                                value={status}
                                onChange={onStatusChange}
                            >
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
                            onClick={onSave}
                            disabled={ inputValue.length <= 0 }
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string } 

    const entry = await dbEntries.getEntryById(id)

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry        
        }
    }
}

export default EntryPage