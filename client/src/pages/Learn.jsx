import Item from "../components/Item.jsx";
import data from "../data/learn.js"
import { Box, Grid } from "@mui/material";

export default function Learn() {
    const videoData = data.data;
    return (
        <Box sx={{ flexGrow: 1 }} margin={10}>
            <Grid container spacing={3}>
                {Object.keys(videoData).map(key => (
                    videoData[key].map((item, index) => (
                        <Grid item key={`${key}-${index}`} xs={12} sm={6} md={4}>
                            <Item data={item} />
                        </Grid>
                    ))
                ))}
            </Grid>
        </Box>
    )
}