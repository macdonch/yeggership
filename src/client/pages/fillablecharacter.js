import React, {useState, useEffect, useRef} from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import CasinoIcon from "@mui/icons-material/Casino";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import {
  GetCharacterClasses,
  GetSkills,
  GetTalents
} from '../services/characterGeneratorData'
import GenerateCharacterPdf from "../services/generateCharacterPdf";
import { useTheme } from '@mui/material/styles';
import { ConstructionOutlined } from "@mui/icons-material";

const FillableCharacter = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // data functions
  const characterClasses = GetCharacterClasses();
  const skillsByCategory = GetSkills();
    // generate characterClasses array
  const characterClassesSelection = [];
  for (const [key, value] of Object.entries(characterClasses)) {
    characterClassesSelection.push({ displayText: characterClasses[key]['displayText'], value: key})
  }
  const healthSelection = [];
  for (let healthValue = 11;  healthValue < 21; healthValue++) {
    healthSelection.push(
      {
        displayText: healthValue.toString(),
        value: healthValue
      }
    )
  }

  const formattedSkills = () => {
    const _characterSkills = {};
    for (const [skillType, skills] of Object.entries(skillsByCategory)) {
      _characterSkills[skillType] = [];
      for (const [name, skill] of Object.entries(skills)) {
        _characterSkills[skillType].push(
          {
            displayText: skill['displayText'],
            value: name,
            disabled: false,
            checked: false,
            toolTip:  skill['description'],
            name: skillType + '-' + name
          }
        )
      };
    };
    return _characterSkills;
  }

  // object contains setStateFunctions
  const setStateFunctions= {};

  // state vars
  const [houseRules, setHouseRules] = useState(true);
  setStateFunctions['houseRules'] = setHouseRules;
  const [characterName, setCharacterName] = React.useState(' ');
  setStateFunctions['characterName'] = setCharacterName;
  const [characterClass, setCharacterClass] = React.useState('');
  setStateFunctions['characterClass'] = setCharacterClass;
  const [traumaResponse, setTraumaResponse] = React.useState('');
  const [strength, setStrength] = React.useState(0);
  setStateFunctions['strength'] = setStrength;
  const [speed, setSpeed] = React.useState(0);
  setStateFunctions['speed'] = setSpeed;
  const [intellect, setIntellect] = React.useState(0);
  setStateFunctions['intellect'] = setIntellect;
  const [combat, setCombat] = React.useState(0);
  setStateFunctions['combat'] = setCombat;
  const [sanity, setSanity] = React.useState(0);
  setStateFunctions['sanity'] = setSanity;
  const [fear, setFear] = React.useState(0);
  setStateFunctions['fear'] = setFear;
  const [body, setBody] = React.useState(0);
  setStateFunctions['body'] = setBody;
  const [wounds, setWounds] = React.useState(2);
  setStateFunctions['wounds'] = setWounds; 

  const [health, setHealth] = React.useState('');
  setStateFunctions['health'] = setHealth;
  const [talent, setTalent] = React.useState('');
  setStateFunctions['talent'] = setTalent;
  const [talentDescription, setTalentDescription] = React.useState('');
  setStateFunctions['talent'] = setTalentDescription;
  setStateFunctions['health'] = setHealth;
  const [trainedSkills, setTrainedSkills] = React.useState({});
  setStateFunctions['trainedSkills'] = setTrainedSkills;
  const [expertSkills, setExpertSkills] = React.useState({});
  setStateFunctions['expertSkills'] = setExpertSkills;
  const [masterSkills, setMasterSkills] = React.useState({});
  setStateFunctions['masterSkills'] = setMasterSkills;
  const [characterSkills, setCharacterSkills] = React.useState(formattedSkills());
  const [houseRulesDisabled, setHouseRulesDisabled] = useState(false);
  const [validSummary, setValidSummary] = React.useState(false);
  const [validSummaryAlerts, setValidSummaryAlerts] = React.useState('');
  const [loadout, setLoadout] = React.useState([]);
  setStateFunctions['loadout'] = setLoadout;
  const [trinket, setTrinket] = React.useState('');
  setStateFunctions['trinket'] = setTrinket;
  const [patch, setPatch] = React.useState('');
  setStateFunctions['patch'] = setPatch;
  const [talents, setTalents] = React.useState([]);
  const [pdf, setPdf] = React.useState();
  const [characterSummary, setCharacterSummary] = React.useState({});

  const bottomRef = useRef(null);
/*
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  });
  */

  const onChangeHandler = (event) => {
    const baseFunction = event.target.name;
    setStateFunctions[baseFunction](event.target.value);
  }

  const onChangeLoadoutHandler = (event) => {
    const baseFunction = event.target.name;
    setStateFunctions[baseFunction](event.target.value.split(/\r?\n|\r|\n/g));
  }

  const onChangeTalentHandler = (event) => {
    const talent = event.target.value;
    let description;
    talents.forEach(item => {
      if (talent === item['name']) {
        description = item['description'];
      }
    })
    setTalent(talent);
    setTalentDescription(description);
  }

  const onSkillsChangeHandler = (event) => {
    const arrSkill = event.target.name.split('-');
    const skillType = arrSkill[0];
    const skillName = arrSkill[1];
    let boolChecked;

    const _trainedSkills = [];
    const _expertSkills = [];
    const _masterSkills = [];
    // toggle skill
    const _characterSkills = characterSkills;
    const _updatedSkills = [];
    _characterSkills[skillType].forEach(skill => {
      if (skill['value'] === skillName) {
        if (skill['checked']) {
          skill['checked'] = false;
          boolChecked = false;
        } else {
          skill['checked'] = true;
          boolChecked = true;
        }
      }
      _updatedSkills.push(skill);
    });
    _characterSkills[skillType] = _updatedSkills;
    setCharacterSkills(_characterSkills);
    // create arrays of skills displayType
    ['trained', 'expert', 'master'].forEach(item => {
      _characterSkills[item].forEach(skill => {
        if (skill['checked']) {
          switch(item) {
            case 'trained':
              _trainedSkills.push(skill['displayText'])
              break;
            case 'expert':
              _expertSkills.push(skill['displayText'])
              break;
            case 'master':
              _masterSkills.push(skill['displayText'])
              break;
          }
        }
      });
    });

    switch(skillType) {
      case 'trained':
        setTrainedSkills(_trainedSkills);
        break;
      case 'expert':
        setExpertSkills(_expertSkills);
        break;
      case 'master':
        setMasterSkills(_masterSkills);
        break;
    }
  }


  const handleCharacterClassChange = (event) => {
    const currentClass = event.target.value;
    setCharacterClass(currentClass);
    const classMods = characterClasses[currentClass];
    setWounds(classMods.wounds);
    setTraumaResponse(characterClasses[currentClass]['traumaResponse']);
    setTalent('');
    setTalentDescription('');

    if (houseRules) {
      generateTalents(currentClass);
    }
  };

  const handleHealthChange = (event) => {
    const currentHealth = event.target.value;
    setHealth(currentHealth);
  };  

  const getVersion = () => {
    let version;
    if (houseRules) {
      version = 'houseRules.1e.0'
    } else {
      version = '1e.v10'
    }
    return version;
  }
  
  const generateTalents = (characterClass) => {
    const talents = GetTalents(characterClass, true);
    setTalents(talents);
  }

  const getCharacterSkillsSummary = () => {
    const arrSkills = [];
    ['master', 'expert', 'trained'].forEach(skillType => {
      for (const [key, value] of Object.entries(characterSkills[skillType])) {
        if (value['checked']) {
          arrSkills.push(
            {
              displayText: value['displayText'],
              value: value['value'],
              skillType: skillType,
              modifier: value['bonus'],
              toolTip: value['description']
            }
          )
        }
      };
    });

    return (
      characterSummary['skills'].map(({displayText, bonus, skillType, description}, index) => (
        <Grid sm={12} md={9}  key={'0' + displayText + index} container rowSpacing={1} flex={true}>
          <Grid sm={6} key={'1' + displayText + index}>
            <Tooltip title={description} key={displayText} placement="right">
              <Typography>{displayText}</Typography>
            </Tooltip>
          </Grid>
          <Grid key={'2' + displayText + index} sm={3}>
            <Typography style={{textAlign: "center"}}>{bonus}</Typography>
          </Grid>
          <Grid key={'3' + displayText + index} sm={3}>
            <Typography style={{textAlign: "center"}}>{skillType}</Typography>
          </Grid>
        </Grid>
      ))
    )
  }

  const validateSummary = () => {

    const _skills = [];
    for (const [skillType, skills] of Object.entries(characterSkills)) {
      skills.forEach(skill => {
        if (skill['checked']) {
          _skills.push(
            {
              displayText: skillsByCategory[skillType][skill['value']]['displayText'],
              description: skillsByCategory[skillType][skill['value']]['description'],
              skillType: skillType,
              bonus: skillsByCategory[skillType][skill['value']]['bonus'],
            }
          )
        }
      });
    };

    const _characterSummary = {
      class: characterClasses[characterClass]['displayText'],
      name: characterName,
      traumaResponse: traumaResponse,
      health: {wounds: wounds, health: health},
      stats: {
        strength: strength,
        speed: speed,
        intellect: intellect,
        combat: combat
      },
      saves: {
        sanity: sanity,
        fear: fear,
        body: body
      },
      skills: _skills,
      loadout: loadout,
      patch: patch,
      trinket: trinket
    }
    _characterSummary['version'] = getVersion();
    if (houseRules) {
      _characterSummary['resolve'] = true;
      _characterSummary['talent'] = {name: talent, description: talentDescription};
      switch(talent) {
        case 'Industrial Chassis':
        case 'Mycotoxin Induced Analgesia':
          _characterSummary['health'] = {health: 20, wounds: wounds};
          setHealth(20);
          break;
        case 'Sports Scholarship':
        case 'Specimen':
          _characterSummary['health'] = {health: health, wounds: 3};
          setWounds(3);
          break;
      }
    } else {
      _characterSummary['resolve'] = false;
      _characterSummary['talent']  = null;
    }

    setCharacterSummary(_characterSummary);
    const document = GenerateCharacterPdf(_characterSummary);
    setPdf(document);
    setValidSummary(true);
    setValidSummaryAlerts(null);
    setHouseRulesDisabled(true);
  }

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none'} }}>
        <Typography>This page requires a horizontal resolution of at least 600 pixels to render properly.</Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
        <Grid container rowSpacing={1} alignItems="top">
          {/* House rules */}
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography  sx={{ display: { xs: 'none', sm: 'block'} }}>
              This form generates a pdf file for download.<br />
              Use the 'Rules' dropdown to choose between the Mothership 1e rules, and 'House Rules'.<br />
              The 'House Rules' contain additional fields.<br />
              <br />
            </Typography>
          </Grid>
          <Grid sm={2} md={1} style={{textAlign: "left"}} sx={{ my: 0 }}>
            <Typography variant="h6">RULES</Typography>
          </Grid>
          <Grid sm={2} md={1}>
            <FormControl variant="standard" style={{textAlign: "left"}}>
              <Select
                labelId="houseRules"
                id="houseRules"
                value={houseRules}
                onChange={onChangeHandler}
                name="houseRules"
                disabled={houseRulesDisabled}
              >
                <MenuItem value={true}><Typography>House Rules</Typography></MenuItem>
                <MenuItem value={false}><Typography>Standard</Typography></MenuItem>
              </Select>
            </FormControl> 
          </Grid>
        </Grid>

        {!validSummary && (
          <Box>
            <Grid container rowSpacing={1}>
              {/* CLASS */}
              <Grid sm={2} md={1} style={{textAlign: "left"}} sx={{ my: 0 }}>
                <Typography variant="h6">CLASS</Typography>
              </Grid>
              <Grid sm={2} md={1}>
                <FormControl variant="standard" style={{textAlign: "left"}} sx={{ minWidth: 120 }}>
                  <Select
                    labelId="characterClass"
                    id="characterClass"
                    value={characterClass}
                    onChange={handleCharacterClassChange}
                    name="characterClass"
                  >
                    {characterClassesSelection.map(({displayText, value}) => (
                      <MenuItem value={value} key={value} ><Typography>{displayText}</Typography></MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid>
              <Grid sm={6} container rowSpacing={1}>
                <Grid sm={3}>
                  <Typography variant="h6">Wounds</Typography>
                </Grid>
                <Grid sm={3}>
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>{wounds}</Typography>
                </Grid>
                <Grid sm={3}>
                  <Typography variant="h6">Health</Typography>
                </Grid>
                <Grid sm={3}>
                  <FormControl variant="standard" style={{textAlign: "left"}} sx={{ minWidth: 120 }}>
                    <Select
                      labelId="health"
                      id="health"
                      value={health}
                      onChange={handleHealthChange}
                      name="health"
                    >
                      {healthSelection.map(({displayText, value}) => (
                        <MenuItem value={value} key={value} ><Typography>{displayText}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid container rowSpacing={1}>
              <Grid sm={2} md={1} style={{textAlign: "left"}} sx={{ my: 0 }}>
                <Typography variant="h6">NAME</Typography>
              </Grid>
              <Grid sm={10} md={5}>
                <FormControl variant="standard" style={{ textAlign: "center" }}>
                  <TextField
                    variant="standard"
                    id="characterName"
                    onChange={onChangeHandler}
                    name="characterName"
                  >
                  </TextField>
                </FormControl> 
              </Grid>
            </Grid>

            <Grid container rowSpacing={1}>
              <Grid sm={12} md={3} alignItems={"top"}>
                {/* Stats */}
                <Grid sm={2} md={1} style={{textAlign: "left"}} sx={{ my: 0 }}>
                  <Typography variant="h6">STATS</Typography>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>STRENGTH</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="strength"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="strength"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>SPEED</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="speed"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="speed"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>INTELLECT</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="intellect"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="intellect"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>COMBAT</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="combat"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="combat"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
              </Grid>
              {/* SAVES */}
              <Grid sm={12} md={3} alignItems={"top"}>
                {/* Saves */}
                <Grid sm={2} md={1} style={{textAlign: "left"}} sx={{ my: 0 }}>
                  <Typography variant="h6">SAVES</Typography>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>SANITY</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="sanity"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="sanity"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>FEAR</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="fear"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="fear"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9} alignItems="center">
                  <Grid sm={6}>
                    <Typography>BODY</Typography>
                  </Grid>
                  <Grid sm={2}style={{textAlign: "center"}}>
                    <FormControl variant="standard" style={{ textAlign: "center" }}>
                      <TextField
                        variant="standard"
                        id="body"
                        inputProps={{style: { textAlign: 'center' }}}
                        onChange={onChangeHandler}
                        name="body"
                      >
                      </TextField>
                    </FormControl> 
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid container rowSpacing={1}>
              {/* TRAINED SKILLS */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >TRAINED</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}style={{textAlign: "left"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <FormGroup>
                      {(characterSkills['trained']).map(({displayText, value, disabled, checked, toolTip, name}) => (
                        <Tooltip title={toolTip} key={value} placement="right">
                          <FormControlLabel key={value} control={<Checkbox name={name} checked={checked} disabled={disabled} onChange={onSkillsChangeHandler}/>} label={<Typography>{displayText}</Typography>} />
                        </Tooltip>
                      ))}
                    </FormGroup>
                  </FormControl> 
                </Grid>
              </Grid>
              {/* EXPERT */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >EXPERT</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}style={{textAlign: "left"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <FormGroup>
                      {(characterSkills['expert']).map(({displayText, value, disabled, checked, toolTip, name}) => (
                        <Tooltip title={toolTip} key={value} placement="right">
                          <FormControlLabel key={value} control={<Checkbox name={name} checked={checked} disabled={disabled} onChange={onSkillsChangeHandler}/>} label={<Typography>{displayText}</Typography>} />
                        </Tooltip>
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* MASTER SKILLS */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >MASTER</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}style={{textAlign: "left"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <FormGroup>
                      {(characterSkills['master']).map(({displayText, value, disabled, checked, toolTip, name}) => (
                        <Tooltip title={toolTip} key={value} placement="right">
                          <FormControlLabel key={value} control={<Checkbox name={name} checked={checked} disabled={disabled} onChange={onSkillsChangeHandler}/>} label={<Typography>{displayText}</Typography>} />
                        </Tooltip>
                      ))}
                    </FormGroup>
                  </FormControl> 
                </Grid>
              </Grid>
            </Grid>

            <Grid container rowSpacing={1}>
              {/* LOADOUT */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >LOADOUT</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}>
                  <FormControl variant="standard">
                    <TextField
                      id="loadout"
                      onChange={onChangeLoadoutHandler}
                      name="loadout"
                      multiline
                      minRows={3}
                      sx={{ width: 375 }}
                    >
                    </TextField>
                  </FormControl> 
                </Grid>
              </Grid>
              {/* PATCH */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >PATCH</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}>
                  <FormControl variant="standard">
                    <TextField
                      id="patch"
                      onChange={onChangeHandler}
                      name="patch"
                      multiline
                      minRows={3}
                      sx={{ width: 375 }}
                    >
                    </TextField>
                  </FormControl> 
                </Grid>
              </Grid>
              {/* TRINKET */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >TRINKET</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}>
                  <FormControl variant="standard">
                    <TextField
                      id="trinket"
                      onChange={onChangeHandler}
                      name="trinket"
                      multiline
                      minRows={3}
                      sx={{ width: 375 }}
                    >
                    </TextField>
                  </FormControl> 
                </Grid>
              </Grid>
            </Grid>

            {/* Talent */}
            {houseRules && (
              <Grid container rowSpacing={1}>
                <Grid sm={11} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >TALENT</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}style={{textAlign: "left"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <RadioGroup
                      id="talent"
                      value={talent}
                      onChange={onChangeTalentHandler}
                      name="talent"
                    >
                      {talents.map(({name, description}) => (
                        <FormControlLabel key={name} value={name} control={<Radio />} label={<Typography>{name} - {description}</Typography>} />
                      ))}
                    </RadioGroup>
                  </FormControl> 
                </Grid>
              </Grid>
            )}

            {/* validate */}
            <Grid container rowSpacing={1}>
              <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
                <Typography variant="h6"></Typography>
              </Grid>
              <Grid sm={3} md={2}>
                <Button
                  variant="outlined"
                  edge="end"
                  color="inherit"
                  aria-label="mode"
                  onClick={() => (validateSummary())}
                >
                  <Typography>Confirm</Typography>
                </Button>
              </Grid>
              <Grid sm={9} md={10}>
                <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{validSummaryAlerts}</Typography>
              </Grid>
            </Grid>
          </Box>
        )}

        {validSummary && (
          <Box>
            <Grid container rowSpacing={1}>
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12} sx={{ display: { xs: 'flex'} }}>
                    <Typography variant="h6" color={secondary} >CLASS</Typography>
                  </Grid>
                </Grid>
                <Grid sm={8} md={10}>
                  <Typography variant="h6"sx={{ display: { xs: 'none', sm: 'flex'} }}>{characterClasses[characterClass]['displayText']}</Typography>
                </Grid>
              </Grid>
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12} sx={{ display: { xs: 'flex'} }}>
                    <Typography variant="h6"color={secondary} >HEALTH</Typography>
                  </Grid>
                </Grid>
                <Grid sm={9} container rowSpacing={1}>
                  <Grid sm={3} md={6} lg={3}>
                    <Typography variant="h6">Wounds</Typography>
                  </Grid>
                  <Grid sm={3} md={6} lg={3}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{wounds}</Typography>
                  </Grid>
                  <Grid sm={3} md={6} lg={3}>
                    <Typography variant="h6">Health</Typography>
                  </Grid>
                  <Grid sm={3} md={6} lg={3}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{health}</Typography>
                  </Grid>
                </Grid>
              </Grid>        
            </Grid>

            <Grid container rowSpacing={1}>
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6"color={secondary} >STATS</Typography>
                  </Grid>
                </Grid>
                {/* Stats */}
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>STRENGTH</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{strength}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>SPEED</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{speed}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>INTELLECT</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{intellect}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>COMBAT</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{combat}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* SAVES */}
              <Grid sm={12} md={4}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >SAVES</Typography>
                  </Grid>
                </Grid>
                {/* Saves */}
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>SANITY</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{sanity}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>FEAR</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{fear}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={4}>
                    <Typography>BODY</Typography>
                  </Grid>
                  <Grid sm={4} style={{textAlign: "center"}}>
                    <Typography>{body}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {houseRules && (
              <Grid container rowSpacing={1}>
                <Grid sm={12} md={4} alignItems={"top"}>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                    <Grid sm={12}>
                      <Typography variant="h6"color={secondary} >SKILLS</Typography>
                    </Grid>
                  </Grid>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true}>           
                    <Grid sm={6}>
                      <Typography>Name</Typography>
                    </Grid>
                    <Grid sm={3}>
                      <Typography style={{textAlign: "center"}}>Bonus</Typography>
                    </Grid>
                    <Grid sm={3}>
                      <Typography style={{textAlign: "center"}}>Type</Typography>
                    </Grid>
                  </Grid>
                  {getCharacterSkillsSummary(false)}
                </Grid>
                <Grid sm={12} md={4} alignItems={"top"}>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                    <Grid sm={12}>
                      <Typography variant="h6"color={secondary} >TALENTS</Typography>
                    </Grid>
                  </Grid>
                  <Grid sm={12} md={9}>
                    <Typography variant="h6">Trauma Response</Typography>
                  </Grid>  
                  <Grid sm={12} md={9}>
                    <Typography>{traumaResponse}</Typography>
                  </Grid>
                  <Grid sm={12} md={9}>
                    <Typography variant="h6">{talent}</Typography>
                  </Grid>  
                  <Grid sm={12} md={9}>
                    <Typography>{talentDescription}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {!houseRules && (
              <Grid container rowSpacing={1}>
                <Grid sm={12} md={4} alignItems={"top"}>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                    <Grid sm={12}>
                      <Typography variant="h6"color={secondary} >SKILLS</Typography>
                    </Grid>
                  </Grid>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true}>           
                    <Grid sm={6}>
                      <Typography>Name</Typography>
                    </Grid>
                    <Grid sm={3}>
                      <Typography style={{textAlign: "center"}}>Bonus</Typography>
                    </Grid>
                    <Grid sm={3}>
                      <Typography style={{textAlign: "center"}}>Type</Typography>
                    </Grid>
                  </Grid>
                  {getCharacterSkillsSummary(false)}
                </Grid>
                <Grid sm={12} md={4} alignItems={"top"}>
                  <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                    <Grid sm={12}>
                      <Typography variant="h6"color={secondary} >TRAUMA RESPONSE</Typography>
                    </Grid>
                  </Grid>
                  <Grid sm={12} md={9}>
                    <Typography variant="h6">Trauma Response</Typography>
                  </Grid>  
                  <Grid sm={12} md={9}>
                    <Typography>{traumaResponse}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid container rowSpacing={1}>
              {/* LOADOUT */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12}>
                    <Typography variant="h6" color={secondary} >LOADOUT</Typography>
                  </Grid>
                </Grid>
                <Grid sm={12}>
                    {loadout.map((item, index) => (
                      <Typography key={index}>{item}</Typography>
                    ))}
                </Grid>
              </Grid>

              {/* TRINKET */}
              <Grid sm={12} md={4} alignItems={"top"}>
                <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                  <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
                    <Typography variant="h6" color={secondary} >PATCH and TRINKET</Typography>
                  </Grid>
                  <Grid sm={12} sx={{ display: { xs: 'flex', sm: 'none'} }}>
                    <Typography variant="h6" color={secondary} >PATCH</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={6}>
                    <Typography>Patch</Typography>
                  </Grid>
                  <Grid sm={6} style={{textAlign: "left"}}>
                    <Typography >{patch}</Typography>
                  </Grid>
                </Grid>
                <Grid display={"flex"} sm={12} md={9}>
                  <Grid sm={6}>
                    <Typography>Trinket</Typography>
                  </Grid>
                  <Grid sm={6}style={{textAlign: "left"}}>
                    <Typography >{trinket}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* PDF */}
            <Grid container rowSpacing={1}>
              <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
                <Typography variant="h6"></Typography>
              </Grid>
              <Grid sm={3} md={2}>
                <PDFDownloadLink style={{textDecoration: 'none'}} document={pdf} fileName={characterClass + '.pdf'}>
                      {({ blob, url, loading, error }) =>
                        loading ? <Typography>loading</Typography> : <Button
                              variant="outlined"
                              edge="end"
                              color="primary"
                              aria-label="mode"
                              sx={{borderColor: primary}}
                            >
                          <Typography sx={{mx: 1}}>Download PDF</Typography>
                        </Button>
                      }
                </PDFDownloadLink>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      <div ref={bottomRef} />
    </Box>
  );
}
export default FillableCharacter; 