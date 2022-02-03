
import { Box, Button, Stack, Divider, Typography } from '@mui/material';

import {useTheme} from '@mui/material/styles';


const Main  = () => {

  const theme = useTheme();

  const stylesForColor = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.error.main,
}

const stylesForFont = {
  fontSize: '16px',
  fontWeight: 'bold'
}

  return (
  <>
    <Typography variant="h3">Hello from Main</Typography>
    <Button variant="contained" color="error">Push Here...</Button>

    <Stack direction="column" spacing={2} 
    sx={{...stylesForColor, ...stylesForFont}} >
      <Box>
        Item 1
      </Box>
      <Box>
        Item 2
      </Box>
      <Box>
        Item 3
      </Box>
    </Stack>

  </>);

};

export default Main;