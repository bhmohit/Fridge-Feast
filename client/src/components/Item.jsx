import { Grid } from "@mui/material";

export default function Item(props) {
    const itemInfo = props.data
    return (
        <div>
            {itemInfo.Channel}
            {itemInfo.Link}
            {itemInfo.Description}
            {itemInfo.Video}
        </div>
    )
}