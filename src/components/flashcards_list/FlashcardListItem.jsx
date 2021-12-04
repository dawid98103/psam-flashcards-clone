import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const FlashcardListItem = ({ id, lessonName, avatarUrl, onClick }) => {
    const { deleteByLessonId } = useContext(GlobalContext);

    return (
        <ListItem sx={{ py: 2 }}>
            <ListItemAvatar>
                <Avatar sx={{ height: 60, width: 60 }} src={avatarUrl} />
            </ListItemAvatar>
            <ListItemButton>
                <ListItemText onClick={() => onClick(id)} primary={lessonName} />
                <IconButton onClick={() => deleteByLessonId(id)} >
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItemButton>
        </ListItem>
    )
}

export default FlashcardListItem;