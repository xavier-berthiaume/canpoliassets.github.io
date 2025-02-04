/*
 * The purpose of this component is to act as the banner on the main homepage.
 * The banner spans the entire screen width, and should feature the organization
 * logo as well as some link to join the group/discord. The mission statement
 * should also be displayed.
 */

import { Box, Button, Stack, Typography } from "@mui/material";

function Banner() {
    
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            sx={{
                bgcolor: "#202630",
                padding: 2
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                zIndex={2}
                sx={{
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Button>This will be a button with the org logo</Button>
                <Button>This will be a button to join the discord</Button>
            </Stack>
            <Box 
                maxWidth={900}
                zIndex={2}
            >
                <Typography 
                    variant="h5"
                    color="white"
                    textAlign="center"
                    marginTop={5}
                    sx={{
                        fontFamily: "Gill sans, sans-serif",
                    }}
                >This is the topmost text.</Typography>
                <Typography 
                    variant="h1"
                    color="white"
                    textAlign="center"
                    marginTop={5}
                    sx={{
                        fontFamily: "Libre Bodoni, serif",
                    }}
                >Who is voting for Canada's housing crisis?</Typography>
                <Typography 
                    variant="body1"
                    color="white"
                    textAlign="center"
                    marginTop={5}
                    sx={{
                        fontFamily: "Gill sans, sans-serif",
                    }}
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Box>
        </Box>
    );
}

export default Banner;
