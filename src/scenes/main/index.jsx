import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/Bar";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/Pie";
import LineChartYears from "../../components/LineYears";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleDownload = () => {
        // Create an HTML element to represent the content you want to download
        const contentLine = document.getElementById('line-chart');
        const contentPie = document.getElementById('pie-chart');
        const contentBar = document.getElementById('bar-chart');
    
        // Serialize the content as a string (you can use other methods for your specific content)
        const contentString1 = new XMLSerializer().serializeToString(contentLine);
        const contentString2 = new XMLSerializer().serializeToString(contentPie);
        const contentString3 = new XMLSerializer().serializeToString(contentBar);
    
        // Create a Blob from the content string
        const blob = new Blob([contentString1, contentString2, contentString3], { type: 'text/html' });
    
        // Generate a URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create an anchor element with the download attribute and trigger a click to start the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chart-summary.html'; // Specify the filename for the downloaded file
        a.click();
    
        // Release the URL object to free up memory
        URL.revokeObjectURL(url);
      };

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" alignItems="center" >
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            marginBottom: '10px'
                        }}
                        onClick={handleDownload}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Скачать отчет
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 2fr)"
                gridAutoRows="125px"
                gap="20px"
            >
                {/* ROW 1 */}
                {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    id='line-chart'
                >
                    {/* <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    > */}
                        {/* <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box> */}
                        {/* <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box> */}
                    {/* </Box> */}
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChartYears isDashboard={true}/>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[900]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Последние статьи
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[900]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="20px"
                    id='pie-chart'
                >
                    <Typography
                        variant="h5"
                        fontWeight="400"
                        sx={{ padding: "10px 30px 30xp 30px" }}
                    >
                        По странам
                    </Typography>

                    <Box height="280px" mt="-50px">
                        <PieChart />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    id='bar-chart'
                >
                    <Typography
                        variant="h5"
                        fontWeight="400"
                        sx={{ padding: "20px 30px 0 30px" }}
                    >
                        По сайтам
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;