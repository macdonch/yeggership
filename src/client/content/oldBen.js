import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const OldBen = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/characters/oldben/';
  const characterImage = gcsFolderUrl + 'oldBen.jpg'

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid xs={12} sx={{ display: 'flex' }}>
            <Typography variant='h2'>
              OLD BEN
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={4} alignItems="top">
          <Grid xs={12} md={6} sx={{ display: 'block' }}>
            <Typography>
              'Old Ben' has been a space trucker since before FTL and will tell  
              you stories about it whether you want to hear them or not.
            </Typography>
            <br />
            <Typography>
              He appears as an NPC in the 'coming soon' module <i>Nietzsche's Demon</i>.
            </Typography>
            <br />
            <Typography>
              'Old Ben' was created as a PC by Charles Allen, and is now a recurring NPC in our campaign.
            </Typography>
          </Grid>
          <Grid xs={12} md={6} sx={{ display: 'block', textAlign: "center" }}>
            <Typography>
              <br />
              <br />
              "Old Ben"
            </Typography>
            <Box 
              component="img"
              sx={{ 
                height: 300,
              }}
              src={characterImage}
              >
            </Box>
            <Typography>
              <br />
              Artist: &nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href="https://darkandstormyart.com/">
                C. Gauthier
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
}
export default OldBen; 