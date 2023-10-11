import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ShipsHome = () => {

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={8} md={10} sx={{ display: { xs: 'flex', sm: 'flex'} }}>
            <Typography  sx={{ display: { xs: 'flex', sm: 'block'} }}>
                A collection of custom ships. Feel free to use them for your campaigns.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ShipsHome; 