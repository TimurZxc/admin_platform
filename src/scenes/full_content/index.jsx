import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SendOutlined } from "@mui/icons-material";
// import { UploadOutlined } from "@mui/icons-material";
// import { tokens } from "../../theme";
import React from "react";
import axios from "axios";
import AccordionComponent from "../../components/accordion";

const FullContent = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  const [news, setNews] = React.useState([])

  React.useEffect(() => {

    const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    };

    axios
      .get('http://127.0.0.1:8000/news', {
        headers: headers,
    })
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  // const getData = () =>{

  //   const headers = {
  //     'Content-Type': 'application/json;charset=utf-8'
  //   };

  //   axios
  //     .get('http://127.0.0.1:8000/news', {
  //         headers: headers,
  //     })
  //     .then((response) => {
  //       const newsData = response.data;
  //       setNews(newsData);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching data:', error);
  //     });
  // }

  const Articles = news.map(data => {
    return (
      <AccordionComponent 
        key={data.id}
        id={data.id}
        titleRu={data.title_ru}
        descriptionRu={data.description_ru}
        titleEn={data.title_en}
        descriptionEn={data.description_en}
        url={data.url}
        {...data}
      />
    );
  });
  

  return (
    <Box m="0 20px 0 20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        {Articles}
      {/* {
        news.map((data) => (
          <Accordion defaultExpanded key={data.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Полученная новость
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {data.title}
                </Typography>
                <br />
                <Typography>
                    {data.description}
                </Typography>
                <br />
                <Typography color={colors.greenAccent[500]} variant="h5">
                    {data.url}
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
                    onClick={() => {publishNewsData(data.id)}}
                >
                    Опубликовать
                    <SendOutlined sx={{ ml: "10px", fontSize: '18px' }} />
                </Button>
            </AccordionDetails>
        </Accordion>
        ))
        } */}

        {/* HardCoded */}
      {/* <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Заголовок: High-Speed Rail Expansion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Описание: A major high-speed rail project receives funding for expansion, connecting additional cities for rapid transit.
          </Typography>
          <br />
          <Typography variant="h5" mb={'10px'}>
            URL: https://www.hurriyet.com.tr/gundem/canakkalede-lastik-bottaki-39-kacak-gocmen-yakalandi-42323321
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

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Заголовок: High-Speed Rail Expansion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Описание: A major high-speed rail project receives funding for expansion, connecting additional cities for rapid transit.
          </Typography>
          <br />
          <Typography variant="h5" mb={'10px'}>
            URL: https://www.hurriyet.com.tr/gundem/canakkalede-lastik-bottaki-39-kacak-gocmen-yakalandi-42323321
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

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Заголовок: High-Speed Rail Expansion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            Описание: A major high-speed rail project receives funding for expansion, connecting additional cities for rapid transit.
          </Typography>
          <br />
          <Typography variant="h5" mb={'10px'}>
            URL: https://www.hurriyet.com.tr/gundem/canakkalede-lastik-bottaki-39-kacak-gocmen-yakalandi-42323321
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
      </Accordion> */}
    </Box >
  );
};

export default FullContent;