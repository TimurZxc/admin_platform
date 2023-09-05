import React from 'react'
import { useTheme, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SendOutlined } from "@mui/icons-material";
import { tokens } from "../theme";
import axios from 'axios';

const AccordionComponent = (props) => {
    const theme = useTheme(props);
    const colors = tokens(theme.palette.mode);
    const [news, setNews] = React.useState([])
    // const [propsData, setPropsDataws] = React.useState({
    //     url: props.url,
    //     titleRu: props.titleRu,
    //     descriptionRu: props.descriptionRu,
    //     titleRu: props.titleEn,
    //     descriptionRu: props.descriptionEn
    // })
    const [published, setPublished] = React.useState(0)

    const getData = () => {

        const headers = {
            'Content-Type': 'application/json;charset=utf-8'
        };

        axios
            .get('http://127.0.0.1:8000/news', {
                headers: headers,
            })
            .then((response) => {
                const newsData = response.data;
                setNews(newsData);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }

    const publishNewsData = () => {
        const headers = {
            'Content-Type': 'application/json',
        };

        axios
            .post(`http://127.0.0.1:8000/publich_channel?title=${props.titleRu}&description=${props.descriptionRu}&url=${props.url}`,
                {
                    headers: headers,
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    console.log('status', 'Статья была опубликована!');
                    setPublished((prevCount) => prevCount + 1);
                } else {
                    console.log('Received unexpected status code:', response.status);
                }
            })
            .catch((error) => {
                console.log('Error posting data:', error);
            });
    };


    React.useEffect(() => {
        getData();
    }, [published])

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Полученная новость
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.titleRu}
                </Typography>
                <br />
                <Typography>
                    {props.descriptionRu}
                </Typography>
                <br />
                <Typography color={colors.greenAccent[500]}>
                    ______________________________
                </Typography>
                <br />
                <Typography>
                    {props.titleEn}
                </Typography>
                <br />
                <Typography>
                    {props.descriptionEn}
                </Typography>
                <br />
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
                    onClick={publishNewsData}
                >
                    Опубликовать
                    <SendOutlined sx={{ ml: "10px", fontSize: '18px' }} />
                </Button>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent