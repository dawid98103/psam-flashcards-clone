import React from "react";
import { ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from "@mui/material";

const UserCommentItem = ({ header, author, avatar }) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Author" src={avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={header}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {author}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default UserCommentItem;