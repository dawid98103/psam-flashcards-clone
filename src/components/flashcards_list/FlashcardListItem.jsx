import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material"

const FlashcardListItem = ({ id, lessonName, avatarUrl, onClick }) => {
    return (
        <ListItem sx={{ py: 2 }}>
            <ListItemAvatar>
                <Avatar src={avatarUrl} />
            </ListItemAvatar>
            <ListItemButton onClick={() => onClick(id)}>
                <ListItemText primary={lessonName} />
            </ListItemButton>
        </ListItem>
    )
}

export default FlashcardListItem;