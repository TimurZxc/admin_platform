import React from 'react'
import { useTheme, Button} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {SendOutlined} from "@mui/icons-material";
import { tokens } from "../theme";
import axios from 'axios';

const AccordionComponent = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('test/', {
          title: props.title,
          description: props.description,
          url: props.url,
        }).then((response) => {
            console.log('response', response)
        }).catch((error) => {
          console.log(error);
        });
      }

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Полученная новость
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    {props.url}
                </Typography>
                <Button
                    sx={{
                        backgroundColor: colors.greenAccent[600],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "10px 10px",
                        margin: '10px 0 0 0'
                    }}
                    onClick={handleSubmit}
                >
                    Опубликовать
                    <SendOutlined sx={{ ml: "10px", fontSize: '18px' }} />
                </Button>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent