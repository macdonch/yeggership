import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ResourcesHome = () => {

  return (
    <Box>
      <Grid container rowSpacing={2} alignItems="top">
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
            <Typography  sx={{ display: 'block' }}>
              This area of the site contains resources that we created for our play sessions, such as:
            </Typography>
              <ul style={{ listStyleType: 'square'}}>
                <li>maps and system descriptions for our campaign setting.</li>
                <li>maps and tokens for Roll20 to supplement published modules</li>
                <li>house rules, including a modified Panic Table</li>
                <li>desciptions of hyperspace and terraforming</li>
              </ul>
            <Typography variant='h4'>
                SPOILER ALERT
            </Typography>
            <Typography>
                Some of the module resources may contain spoilers.
            </Typography>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
        <Typography variant='h5'>
                PDF Viewing and Printing Tips
            </Typography>
            <Typography>
                Many Mothership pdf files are intended to be viewed as a two page spread, and printed as booklets. Most browsers and Acrobat Reader
                default to a single page view, and Print settings also usually default to a single page.
            </Typography>
            <Typography variant='h6'>
                Acrobat Reader
            </Typography>
            <Typography>
                Blah blah.
            </Typography>
            <Typography variant='h6'>
                Chrome
            </Typography>
            <Typography>
                At the time of writing, Chrome does give you the option to set the two page view with a seperate cover. You can get around this by using "Print as PDF" to create a coverless copy for viewing.
            </Typography>
            <Typography variant='h6'>
                Printing Booklets
            </Typography>
            <Typography>
                Blah blah.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ResourcesHome; 