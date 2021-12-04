import React, { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../store/GlobalState";
import { useNavigate } from "react-router-dom";
import { Container, CardContent, Typography, Card, Box, Button, CardActions } from "@mui/material"

const FlashcardLearn = () => {
    const [lesson, setLesson] = useState(null);
    const [currentFlashcard, setCurrentFlashcard] = useState(0);
    const [checked, setChecked] = useState(false);
    const { findByLessonId } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLesson(findByLessonId(id))
    }, [findByLessonId, id])

    const handleCheckButtonClicked = () => {
        setChecked(!checked)
    }

    const handleNextClicked = () => {
        setCurrentFlashcard(currentFlashcard + 1)
        setChecked(!checked)

        if (lesson.flashcards[currentFlashcard + 1] === undefined) {
            navigate('/')
        }
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 1230, width: '100%' }}>
                {lesson &&
                    <Card>

                        <CardContent>
                            <Box sx={{ p: 20 }}>
                                <Typography variant='h3'>
                                    {checked ?
                                        lesson.flashcards[currentFlashcard].value
                                        :
                                        lesson.flashcards[currentFlashcard].key
                                    }
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                            {checked ?
                                <Button variant='contained' size="large" onClick={() => handleNextClicked()}>{lesson.flashcards[currentFlashcard + 1] === undefined ? "Zakończ" : "Dalej"}</Button>
                                :
                                <Button variant='contained' size="large" onClick={() => handleCheckButtonClicked()}>Sprawdź</Button>
                            }
                        </CardActions>
                    </Card>
                }
            </Box>
        </Container>)
}

export default FlashcardLearn;