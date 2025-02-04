import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";

function Footer() {

    return (
        <Box
            sx={{
                bgcolor: "#202630",
                padding: 2
            }}
        >
            <Stack
                direction="row"
                marginY={6}
                sx={{
                    justifyContent:"space-between"
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                >
                    <Typography variant="h6">Want to hear more from us?</Typography>
                    <Typography variant="body2">Subscribe to get email notifications</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                >
                    <TextField placeholder="Enter your email" />
                    <Button>Subscribe</Button>
                </Box>
            </Stack> 
            <Divider 
                variant="middle" 
            />
            <Stack
                direction="row"
                marginY={6}
                sx={{
                    justifyContent:"space-between"
                }}
            >
                <Button>This will be a button with the org logo</Button>
                <Typography variant="body2">This is some text pointing out the fact that we have some open source license</Typography>
            </Stack> 
        </Box>
    );
}

export default Footer;
