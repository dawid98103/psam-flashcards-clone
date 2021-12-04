import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Typography } from "@mui/material";

const AdvantageItem = ({ header, avatar }) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                {avatar}
            </ListItemAvatar>
            <ListItemText
            >
                <Typography variant='h6'>{header}</Typography>
            </ListItemText>
        </ListItem>
    )
}

export default AdvantageItem;