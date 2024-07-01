import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import HeadphonesIcon from '@mui/icons-material/Headphones'

const ChariotOfTheGods = () => {
  const module = {
    driveThruUrl: 'https://www.drivethrurpg.com/en/product/293977',
    title: 'Chariot of the Gods',
    type: 'Alien RPG Scenario'
  }
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/terminaldelays/';
  const downloadUrl = gcsFolderUrl + 'TerminalDelays.zip';
  const audioUrl = gcsFolderUrl + 'cryoboostFinal.mp3';
  const images = [
    {
      displayText: 'Crew Manifest',
      url: gcsFolderUrl + 'crewManifest.png'
    },
    {
      displayText:'Pente Character Sheet',
      url: gcsFolderUrl + 'penteSheet.png',
    },
    {
      displayText: 'Warre Character Sheet',
      url: gcsFolderUrl + 'warreSheet.png'
    },
    {
      displayText: 'Nair Character Sheet',
      url: gcsFolderUrl + 'nairSheet.png'
    },
    {
      displayText: 'Character Bios (Preview)',
      url: gcsFolderUrl + 'bios.png'
    },
    {
      displayText: 'Pente Token',
      url: gcsFolderUrl + 'pente.png'
    },
    {
      displayText: 'Warre Token',
      url: gcsFolderUrl + 'warre.png'
    },
    {
      displayText:'Nair Token',
      url: gcsFolderUrl + 'nair.png',
    },
    {
      displayText:'Ashbrook Token',
      url: gcsFolderUrl + 'ashbrook.png',
    },
    {
      displayText:'Button Token',
      url: gcsFolderUrl + 'button.png',
    },
    {
      displayText:'Mlynnik Token',
      url: gcsFolderUrl + 'mlynnik.png',
    },
    {
      displayText:'Kara Token',
      url: gcsFolderUrl + 'kara.png',
    },
    {
      displayText:'Kat Token',
      url: gcsFolderUrl + 'kat.png',
    }
  ];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12}>
            <Box display="inline">
              <Typography display="inline">
                  <i>{module.title}</i> is a {module.type} published by Free League Publishing. It is availabe for 
                  purchase at &nbsp;
                  <Link display="inline" underline="hover" target="_blank" rel="noopener" href={module.driveThruUrl}>
                    DriveThruRPG
                  </Link>
                  .
              </Typography>
            </Box>
          </Grid>
          <Grid sm={12}>
            <Typography variant='h5'>
              <br />
                WARNING: SPOILERS AHEAD         
            </Typography>
          </Grid>
          <Grid sm={12}>
            <Typography>
              <br />
                The PCs cargo ship is redirected to investigate a derelict ship that has been missing for a number of years. They
                find evidence of violence, some survivers in cryo, and then bad thigs start to happen.              
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
                I ran this module as a one-shot using the Mothership RPG rules, and some minor modifications to the module content. 
                Players were given pre-generated characters to choose from, and were warned that survival was unlikely. Each character 
                received an personal agenda for Act I, which acted as a role playing prompt. As play progressed through Act II and III, characters received additional agendas.              
            </Typography>
        </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography variant='h4'>
                Conversion Notes    
            </Typography>  
              <ul style={{ listStyleType: 'square'}}>
                <li>Character Classes: I used the stanrdard Mothership classes, but modified the skills for some characters.</li>
                <li>Talents: Alien RPG characters have special talents. My group uses a similar mechanic as a House Rule in Mothership,
                    so I gave the PCs appropriate talents for this scenario.
                </li>
                <li>Skill Checks: Skill checks are easier to pass in the Alien RPG. For Mothership, I removed some skill checks that module
                    called for, and interpreted failure fairly generously for skills checks. For example, a failed piloting roll added stress,
                    but didn't end the scenario.
                </li>
                <li>Oxygen Depletion: The Alien RPG tracks consumables like Air in your space suit. "Supply Rolls" determine how much of a consumables you have left.
                    In combat, you are likely to consume your supply very quickly. For Mothership, I did not track consumables very closely. We talked about
                    scarcity in abstract terms so it was understood that the PCs did not an unlimited supply of air for vaccsuits or hazard suits.
                </li>
                <li>Monster Stats and Behaviour:  some of the monsters that appear in the Chariot of the Gods are described in the Alien Core rules, not in the module.
                    Most have a random table of attacks: I generally used the random table to describe to the players what the monster was going to do next, unless
                    they did something to avoid it, or stop it. Some monsters in the Alien RPG also have a table that descibes their behavior when they take a "Critical Injury", 
                    which translates well to Mothership for changing behaviour on taking a wound.
                </li>
                <li>Infection: players will be exposed to spores or other materials that may present as a progressive disease. I used a series of Body Saves to determine if the 
                    disease progressed to the next stage. I also only checked for a single PC at a time, so not everyone was getting sick at once. If someone got better, then 
                    another character who was exposed would start progressing their own Body Saves.
                </li>
                <li>Time Tracking: the Alien RPG tracks time in Shifts of 5-10 hours, Turns of 5-10 minutes and Rounds of 5-10 seconds. Some events, like disease progression, 
                    may trigger after a shift. Tracking Shifts in rougly 6 hour increments is necessary for some of the module mechanics.
                </li>
                <li>Story Points: the Alien RPG awards "Story Points" for meeting you personal ageenda after each Act. I awarded "Resolve Points" to the players, which could be 
                    spent to reroll any roll the player makes. They could then choose which result to keep.
                </li>  
              </ul>
            <Typography>
              <br />
              The assets I made for my own sessions of Chariot of the Gods contain too much copyrighted material for me to post them here, but feel free to reach out to 
              me by email or on the Mothership Discord server if you would like to see them. Contact information is available at the bottom of the &nbsp;
              <Link display="inline" underline="hover" href="../">
                Home
              </Link>
              &nbsp;page.
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
}
export default ChariotOfTheGods; 