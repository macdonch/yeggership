import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import HeadphonesIcon from '@mui/icons-material/Headphones'

const TerminalDelays = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/faustus/';
  const faustus2150 = gcsFolderUrl + 'FaustusSectorMap2150.png'
  const faustus2175 = gcsFolderUrl + 'FaustusSectorMap2175.png'

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography variant='h2'>
              THE FAUSTUS SECTOR
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={4} alignItems="top">
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>
              <p>
                The Faustus Sector is linked to Core systems by a stable Jump-3 path. The sector has recently been 
                undergoing rapid development but is still sparsely populated beyond the Prospero system. New jump 
                points to unexplored space are still being discovered.
              </p>
            </Typography>
            <Typography variant='h4'>
              Prospero Station
            </Typography>
            <Typography>
              <p>
                Prospero station has recently been upgraded from a “C-Class” to a “B-Class” port. It has shipbuilding 
                and repair facilities, medical facilities, and houses some Sector offices for the major corporations. 
                Everything flowing between the Core and the Faustus Sector passes through Prospero station.
              </p>
            </Typography>
            <Typography variant='h4'>
              Miranda Colony
            </Typography>
            <Typography>
              <p>
                Agricultural industries on the Miranda Colony are the primary food source for Prospero station, and all 
                other installations in the Faustus sector. Some other colonies are beginning to produce and export crops 
                but are not yet self-sufficient.
              </p>
            </Typography>
            <Typography variant='h4'>
              Iago Station
            </Typography>
            <Typography>
              <p>
                The Iago System is a single jump away from Prospero. It contains a C-Class port that supports the small 
                mining operations in the Iago System, and the ongoing survey/exploration of the system. It also serves as 
                a waypoint between Prospero, and some more distant systems for ships with Class-1 jump drives. The Iago 
                system contains a red giant star and a number of asteroids and irregular planetoids that are the remains 
                of planets that collided as the star expanded. There is also a planet in the habitable zone that has an 
                unbreathable atmosphere but may be suitable for terraforming.
              </p>
              <p>
                The travel time from the Prospero-connected jump point to Iago Station is generally 1 week.
              </p>
              <p>
                Iago has been designated as a “Special Economic Zone”, which streamlines some regulatory oversight.
              </p>
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>Faustus c. 2150</Typography>
            <Box 
              component="img"
              sx={{ 
                height: 300,
                '&:hover': {
                  height: 720,
                  width: 960,
                  maxWidth: 1
                }
              }}
              src={faustus2150}
              ></Box>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={4} alignItems="top">
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography variant='h4'>
            Mephisto Way Station
            </Typography>
            <Typography>
              <p>
                The Mephisto Way Station is an automated rest and refueling facility located 3 days from the jump 
                point near the Mephisto planetary nebula.
              </p>
              <p>
                Automated mining systems collect gas from the nebula to provide the fuel for the station.
              </p>
            </Typography>
            <Typography variant='h4'>
              Miranda Colony
            </Typography>
            <Typography>
              <p>
                The Banquo Mining Facility is a very small installation on a large asteroid.
              </p>
            </Typography>
            <Typography variant='h4'>
              Portia Colony
            </Typography>
            <Typography>
              <p>
                The Portia System contains a Phase 3 colony (terraformed to a breathable atmosphere). It is dominated 
                by the Rojo family, who run the colony, and a mid-size freight company. They are rumoured to be involved 
                in smuggling weapons, and other contraband. The Rojo’s occasionally subcontract shipments to freelance freighters.
              </p>
            </Typography>
            <Typography variant='h4'>
              Lear Colony
            </Typography>
            <Typography>
              <p>
                The Lear System contains a late Phase 2 colony (terraformed to an atmosphere that supports the 
                introduction of microbial life and crops genetically engineered to grow in Phase 2).
              </p>
            </Typography>
            <Typography variant='h4'>
              Restricted Space
            </Typography>
            <Typography>
              <p>
                A pair of rival corporations have been granted charters in the Faustus sector to develop space beyond jump 
                paths that they discovered. The navigational data for these proprietary pathways is a closely guarded secret. 
                Ships need to be fitted with an encrypted, single-use navigation module to traverse the jump point.
              </p>
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>Faustus c. 2175</Typography>
            <Box 
              component="img"
              sx={{ 
                height: 300,
                '&:hover': {
                  height: 720,
                  width: 960,
                  maxWidth: 1
                }
              }}
              src={faustus2175}
              ></Box>
          </Grid>
        </Grid>
      </Box>
  );
}
export default TerminalDelays; 