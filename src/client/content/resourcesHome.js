import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ResourcesHome = () => {

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
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
            <Typography>
                Some of the module resources may contain spoilers.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ResourcesHome; 