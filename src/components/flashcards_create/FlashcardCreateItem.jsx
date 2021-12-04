import React from 'react';
import { WORD, TRANSLATE } from '../../constants/FlashcardInputTypes'
import { Grid, TextField } from "@mui/material"

const FlashcardCreateItem = ({ id, onChange, values }) => {

    const handleChange = (event, type) => {
        const text = event.target.value;
        onChange(id, text, type)
    }

    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={5}>
                <TextField fullWidth id="filled-basic" label="Wpisz słówko (np. pływać)" variant="filled" onChange={(event) => handleChange(event, WORD)} />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={5}>
                <TextField fullWidth id="filled-basic" label="Wpisz tłumaczenie (np. swimming)" variant="filled" onChange={(event) => handleChange(event, TRANSLATE)} />
            </Grid>
        </>
    )
}

export default FlashcardCreateItem;