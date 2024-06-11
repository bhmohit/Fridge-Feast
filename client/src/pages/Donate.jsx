import Item from "../components/Item.jsx";
import data from "../data/orgs.js"
import { Box, Grid } from "@mui/material";

export default function Donate() {
    const videoData = data;
    return (
        <Box sx={{ flexGrow: 1 }} margin={10}>
            <Grid container spacing={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.keys(videoData).map(key => (
                    videoData[key].map((item, index) => (
                        <Grid style={{ display: 'flex' }} item key={`${key}-${index}`} xs={12} sm={6} md={4}>
                            <Item data={item} type={key}/>
                        </Grid>
                    ))
                ))}
            </Grid>
        </Box>
    )
}