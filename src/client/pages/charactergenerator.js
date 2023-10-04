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
  GetExpertSkillsByTrainedSkill,
  GetExpertSkillsByMasterSkill,
  GetTrainedSkillsByExpertSkill,
  GetLoadout,
  GetTrinket,
  GetPatch,
  GetTalents
} from '../services/characterGeneratorData'
import GenerateCharacterPdf from "../services/generateCharacterPdf";
import { useTheme } from '@mui/material/styles';

const CharacterGenerator = () => {
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
  const statsSelection = [
    {
      displayText: 'Strength',
      value: 'strength'
    },
    {
      displayText: 'Speed',
      value: 'speed'
    },
    {
      displayText: 'Intellect',
      value: 'intellect'
    },
    {
      displayText: 'Combat',
      value: 'combat'
    }
  ];

  // object contains setStateFunctions
  const setStateFunctions= {};

  // state vars
  const [houseRules, setHouseRules] = useState(true);
  setStateFunctions['houseRules'] = setHouseRules;
  const [stats, setStats] = React.useState([]);
  setStateFunctions['stats'] = setStats;
  const [statsDisabled, setStatsDisabled] = React.useState(false);
  setStateFunctions['statsDisabled'] = setStatsDisabled;
  const [saves, setSaves] = React.useState('');
  setStateFunctions['saves'] = setSaves;
  const [savesDisabled, setSavesDisabled] = React.useState(false);
  setStateFunctions['savesDisabled'] = setSavesDisabled;
  const [characterClass, setCharacterClass] = React.useState('');
  setStateFunctions['characterClass'] = setCharacterClass;
  const [traumaResponse, setTraumaResponse] = React.useState('');
  const [strengthBase, setStrengthBase] = React.useState('');
  setStateFunctions['strengthBase'] = setStrengthBase;
  const [speedBase, setSpeedBase] = React.useState('');
  setStateFunctions['speedBase'] = setSpeedBase;
  const [intellectBase, setIntellectBase] = React.useState('');
  setStateFunctions['intellectBase'] = setIntellectBase;
  const [combatBase, setCombatBase] = React.useState('');
  setStateFunctions['combatBase'] = setCombatBase;
  const [strengthMod, setStrengthMod] = React.useState(0);
  setStateFunctions['strengthMod'] = setStrengthMod;
  const [speedMod, setSpeedMod] = React.useState(0);
  setStateFunctions['speedMod'] = setSpeedMod;
  const [intellectMod, setIntellectMod] = React.useState(0);
  setStateFunctions['intellectMod'] = setIntellectMod;
  const [combatMod, setCombatMod] = React.useState(0);
  setStateFunctions['combatMod'] = setCombatMod;
  const [strength, setStrength] = React.useState(0);
  setStateFunctions['strength'] = setStrength;
  const [speed, setSpeed] = React.useState(0);
  setStateFunctions['speed'] = setSpeed;
  const [intellect, setIntellect] = React.useState(0);
  setStateFunctions['intellect'] = setIntellect;
  const [combat, setCombat] = React.useState(0);
  setStateFunctions['combat'] = setCombat;
  const [sanityBase, setSanityBase] = React.useState('');
  setStateFunctions['sanityBase'] = setSanityBase;
  const [fearBase, setFearBase] = React.useState('');
  setStateFunctions['fearBase'] = setFearBase;
  const [bodyBase, setBodyBase] = React.useState('');
  setStateFunctions['bodyBase'] = setBodyBase;
  const [sanityMod, setSanityMod] = React.useState(0);
  setStateFunctions['sanityMod'] = setSanityMod;
  const [fearMod, setFearMod] = React.useState(0);
  setStateFunctions['fearMod'] = setFearMod;
  const [bodyMod, setBodyMod] = React.useState(0);
  setStateFunctions['bodyMod'] = setBodyMod;
  const [sanity, setSanity] = React.useState(0);
  setStateFunctions['sanity'] = setSanity;
  const [fear, setFear] = React.useState(0);
  setStateFunctions['fear'] = setFear;
  const [body, setBody] = React.useState(0);
  setStateFunctions['body'] = setBody;
  const [wounds, setWounds] = React.useState(2);
  setStateFunctions['wounds'] = setWounds; 

  const [health, setHealth] = React.useState(0);
  setStateFunctions['health'] = setHealth;
  const [talent, setTalent] = React.useState('');
  setStateFunctions['talent'] = setTalent;
  const [talentDescription, setTalentDescription] = React.useState('');
  setStateFunctions['talent'] = setTalentDescription;
  const [healthDisabled, setHealthDisabled] = React.useState(false);
  setStateFunctions['health'] = setHealth;
  const [trainedSkills, setTrainedSkills] = React.useState({});
  setStateFunctions['trainedSkills'] = setTrainedSkills;
  const [expertSkills, setExpertSkills] = React.useState({});
  setStateFunctions['expertSkills'] = setExpertSkills;
  const [masterSkills, setMasterSkills] = React.useState({});
  setStateFunctions['masterSkills'] = setMasterSkills;
  const [characterSkills, setCharacterSkills] = React.useState({});
  const [houseRulesDisabled, setHouseRulesDisabled] = useState(false);
  const [classConfirmedAlerts, setClassConfirmedAlerts] = React.useState('');
  const [equipmentDisabled, setEquipmentDisabled] = React.useState(false);
  const [talentsDisabled, setTalentsDisabled] = React.useState(false);
  const [loadout, setLoadout] = React.useState([]);
  const [trinket, setTrinket] = React.useState('');
  const [patch, setPatch] = React.useState('');
  const [talents, setTalents] = React.useState([]);
  const [pdf, setPdf] = React.useState();
  const [characterSummary, setCharacterSummary] = React.useState({});
  // control variables
  const [statsGenerated, setStatsGenerated] = React.useState(false);
  const [classConfirmed, setClassConfirmed] = React.useState(false);
  const [skillsConfirmed, setSkillsConfirmed] = React.useState(false);
  const [equipmentChosen, setEquipmentChosen] = React.useState(false);
  const [talentConfirmed, setTalentConfirmed] = React.useState(false);
  const [statsVariableSkill, setStatsVariableSkill] = React.useState('');
  const [statsVariableSkillModifier, setStatsVariableSkillModifier] = React.useState(0);
  const [scientistMasterSkillConfirmed, setScientistMasterSkillConfirmed] = React.useState('');
  const [scientistMasterSkillConfirmedAlerts, setScientistMasterSkillConfirmedAlerts] = React.useState('');
  const [skillsConfirmedAlerts, setSkillsConfirmedAlerts] = React.useState('');
  const [talentConfirmedAlerts, setTalentConfirmedAlerts] = React.useState('');

  // step vars
  let step;
  step = classConfirmed ? 5 : 1;
  step = skillsConfirmed ? 6 : step;
  step = talentConfirmed ? 7 : step;

  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  });

  const onChangeHandler = (event) => {
        setStateFunctions[event.target.name](event.target.value);
  }

  const onChangeStatHandler = (event) => {
    const baseFunction = event.target.name;
    const totalFunction = baseFunction.slice(0, -4);
    const statMod = eval(totalFunction + 'Mod');
    setStateFunctions[baseFunction](event.target.value);
    setStateFunctions[totalFunction](event.target.value + statMod);
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
    switch(characterClass) {
      case 'teamster':
        if (skillType === 'trained') {
          setTeamsterOptionalExpertSkillPath(skillName, boolChecked);
        }
        break;
      case 'scientist':
        if (skillType === 'master' || skillType === 'expert') {
          setScientistMasterSkillPath(skillType, skillName, boolChecked);
        }
        break;
    }
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
    switch(characterClass) {
      case 'android':
        switch(skillType) {
          case 'trained':
            // if > 3 disable expert, if > 4 disable trained and expert 
            if (_trainedSkills.length > 3) {
              setDisabledForOptionalSkills('expert', true)
              if (_trainedSkills.length > 4) {
                setDisabledForOptionalSkills('trained', true)
              } else {
                setDisabledForOptionalSkills('trained', false)
              }      
            } else {
              setDisabledForOptionalSkills('trained', false)
              setDisabledForOptionalSkills('expert', false)
            }
            break;
          case 'expert':
            //if > 0, disabled trained and expert
            if (_expertSkills.length > 0) {
              setDisabledForOptionalSkills('expert', true)
              setDisabledForOptionalSkills('trained', true) 
            } else {
              setDisabledForOptionalSkills('trained', false)
              setDisabledForOptionalSkills('expert', false)
            }
            break;
        }
        break;
      case 'marine':
        switch(skillType) {
          case 'trained':
            // if > 2 disable expert, if > 3 disable trained and expert 
            if (_trainedSkills.length > 2) {
              setDisabledForOptionalSkills('expert', true);
              if (_trainedSkills.length > 3) {
                setDisabledForOptionalSkills('trained', true);
              } else {
                setDisabledForOptionalSkills('trained', false);
              }      
            } else {
              setDisabledForOptionalSkills('trained', false);
              setDisabledForOptionalSkills('expert', false);
            }
            break;
          case 'expert':
            //if > 0, disabled trained and expert
            if (_expertSkills.length > 0) {
              setDisabledForOptionalSkills('expert', true);
              setDisabledForOptionalSkills('trained', true) ;
            } else {
              setDisabledForOptionalSkills('trained', false);
              setDisabledForOptionalSkills('expert', false);
            }
            break;
        }
        break;
      case 'scientist':
        switch(skillType) {
          case 'master':
            // if > 0 disable 
            if (_masterSkills.length > 0) {
              setDisabledForOptionalSkills('master', true);
            } else {
              setDisabledForOptionalSkills('master', false);
            }
            break;
          case 'expert':
            //if > 0, disabled trained and expert
            if (_expertSkills.length > 0) {
              setDisabledForOptionalSkills('expert', true);
            } else {
              setDisabledForOptionalSkills('expert', false);
            }
            break;
          case 'trained':
            if (scientistMasterSkillConfirmed) {
              if (_trainedSkills.length > 1) {
                setDisabledForOptionalSkills('trained', true);
              } else {
                setDisabledForOptionalSkills('trained', false);
              }
            } else {
              if (_trainedSkills.length > 0) {
                setDisabledForOptionalSkills('trained', true);
              } else {
                setDisabledForOptionalSkills('trained', false);
              }
            }
            break;
        }
        break;
      case 'teamster':
        switch(skillType) {
          case 'trained':
            // if > 2 disable 
            if (_trainedSkills.length > 2) {
              setDisabledForOptionalSkills('trained', true);
              if (_expertSkills.length > 0) {
                setDisabledForOptionalSkills('expert', true);
              }
            } else {
              setDisabledForOptionalSkills('trained', false);
            }
            break;
          case 'expert':
            //if > 0, disabled trained and expert
            if (_expertSkills.length > 0) {
              setDisabledForOptionalSkills('expert', true);
            } else {
              setDisabledForOptionalSkills('expert', false);
            }
            break;
        }
        break;
    }
  }

  const setDisabledForOptionalSkills = (skillType, boolDisabled) => {
    const _characterSkills = characterSkills;
    const _updatedSkills = [];
    _characterSkills[skillType].forEach(skill => {
      if (skill['baseSkill'] === false && skill['checked'] === false) {
        skill['disabled'] = boolDisabled;
      }
      _updatedSkills.push(skill);

    });
    _characterSkills[skillType] = _updatedSkills;
    setCharacterSkills(_characterSkills);
  }

  const handleCharacterClassChange = (event) => {
    const currentClass = event.target.value;
    setCharacterClass(currentClass);
    const classMods = characterClasses[currentClass];
    setStatsVariableSkillModifier(classMods.variableSkillModifier);
    setStatsVariableSkill('');
    setStrengthMod(classMods.strength);
    setStrength(strengthBase + classMods.strength);
    setSpeedMod(classMods.speed);
    setSpeed(speedBase + classMods.speed);
    setIntellectMod(classMods.intellect);
    setIntellect(intellectBase + classMods.intellect);
    setCombatMod(classMods.combat);
    setCombat(combatBase + classMods.combat);
    setSanityMod(classMods.sanity);
    setSanity(sanityBase + classMods.sanity);
    setFearMod(classMods.fear);
    setFear(fearBase + classMods.fear);
    setBodyMod(classMods.body);
    setBody(bodyBase + classMods.body);
    setWounds(classMods.wounds);

    setTraumaResponse(characterClasses[currentClass]['traumaResponse']);
  };  

  const generateDiceRolls = (rolls, dieSides, indexBase) => {
    rolls = rolls !== null ? rolls : 1;
    dieSides = dieSides !== null ? dieSides : 10;
    indexBase = indexBase !== null ? indexBase : 1;
  
    const objReturn = {};
    const rollResults = [];
    let sum = 0;
    for (let i = 0; i < rolls; i++) {
      const rollResult = (Math.floor(Math.random() * dieSides) + indexBase);
      sum +=  rollResult;
      rollResults.push(rollResult)
    }
    objReturn['rolls'] = rollResults;
    objReturn['sum'] = sum;
        return objReturn;
  }

  const generateStats = () => {
    const stats = [];
    for (let i = 0; i < 4; i++) {
      const result = (generateDiceRolls(2, 10, 1));
      stats.push(result.sum + 25);
    }
    if (houseRules) {
      setStats(stats.sort());
    } else {
      setStats(stats);
      setStrengthBase(stats[0]);
      setIntellectBase(stats[1])
      setSpeedBase(stats[2])
      setCombatBase(stats[3])
    }

    setHouseRulesDisabled(true);
    setStatsDisabled(true);
    if (savesDisabled) {
      setStatsGenerated(true);
    }
  }

  const generateSaves = () => {
    const saves = [];
    for (let i = 0; i < 3; i++) {
      const result = (generateDiceRolls(2, 10, 1));
      saves.push(result.sum + 10);
    }
    if (houseRules) {
      setSaves(saves.sort());
    } else {
      setSaves(saves);
      setSanityBase(saves[0]);
      setFearBase(saves[1])
      setBodyBase(saves[2])
    }
    setHouseRulesDisabled(true);
    setSavesDisabled(true);
    if (statsDisabled) {
      setStatsGenerated(true);
    }
  }

  const generateHealth= () => {
    const result = (generateDiceRolls(1, 10, 1));
    setHealth(result.sum + 10);
    setHealthDisabled(true);
  }

  const getAvailableStats = (selectedValue) => {
        const statValues = [];
    const availStats = [...stats];
    if (parseInt(strengthBase)) {
      statValues.push(strengthBase);
    }
    if (parseInt(speedBase)) {
      statValues.push(speedBase);
    }
    if (parseInt(intellectBase)) {
      statValues.push(intellectBase);
    }
    if (parseInt(combatBase)) {
      statValues.push(combatBase);
    }

    for (let i = 0; i < statValues.length; i++) {
      const foundIndex = availStats.indexOf(statValues[i]);
      if (foundIndex !==-1) {
        availStats.splice(foundIndex, 1);
      }
    }
    if (parseInt(selectedValue)) {
      availStats.push(selectedValue);
    }

    
    return(availStats);
  }

  const getAvailableSaves = (selectedValue) => {
        const saveValues = [];
    const availSaves = [...saves];
    if (parseInt(sanityBase)) {
      saveValues.push(sanityBase);
    }
    if (parseInt(fearBase)) {
      saveValues.push(fearBase);
    }
    if (parseInt(bodyBase)) {
      saveValues.push(bodyBase);
    }

    for (let i = 0; i < saveValues.length; i++) {
      const foundIndex = availSaves.indexOf(saveValues[i]);
      if (foundIndex !==-1) {
        availSaves.splice(foundIndex, 1);
      }
    }
    if (parseInt(selectedValue)) {
      availSaves.push(selectedValue);
    }

    
    return(availSaves);
  }

  const statsVariableSkillHandler = (event) => {
    const currentSkill = event.target.value;
    const oldSkill = statsVariableSkill;
    setStatsVariableSkill(currentSkill);

    
    switch(oldSkill) {
      case 'strength':
        setStrengthMod(strengthMod - statsVariableSkillModifier);
        setStrength(strength - statsVariableSkillModifier)
        break;
      case 'speed':
        setSpeedMod(speedMod - statsVariableSkillModifier);
        setSpeed(speed - statsVariableSkillModifier);
        break;
      case 'intellect':
        setIntellectMod(intellectMod - statsVariableSkillModifier);
        setIntellect(intellect - statsVariableSkillModifier);
        break;
      case 'combat':
        setCombatMod(combatMod - statsVariableSkillModifier);
        setCombat(combat - statsVariableSkillModifier);
        break;
    }
    switch(currentSkill) {
      case 'strength':
        setStrengthMod(strengthMod + statsVariableSkillModifier);
        setStrength(strength + statsVariableSkillModifier)
        break;
      case 'speed':
        setSpeedMod(speedMod + statsVariableSkillModifier);
        setSpeed(speed + statsVariableSkillModifier);
        break;
      case 'intellect':
        setIntellectMod(intellectMod + statsVariableSkillModifier);
        setIntellect(intellect + statsVariableSkillModifier);
        break;
      case 'combat':
        setCombatMod(combatMod + statsVariableSkillModifier);
        setCombat(combat + statsVariableSkillModifier);
        break;
    }
  }

  const validateStats = () => {
    // make sure everything is chosen
    const alerts = [];

    if (characterClass === '') {
      alerts.push('select a class');
    }

    if (getAvailableStats().length > 0) {
      alerts.push('finish selecting stats');
    }

    if (getAvailableSaves().length > 0) {
      alerts.push('finish selecting saves');
    }

    if (health === 0) {
      alerts.push('roll health');
    }

    if (statsVariableSkillModifier !== 0 && statsVariableSkill === '') {
      alerts.push('select a skill to modify');
    }

        
    if (alerts.length > 0) {
      let strAlert = 'Please ';
      strAlert += alerts[0];
      if (alerts.length === 2) {
        strAlert += ', and ' + alerts[1];
      }
      if (alerts.length === 3) {
        strAlert += ', ' + alerts[1];
        strAlert += ', and ' + alerts[2];
      }
      if (alerts.length === 4) {
        strAlert += ', ' + alerts[1];
        strAlert += ', ' + alerts[2];
        strAlert += ', and ' + alerts[3];
      }
      strAlert += '.';
      setClassConfirmedAlerts(strAlert);
    } else {
      setClassConfirmedAlerts('');
      setClassConfirmed(true);
      setBaseSkills(characterClass);
      setCharacterSummary(
        {
          class: characterClasses[characterClass]['displayText'],
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
          }
        }
      );
    }
  }

  const validateSkills = () => {
        // android 3, 1 or 5, 0
    // marine  2 1 or 5, 0
    // scientist 2, 1, 1 or 2, 0, 1
    // teamster 3, 1
    let strAlert = 'something went wrong'
    const _skills = [];
    const _skillsCount = {};
    ['master', 'expert', 'trained'].forEach(skillType => {
      let count = 0;
      for (const [key, value] of Object.entries(characterSkills[skillType])) {
        if (value['checked']) {
          count++;
          _skills.push(
            {
              displayText: skillsByCategory[skillType][value['value']]['displayText'],
              description: skillsByCategory[skillType][value['value']]['description'],
              skillType: skillType,
              bonus: skillsByCategory[skillType][value['value']]['bonus'],
            }
          )
        }
      };
      _skillsCount[skillType] = count;
    });
        
    switch(characterClass) {
      case 'android':
        if (_skillsCount.trained === 3 && _skillsCount.expert === 0) {
          strAlert = 'Please choose an expert skill or 2 trained skills.';
        } else if (_skillsCount.trained === 4) {
          strAlert = 'Please choose another trained skill, or deselect a trained skill and choose an expert skill.';
        } else {
          strAlert = '';
        }
        break;
      case 'marine':
        if (_skillsCount.trained === 2 && _skillsCount.expert === 0) {
          strAlert = 'Please choose an expert skill or 2 trained skills.';
        } else if (_skillsCount.trained === 3) {
          strAlert = 'Please choose another trained skill, or deselect a trained skill and choose an expert skill.';
        } else {
          strAlert = '';
        }
        break;
      case 'scientist':
        if (_skillsCount.trained !== 2) {
          strAlert = 'Please choose a trained skill.';
        } else {
          strAlert = '';
        }
        break;
      case 'teamster':
        if (_skillsCount.trained === 2 && _skillsCount.expert === 0) {
          strAlert = 'Please choose a tained skill and an expert skill.';
        } else if (_skillsCount.trained === 2 && _skillsCount.expert === 1) {
          strAlert = 'Please choose a trained skill.';
        } else if (_skillsCount.trained === 3 && _skillsCount.expert === 0) {
          strAlert = 'Please choose an expert skill.';
        } else {
          strAlert = '';
        }
        break;
    }

    
    if (strAlert !=='') {
      setSkillsConfirmedAlerts(strAlert);
    } else {
      setSkillsConfirmed(true);
      const _characterSummary = characterSummary;
      _characterSummary['skills'] = _skills;
      setCharacterSummary(_characterSummary);
    }
  }

  const validateTalent = () => {
    if (talent !== '') {
      setTalentConfirmed(true);
      const _characterSummary = characterSummary;
      _characterSummary['talent'] = {name: talent, description: talentDescription};
      switch(talent) {
        case 'Industrial Chassis':
        case 'Mycotoxin-Induced Analgesia':
          _characterSummary['health'] = {health: 20, wounds: wounds};
          setHealth(20);
          break;
        case 'Sports Scholarship':
        case 'Specimen':
          _characterSummary['health'] = {health: health, wounds: 3};
          setWounds(3);
          break;           
      }
      setCharacterSummary(_characterSummary);
      generatePdf();
    } else {
      setTalentConfirmedAlerts('Please select a talent');
    }

  }

  const validateScientistMasterSkill = () => {
    // make sure everything is chosen
    let strAlert = '';
    let found = false;
    let trainedSkill;
    //let sophontology = false;
    // need to loop through and find checked
        ['trained', 'expert', 'master'].forEach(skillType => {
      found = false;
      for (const [key, value] of Object.entries(characterSkills[skillType])) {
        /*
        if (value['value'] === 'sophontology') {
          sophontology = true;
        }
        */
        if (value['checked']) {
          found = true;
          if (skillType === 'trained') {
            trainedSkill=value['value'];
          }
        }
      };
      if (!found) {
        strAlert = 'Please choose a' + (skillType === 'expert' ? 'n ': ' ') + skillType + ' skill';
      }
    });

    // override expert skill for sophontology
    //if (sophontology && strAlert.indexOf('expert') > 0 && !houseRules) {
    //  strAlert = '';
    //}
    
    if (strAlert !=='') {
      setScientistMasterSkillConfirmedAlerts(strAlert);
    } else {
      setScientistMasterSkillConfirmedAlerts('');
      setScientistMasterSkillConfirmed(true)
      // set trained skill options for bonus skill
      const _characterSkills = characterSkills;
      const _trainedSkills =[];
      for (const [key, value] of Object.entries(skillsByCategory['trained'])) {
                if (key !== trainedSkill) {
          _trainedSkills.push(
            {
              displayText: skillsByCategory['trained'][key]['displayText'],
              value: key,
              disabled: false,
              checked: false,
              toolTip:  skillsByCategory['trained'][key]['description'],
              name: 'trained-' + key,
              baseSkill: false
            }
          )
        } else {
          _trainedSkills.push(
            {
              displayText: skillsByCategory['trained'][key]['displayText'],
              value: key,
              disabled: true,
              checked: true,
              toolTip:  skillsByCategory['trained'][key]['description'],
              name: 'trained-' + key,
              baseSkill: false
            }
          )
        }
      }
      _characterSkills['trained'] = _trainedSkills;
      setCharacterSkills(_characterSkills);
    }
  }

  const setBaseSkills = (characterClass) => {
    const skills = {};
    ['trained', 'expert','master'].forEach(skillType => {
      skills[skillType] = [];
      for (const [key, boolBaseSkill] of Object.entries(characterClasses[characterClass][skillType])) {
        skills[skillType].push(
          {
            displayText: skillsByCategory[skillType][key]['displayText'],
            value: key,
            disabled: boolBaseSkill,
            checked: boolBaseSkill,
            toolTip:  skillsByCategory[skillType][key]['description'],
            name: skillType + '-' + key,
            baseSkill: boolBaseSkill
          }
        )
      }
    });
        setCharacterSkills(skills);
      }

  const setTeamsterOptionalExpertSkillPath = (skillName, boolChecked) => {
    const _characterSkills = characterSkills;
    const _expertSkills = _characterSkills['expert'];
    const newExpertSkillOptions = GetExpertSkillsByTrainedSkill(skillName);
    const _updatedSkills = [];
    let found;
        if (boolChecked) {
      // add expert skill option if not already there
      newExpertSkillOptions.forEach(skill => {
        found = false;
        _expertSkills.forEach(expertSkill => {
          if (skill === expertSkill['value']) {
            found = true;
          }
        });
        if (!found) {
          _expertSkills.push(
            {
              displayText: skillsByCategory['expert'][skill]['displayText'],
              value: skill,
              disabled: false,
              checked: false,
              toolTip:  skillsByCategory['expert'][skill]['description'],
              name: 'expert-' + skill,
              baseSkill: false
            }
          )          
        }
      });
      _characterSkills['expert'] = _expertSkills;
    } else {
      // go back to default expert skill options
      for (const [key] of Object.entries(characterClasses['teamster']['expert'])) {
        _expertSkills.forEach(skill => {
          if (skill['value'] === key) {
            _updatedSkills.push(skill);
          }
        });
      };
      _characterSkills['expert'] = _updatedSkills;
    }
    setCharacterSkills(_characterSkills);
  }

  const setScientistMasterSkillPath = (skillType, skillName, boolChecked) => {
    const _characterSkills = characterSkills;
    let childSkillType;
    const _skillOptions = [];
    let newSkillOptions = [];
    if (boolChecked) {
      if (skillName === 'sophontology') {
        if (houseRules) {
          _characterSkills['expert'] = [{
            displayText: skillsByCategory['expert']['psychology']['displayText'],
            value: 'psychology',
            disabled: true,
            checked: true,
            toolTip: skillsByCategory['expert']['psychology']['description'],
            name: 'expert-psychology',
            baseSkill: false        
          }];
          _characterSkills['trained'] = [{
            displayText: skillsByCategory['trained']['linguistics']['displayText'],
            value: 'linguistics',
            disabled: true,
            checked: true,
            toolTip: skillsByCategory['trained']['linguistics']['description'],
            name: 'trained-linguistics',
            baseSkill: false        
          }];
        } else {
          _characterSkills['expert'] = [];
          _characterSkills['trained'] = [{
            displayText: skillsByCategory['trained']['linguistics']['displayText'],
            value: 'linguistics',
            disabled: true,
            checked: true,
            toolTip: skillsByCategory['trained']['linguistics']['description'],
            name: 'trained-linguistics',
            baseSkill: false        
          }];
        }
        setCharacterSkills(_characterSkills);
      } else {
        switch(skillType) {
          case 'master':
            newSkillOptions = GetExpertSkillsByMasterSkill(skillName);
            childSkillType = 'expert'
            _characterSkills['trained'] = [];
            break;
          case 'expert':
            newSkillOptions = GetTrainedSkillsByExpertSkill(skillName);
            childSkillType = 'trained'
            break;
        }

        if (newSkillOptions.length === 1) {
          newSkillOptions.forEach(skill => {
            _skillOptions.push(
              {
                displayText: skillsByCategory[childSkillType][skill]['displayText'],
                value: skill,
                disabled: true,
                checked: true,
                toolTip: skillsByCategory[childSkillType][skill]['description'],
                name: childSkillType +'-' + skill,
                baseSkill: false
              }
            )
          });
          _characterSkills[childSkillType] = _skillOptions;
          setCharacterSkills(_characterSkills);
          if (childSkillType === 'expert') {
            setScientistMasterSkillPath('expert', _skillOptions[0]['value'], true)
          }
        } else {
          newSkillOptions.forEach(skill => {
            _skillOptions.push(
              {
                displayText: skillsByCategory[childSkillType][skill]['displayText'],
                value: skill,
                disabled: false,
                checked: false,
                toolTip: skillsByCategory[childSkillType][skill]['description'],
                name: childSkillType + '-' + skill,
                baseSkill: false
              }
            )
          });
        }
        _characterSkills[childSkillType] = _skillOptions;
        setCharacterSkills(_characterSkills);
      }
    } else {
      switch(skillType) {
        case 'master':
          _characterSkills['expert'] = [];
          _characterSkills['trained'] = [];
          break;
        case 'expert':
          _characterSkills['trained'] = [];
          break;
      }
      setCharacterSkills(_characterSkills);
    }
  }

  const getVersion = () => {
    let version;
    if (houseRules) {
      version = 'houseRules.1e.0'
    } else {
      version = '1e.v10'
    }
    return version;
  }

  const generateEquipment = () => {
    setEquipmentDisabled(true);
    const loadout = GetLoadout(characterClass);
    const trinket = GetTrinket();
    const patch = GetPatch();
                setLoadout(loadout);
    setTrinket(trinket);
    setPatch(patch);
    setEquipmentChosen(true);
    const _characterSummary = characterSummary;
    _characterSummary['loadout']  = loadout;
    _characterSummary['trinket']  = trinket;
    _characterSummary['patch']  = patch;
    _characterSummary['version'] = getVersion();
    setCharacterSummary(_characterSummary);
    if (houseRules) {
      _characterSummary['resolve'] = true;
      setCharacterSummary(_characterSummary);
    } else {
      _characterSummary['resolve'] = false;
      _characterSummary['talent']  = null;
      generatePdf();
    }
  }
  
  const generateTalents = () => {
    setTalentsDisabled(true);
    const talents = GetTalents(characterClass);
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
      arrSkills.map(({displayText, value, skillType, modifier, toolTip}, index) => (
        <Grid sm={12} md={9}  key={'0' + value + index} container rowSpacing={1} flex={true}>
          <Grid sm={6} key={'1' + value + index}>
            <Tooltip title={toolTip} key={value} placement="right">
              <Typography>{displayText}</Typography>
            </Tooltip>
          </Grid>
          <Grid key={'2' + value + index} sm={3}>
            <Typography style={{textAlign: "center"}}>{modifier}</Typography>
          </Grid>
          <Grid key={'3' + value + index} sm={3}>
            <Typography style={{textAlign: "center"}}>{skillType}</Typography>
          </Grid>
        </Grid>
      ))
    )
  }

  const generatePdf = () => {
    const document = GenerateCharacterPdf(characterSummary);
        setPdf(document);
  }

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none'} }}>
        <Typography>The webmaster hates phones!<br />For now, this page requires a horizontal resolution of at least 600 pixels to render properly.</Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
        <Grid container rowSpacing={1} alignItems="top">
          {/* House rules */}
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography  sx={{ display: { xs: 'none', sm: 'block'} }}>
              The Mothership character generator guides you through creating a character, and generates a pdf file for download.<br />
              Use the 'Rules' dropdown to choose between the Mothership 1e rules (Standard), and 'House Rules'.<br />
              The 'House Rules' allow you to select which roll results to use in your Stats and Saves, and generate a 'Talent' selection.<br />
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

        {!classConfirmed && (
          <Grid container rowSpacing={1} alignItems={"center"}>
            {/* Step 1 - Roll Stats and Saves */}
            <Grid xs={12} container rowSpacing={1}>
              <Grid xs={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
                <Typography variant="h6">Step {step++} - Generate Stats</Typography>
              </Grid>
            </Grid>

            {/* Stats and Saves Rolls */}

            <Grid sm={3} md={2}>
              <Button
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => generateStats()}
                disabled={statsDisabled}
              >
                <Typography sx={{mx: 1}}>Roll Stats</Typography>{<CasinoIcon />}
              </Button>
            </Grid>
            <Grid sm={2} md={1}>
              <Typography>{stats.toString()}</Typography>
            </Grid>
            <Grid sm={3} md={2}>
              <Button
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => generateSaves()}
                disabled={savesDisabled}
              >
                <Typography sx={{mx: 1}}>Roll Saves</Typography>{<CasinoIcon />}
              </Button>
            </Grid>
            <Grid sm={2} md={1}>
              <Typography>{saves.toString()}</Typography>
            </Grid>
            <Grid sm={2} md={6}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}></Typography>
            </Grid>
          </Grid>
        )}

        {!classConfirmed && statsGenerated && (
          <Grid container rowSpacing={1}>
            {/* Step 2 - Choose a Class */}
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Choose a Class</Typography>
            </Grid>

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
      )}

        {/* CLASS */}
        {classConfirmed && statsGenerated && (
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
        )}

        {/* Step 3 - Assign Rolls */}
        {houseRules && !classConfirmed && statsGenerated && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Assign Rolls</Typography>
            </Grid>

            <Grid sm={12} md={4} alignItems={"top"}>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
                  <Typography variant="h6"color={secondary} >STATS</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}> 
                {/* Headings */}
                <Grid sm={6} sx={{ minWidth: 1/4 }}>
                  <Typography></Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >Roll</Typography>
                </Grid>
                <Grid sm={2} flex={1} style={{textAlign: "center"}}>
                  <Typography>Mod</Typography>
                </Grid>
                <Grid sm={2} flex={1} style={{textAlign: "center"}}>
                  <Typography>Total</Typography>
                </Grid>
              </Grid>
              {/* Stats */}
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>STRENGTH</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="strengthBase"
                      id="strengthBase"
                      value={strengthBase}
                      onChange={onChangeStatHandler}
                      name="strengthBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableStats(strengthBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{strengthMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{strength}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>SPEED</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="speedBase"
                      id="speedBase"
                      value={speedBase}
                      onChange={onChangeStatHandler}
                      name="speedBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableStats(speedBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{speedMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{speed}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>INTELLECT</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="intellectBase"
                      id="intellectBase"
                      value={intellectBase}
                      onChange={onChangeStatHandler}
                      name="intellectBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableStats(intellectBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{intellectMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{intellect}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>COMBAT</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="combatBase"
                      id="combatBase"
                      value={combatBase}
                      onChange={onChangeStatHandler}
                      name="combatBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableStats(combatBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{combatMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{combat}</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* SAVES */}
            <Grid sm={12} md={4} alignItems={"top"}>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
                  <Typography variant="h6" color={secondary} >SAVES</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} >
                {/* Headings */}
                <Grid sm={6}>
                  <Typography></Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >Roll</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>Mod</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>Total</Typography>
                </Grid>
              </Grid>
              {/* Saves */}
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>SANITY</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="sanityBase"
                      id="sanityBase"
                      value={sanityBase}
                      onChange={onChangeStatHandler}
                      name="sanityBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableSaves(sanityBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{sanityMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{sanity}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>FEAR</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="fearBase"
                      id="fearBase"
                      value={fearBase}
                      onChange={onChangeStatHandler}
                      name="fearBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableSaves(fearBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{fearMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{fear}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9} alignItems="center">
                <Grid sm={6}>
                  <Typography>BODY</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <FormControl variant="standard" style={{ textAlign: "left" }}>
                    <Select
                      labelId="bodyBase"
                      id="bodyBase"
                      value={bodyBase}
                      onChange={onChangeStatHandler}
                      name="bodyBase"
                    >
                      <MenuItem value="">
                        ---
                      </MenuItem>
                      {getAvailableSaves(bodyBase).map((value, index) => (
                        <MenuItem key={index} value={value}><Typography>{value}</Typography></MenuItem>
                      ))}
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{bodyMod}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>{body}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        {((houseRules && classConfirmed) || (!houseRules && statsGenerated)) && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} md={4} alignItems={"top"}>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                <Grid sm={12}>
                  <Typography variant="h6"color={secondary} >STATS</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                {/* Headings */}
                <Grid sm={4}>
                  <Typography></Typography>
                </Grid>
                <Grid sm={2}  style={{textAlign: "center"}}>
                  <Typography >Roll</Typography>
                </Grid>
                <Grid sm={2}  style={{textAlign: "center"}}>
                  <Typography>Mod</Typography>
                </Grid>
                <Grid sm={4}  style={{textAlign: "center"}}>
                  <Typography>Total</Typography>
                </Grid>
              </Grid>
              {/* Stats */}
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>STRENGTH</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{strengthBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{strengthMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{strength}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>SPEED</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{speedBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{speedMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{speed}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>INTELLECT</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{intellectBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{intellectMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{intellect}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>COMBAT</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{combatBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{combatMod}</Typography>
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
              <Grid display={"flex"} sm={12} md={9} >
                {/* Headings */}
                <Grid sm={4}>
                  <Typography></Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >Roll</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography>Mod</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>Total</Typography>
                </Grid>
              </Grid>
              {/* Saves */}
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>SANITY</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{sanityBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{sanityMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{sanity}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>FEAR</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{fearBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{fearMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{fear}</Typography>
                </Grid>
              </Grid>
              <Grid display={"flex"} sm={12} md={9}>
                <Grid sm={4}>
                  <Typography>BODY</Typography>
                </Grid>
                <Grid sm={2}style={{textAlign: "center"}}>
                  <Typography >{bodyBase}</Typography>
                </Grid>
                <Grid sm={2} style={{textAlign: "center"}}>
                  <Typography >{bodyMod}</Typography>
                </Grid>
                <Grid sm={4} style={{textAlign: "center"}}>
                  <Typography>{body}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        {(statsVariableSkillModifier !== 0) && !classConfirmed && statsGenerated && (
          <Grid container rowSpacing={1} alignItems={"center"}>
            <Grid sm={12} md={4} style={{textAlign: "left"}} sx={{ my: 0 }}>
              <Typography>
                {characterClasses[characterClass]['displayText']} modifier: select a skill to
                {(characterClass === 'android' ? ' reduce by ' : ' increase by ')} 
                {Math.abs(statsVariableSkillModifier)}
              </Typography>
            </Grid>
            <Grid sm={12} md={4}>
              <FormControl variant="standard" style={{textAlign: "left", minWidth: 120}}>
                <Select
                  labelId="statsVariableSkill"
                  id="statsVariableSkill"
                  value={statsVariableSkill}
                  onChange={statsVariableSkillHandler}
                  name="statsVariableSkill"
                >
                  {statsSelection.map(({displayText, value}) => (
                    <MenuItem value={value} key={value} ><Typography>{displayText}</Typography></MenuItem>
                  ))}
                </Select>
              </FormControl> 
            </Grid>
          </Grid>     
        )}

        {/* Step 4 - Roll Health */}
        {!classConfirmed && statsGenerated && (
          <Grid container rowSpacing={1} alignItems={"center"}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Generate Health</Typography>
            </Grid>

            {/* Health */}
            <Grid sm={2} md={1}>
              <Typography>WOUNDS</Typography>
            </Grid>
            <Grid sm={2} md={1}>
              <Typography>{wounds}</Typography>
            </Grid>
            <Grid sm={3} md={2}>
              <Button
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => generateHealth()}
                disabled={healthDisabled}
              >
                <Typography sx={{mx: 1}}>Roll Health</Typography>{<CasinoIcon />}
              </Button>
            </Grid>
            <Grid sm={2} md={1}>
              <Typography>{health.toString()}</Typography>
            </Grid>
            <Grid sm={3} md={7}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}></Typography>
            </Grid>
          </Grid>
        )}

        {/* Step 5 - Confirm Class and Stats */}
        {!classConfirmed && statsGenerated && (
          <Grid container rowSpacing={1} alignItems={"center"}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Confirm Class and Stats</Typography>
            </Grid>

            <Grid sm={3} md={2}>
              <Button
                variant="outlined"
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => (validateStats())}
              >
                <Typography>Confirm</Typography>
              </Button>
            </Grid>
            <Grid sm={9} md={10}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{classConfirmedAlerts}</Typography>
            </Grid>
          </Grid>
        )}

        {/* Step 5 - Choose Skills */}
        {classConfirmed && !skillsConfirmed && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - {characterClasses[characterClass]['bonus']}</Typography>
            </Grid>
          </Grid>
        )}

        {classConfirmed && !skillsConfirmed && characterClass !== 'scientist' && (
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
            <Grid sm={12} md={4} sx={{ display: { xs: 'none', sm: 'flex'} }}></Grid>
            <Grid sm={3} md={2}>
              <Button
                variant="outlined"
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => (validateSkills())}
              >
                <Typography>Confirm</Typography>
              </Button>
            </Grid>
            <Grid sm={9} md={10}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{skillsConfirmedAlerts}</Typography>
            </Grid>
          </Grid>
        )}

        {classConfirmed && !skillsConfirmed && characterClass === 'scientist' && !scientistMasterSkillConfirmed && (
          <Grid container rowSpacing={1}>
            <Grid sm={12}>
              <Typography>Choose a MASTER skill and prerequisites</Typography>
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
            {/* TRAINED SKILLS */}
            <Grid sm={12} md={4} alignItems={"top"}>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                <Grid sm={12}>
                  <Typography variant="h6" color={secondary} >TRAINED</Typography>
                </Grid>
              </Grid>
              <Grid sm={12}style={{textAlign: "left"}} alignItems={"center"}>
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

            <Grid sm={3} md={2}>
              <Button
                variant="outlined"
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => (validateScientistMasterSkill())}
              >
                <Typography>Confirm</Typography>
              </Button>
            </Grid>
            <Grid sm={9} md={10}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{scientistMasterSkillConfirmedAlerts}</Typography>
            </Grid>
          </Grid>
        )}

        {classConfirmed && !skillsConfirmed && characterClass === 'scientist' && scientistMasterSkillConfirmed && (
          <Grid container rowSpacing={1} alignItems={"center"}>
            <Grid sm={12}>
              <Typography>Choose a bonus TRAINED skill</Typography>
            </Grid>
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
            <Grid sm={12} md={8} sx={{ display: { xs: 'none', sm: 'flex'} }}></Grid>

            <Grid sm={3} md={2}>
              <Button
                variant="outlined"
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => (validateSkills())}
              >
                <Typography>Confirm</Typography>
              </Button>
            </Grid>
            <Grid sm={9} md={10}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{skillsConfirmedAlerts}</Typography>
            </Grid>
          </Grid>
        )}

        {skillsConfirmed && !talentConfirmed && houseRules && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} md={4} alignItems={"top"}>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true} sx={{ backgroundColor: primary , my: 1}}>
                <Grid sm={12}>
                  <Typography variant="h6"color={secondary} >SKILLS</Typography>
                </Grid>
              </Grid>
              <Grid sm={12} md={9} container rowSpacing={1} flex={true}>           
                <Grid sm={6}>
                  <Typography>Skill</Typography>
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
          </Grid>
        )}

        {skillsConfirmed && talentConfirmed && houseRules && (
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

        {skillsConfirmed && !houseRules && (
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

        {/* Step 6 - Roll Equipment */}
        {!equipmentChosen && classConfirmed && skillsConfirmed && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Roll Equipment</Typography>
            </Grid>

            <Grid sm={3} md={2}>
              <Button
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => generateEquipment()}
                disabled={equipmentDisabled}
              >
                <Typography sx={{mx: 1}}>Roll Equipment</Typography>{<CasinoIcon />}
              </Button>
            </Grid>
            <Grid sm={10} md={11}>
                <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}></Typography>
            </Grid>
          </Grid>
        )}

        {equipmentChosen && classConfirmed && (
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
        )}

        {/* Step 6 - Choose Talent */}
        {houseRules && !talentConfirmed && classConfirmed && skillsConfirmed && equipmentChosen && (
          <Grid container rowSpacing={1}>
            <Grid sm={12} sx={{borderBottom: 1, my: 1, display: { xs: 'none', sm: 'flex'}}}>
              <Typography variant="h6">Step {step++} - Choose One Talent</Typography>
            </Grid>
            <Grid sm={3} md={2}>
              <Button
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => generateTalents()}
                disabled={talentsDisabled}
              >
                <Typography sx={{mx: 1}}>Roll Talents</Typography>{<CasinoIcon />}
              </Button>
            </Grid>
            <Grid sm={10} md={11}>
                <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}></Typography>
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

            <Grid sm={3} md={2}>
              <Button
                variant="outlined"
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => (validateTalent())}
              >
                <Typography>Confirm</Typography>
              </Button>
            </Grid>
            <Grid sm={9} md={10}>
              <Typography sx={{ display: { xs: 'none', sm: 'flex'} }}>{talentConfirmedAlerts}</Typography>
            </Grid>
          </Grid>
        )}
        {/* Step 6 - Choose Talent */}
        {((houseRules && talentConfirmed) || !houseRules) && classConfirmed && skillsConfirmed && equipmentChosen && (
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
        )}
        <div  ref={bottomRef} />
      </Box>
    </Box>
  );
}
export default CharacterGenerator; 