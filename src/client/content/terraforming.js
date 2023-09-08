import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Terraforming = () => {

  const terraforming = [
    {
      stage: 1,
      description: "Create or dissipate atmosphere to heat or cool the planet until the surface \
                    can support liquid water. Introduce O2 emitting microorganisms."
    },
    {
      stage: 2,
      description: 'Introduce additional microbial life as O2 levels increase. Prepare land for \
                    crops genetically engineered for late phase 2. Introduce selected invertebrates. Plant phase 2 crops.'
    },
    {
      stage: 3,
      description: 'Microbial life and phase 2 crops complete transition to a breathable atmosphere. Replace phase 2 crops \
                    with phase 3 crops. Introduce selected vertebrates and livestock.'
    },
    {
      stage: 4,
      description: 'Transition to phase 4 crops. Temperature and atmosphere reach steady state. Terraforming operation complete.'
    }
  ]

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12}>
          <Typography variant='h3'>
            TERRAFORMING
          </Typography>
        </Grid>
        <Grid sm={12}>
          <Typography>
            <br />
            Terraforming is broken into stages. The length of a stage in part depends on the initial state of 
            the planet, and its suitability rating.
            
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid container rowSpacing={1} alignItems="top" columnSpacing={4}>
          <Grid sm={12}>
            <Typography variant='h4'>
              Terraforming Stages
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>STAGE</TableCell>
                    <TableCell>DESCRIPTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {terraforming.map(({stage, description}) => (
                    <TableRow key={stage}>
                      <TableCell style={{ verticalAlign: 'top' }}>
                        {stage}
                      </TableCell>
                      <TableCell>
                        {description}
                      </TableCell>
                    </TableRow>
                  ))}                
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Terraforming;