import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SendOutlined } from "@mui/icons-material";
// import { UploadOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";
import React from "react";
import AccordionComponent from "../accordion";
import axios from "axios";

const FullContent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [news, setNews] = React.useState([])

  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

  // React.useEffect(() => {
  //   axios
  //     .get('https://3e73-95-141-138-95.ngrok-free.app/publich_channel')
  //     .then((response) => {
  //       const newsData = response.data;
  //       setNews(newsData);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching data:', error);
  //     });
  // }, [newsData]);

  const publishNewsData = () => {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    };
  
    axios
      .post(
        'https://3e73-95-141-138-95.ngrok-free.app/publich_channel',
        {
          title: 'High-Speed Rail Expansion',
          description:
            'A major high-speed rail project receives funding for expansion, connecting additional cities for rapid transit.',
          url:
            'https://www.hurriyet.com.tr/gundem/canakkalede-lastik-bottaki-39-kacak-gocmen-yakalandi-42323321',
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log('status', 'Статья была опубликована!');
          // Set your registrationStatus state here if needed.
        }
      })
      .catch((error) => {
        console.log('Error posting data:', error);
        // Handle the error and set your registrationStatus state accordingly.
      });
  };  

  const newsSection = news.map(data => {
    return <AccordionComponent
      title={data.title}
      description={data.description}
      url={data.url}
    />
  })

  return (
    <Box m="0 20px 0 20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {/* <Button
            sx={{
              backgroundColor: colors.greenAccent[600],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              padding: "10px 10px",
              margin: '10px 0 0 0'
            }}
            onClick={fetchNewsData}
          >
            <UploadOutlined sx={{ mr: "10px", fontSize: '18px'}} />
            Получить данные
        </Button> */}
      {newsSection}
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
    </Box>
  );
};

export default FullContent;