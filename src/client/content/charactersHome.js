import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CharactersHome = () => {

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography  sx={{ display: { xs: 'none', sm: 'block'} }}>
                This area of the site contains memorable characters from our campaigns.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default CharactersHome; 