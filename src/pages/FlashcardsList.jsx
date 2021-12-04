import React, { useContext } from "react";
import { styled } from "@mui/system";
import { GlobalContext } from "../store/GlobalState";
import { useNavigate } from "react-router-dom";
import FlashcardListItem from "../components/flashcards_list/FlashcardListItem";
import { Container, Divider, List, Typography } from "@mui/material"

const ContentWrapper = styled('div')({
    paddingTop: 35,
    paddingBottom: 35
})

const FlashcardsList = () => {
    const { flashcardsLessons } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleOpenLesson = (id) => {
        navigate(`/flashcards/learn/${id}`)
    }

    const renderLessons = () => {
        let lessons = [];
        flashcardsLessons.forEach(lesson => {
            lessons.push(<FlashcardListItem key={lesson.id} id={lesson.id} lessonName={lesson.title} avatarUrl={lesson.avatarUrl} onClick={handleOpenLesson} />)
        })
        return lessons;
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <ContentWrapper>
                <Typography variant="h4">Rozpocznij naukę!</Typography>
                <Typography variant="subtitle1" color="text.secondary">poniżej widzisz utworzone przez siebie zestawy fiszek</Typography>
            </ContentWrapper>
            <Divider />
            <ContentWrapper>
                <List sx={{ p: 0 }}>
                    {renderLessons()}
                </List>
            </ContentWrapper>
        </Container>
    )
}

export default FlashcardsList;