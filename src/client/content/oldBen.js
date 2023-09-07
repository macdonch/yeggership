import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const OldBen = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/characters/oldben/';
  const characterImage = gcsFolderUrl + 'oldBen.jpg'

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography variant='h2'>
              OLD BEN
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={4} alignItems="top">
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>
              <p>
                'Old Ben' has been a space trucker since before FTL and will tell  
                you stories about it whether you want to hear them or not.
              </p>
              <p>
                He appears as an NPC in the 'coming soon' module <i>Nietzsche's Demon</i>.
              </p>
              <p>
                'Old Ben' was created as a PC by Charles Allen.
              </p>
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>"Old Ben"</Typography>
            <Box 
              component="img"
              sx={{ 
                height: 300,
              }}
              src={characterImage}
              ></Box>
          </Grid>
        </Grid>
      </Box>
  );
}
export default OldBen; 