/*
 * This is one of the more major components. It is the data table that will display the
 * information that's been collected on each MP. It should give a general overview and
 * not go into too much detail for each individual. Instead each MP's name could link to
 * another view called Details, where a breakdown of the individual declared assets can be
 * displayed.
 */

 import { Box } from "@mui/material";

 function DataTable() {

     // For now, I'm leaving this to be a big box since we're not sure on how the data will be structured in the backend.
     return (
        <Box
            height={1100}
        >
        </Box>
     );
 }

 export default DataTable;
