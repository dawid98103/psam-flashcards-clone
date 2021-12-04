import React, { useState, useContext } from "react";
import { Container, Divider, Grid, Typography, TextField, Button } from "@mui/material"
import { WORD, TRANSLATE } from '../constants/FlashcardInputTypes'
import { styled } from "@mui/system";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store/GlobalState";
import FlashcardCreateItem from "../components/flashcards_create/FlashcardCreateItem";

const ContentWrapper = styled('div')({
    paddingTop: 35,
    paddingBottom: 35
})

const FlashcardsCreate = () => {
    const [flashcardsValues, setFlashcardsValues] = useState({})
    const [lessonName, setLessonName] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    const [inputsQuantity, setInputsQuantity] = useState(5);
    const navigate = useNavigate();
    const { addFlashcardsLesson } = useContext(GlobalContext)

    function handleAddFlashcard() {
        setInputsQuantity(inputsQuantity + 1);
    }

    const handleCreateLesson = () => {
        addFlashcardsLesson(
            {
                title: lessonName,
                avatarUrl: avatarUrl,
                flashcards: flashcardsValues
            }
        )
        navigate(`/`);
    }

    const handleChangeLessonName = (event) => {
        const text = event.target.value;
        setLessonName(text);
    }

    const handleChangeAvatarUrl = (event) => {
        const text = event.target.value;
        setAvatarUrl(text);
    }

    const handleChangeFlashcard = (flashcardId, text, type) => {
        const existingValues = flashcardsValues[flashcardId];

        if (existingValues === undefined) {
            if (type === WORD) {
                setFlashcardsValues({ ...flashcardsValues, [flashcardId]: { key: text } })
            }
            if (type === TRANSLATE) {
                setFlashcardsValues({ ...flashcardsValues, [flashcardId]: { value: text } })
            }
        } else {
            if (type === WORD) {
                setFlashcardsValues({ ...flashcardsValues, [flashcardId]: { key: text, value: existingValues.value } })
            }
            if (type === TRANSLATE) {
                setFlashcardsValues({ ...flashcardsValues, [flashcardId]: { value: text, key: existingValues.key } })
            }
        }
    }

    function renderFlashcardsItems() {
        let flashcards = []
        for (var i = 0; i < inputsQuantity; i++) {
            flashcards.push(<FlashcardCreateItem key={i} id={i} onChange={handleChangeFlashcard} keyValue={flashcardsValues[i]} />)
        }
        return flashcards;
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <ContentWrapper>
                <Typography variant="h4">Stwórz własne mówiące fiszki</Typography>
                <Typography variant="subtitle1" color="text.secondary">i szybko zapamiętaj dokładnie to, co chcesz</Typography>
            </ContentWrapper>
            <Divider />
            <ContentWrapper>
                <Grid container rowGap={4}>
                    {renderFlashcardsItems()}
                </Grid>
            </ContentWrapper>
            <Divider />
            <Button sx={{ my: 3 }} variant="contained" onClick={() => handleAddFlashcard()}>+ dodaj kolejną fiszkę</Button>
            <Divider />
            <TextField fullWidth value={lessonName} onChange={handleChangeLessonName} label="Tytuł lekcji (np. Owoce po Angielsku)" sx={{ my: 1.5 }} />
            <TextField fullWidth value={avatarUrl} onChange={handleChangeAvatarUrl} label="Adres obrazka (wklej odnośnik do obrazka)" sx={{ my: 1.5 }} />
            <Button sx={{ my: 3 }} size="large" variant="contained" color="success" onClick={() => handleCreateLesson()} startIcon={<CreateIcon />}>Stwórz fiszki</Button>
        </Container>
    )
}

export default FlashcardsCreate;