import React from "react";
/*
const [stats, setStats] = React.useState([]);
const [statsDisabled, setStatsDisabled] = React.useState(false);
const [saves, setSaves] = React.useState('');
const [savesDisabled, setSavesDisabled] = React.useState(false);
const [charClass, setCharClass] = React.useState('');
const [strengthBase, setStrengthBase] = React.useState();
const [speedBase, setSpeedBase] = React.useState();
const [intellectBase, setIntellectBase] = React.useState();
const [combatBase, setCombatBase] = React.useState();
const [strengthMod, setStrengthMod] = React.useState();
const [speedMod, setSpeedMod] = React.useState();
const [intellectMod, setIntellectMod] = React.useState();
const [combatMod, setCombatMod] = React.useState();
const [strength, setStrength] = React.useState();
const [speed, setSpeed] = React.useState();
const [intellect, setIntellect] = React.useState();
const [combat, setCombat] = React.useState();
const [sanityBase, setSanityBase] = React.useState();
const [fearBase, setFearBase] = React.useState();
const [bodyBase, setBodyBase] = React.useState();
const [sanityMod, setSanityMod] = React.useState();
const [fearMod, setFearMod] = React.useState();
const [bodyMod, setBodyMod] = React.useState();
const [sanity, setSanity] = React.useState();
const [fear, setFear] = React.useState();
const [body, setBody] = React.useState();
const [wounds, setWounds] = React.useState();
*/

const useHouseRules = () => {
    const [houseRules, setHouseRules] = React.useState(true);
    let returnValue;
    if (undefined === houseRules) {
        setHouseRules(true);
        returnValue = true;
    } else {
        returnValue = houseRules;
    }
        return returnValue;
}
const HandleHouseRulesChange = (event) => {
    const [houseRules, setHouseRules] = React.useState();
    setHouseRules(event.target.value);
}

const HandleCharClassChange = (event) => {
    const [charClass, setCharClass] = React.useState('');
    const [strengthMod, setStrengthMod] = React.useState();
    const [speedMod, setSpeedMod] = React.useState();
    const [intellectMod, setIntellectMod] = React.useState();
    const [combatMod, setCombatMod] = React.useState();
    const [sanityMod, setSanityMod] = React.useState();
    const [fearMod, setFearMod] = React.useState();
    const [bodyMod, setBodyMod] = React.useState();
    const [wounds, setWounds] = React.useState();
    setCharClass(event.target.value);
    switch(event.target.value) {
      case 'android':
        setStrengthMod(0);
        setSpeedMod(0);
        setIntellectMod(20);
        setCombatMod(0);
        setSanityMod(0);
        setFearMod(60);
        setBodyMod(0);
        setWounds(3);
        break;
      case 'marine':
        setStrengthMod(0);
        setSpeedMod(0);
        setIntellectMod(0);
        setCombatMod(10);
        setSanityMod(0);
        setFearMod(10);
        setBodyMod(10);
        setWounds(3);
        break;
      case 'scientist':
        setStrengthMod(0);
        setSpeedMod(0);
        setIntellectMod(10);
        setCombatMod(0);
        setSanityMod(30);
        setFearMod(0);
        setBodyMod(0);
        setWounds(2);
        break;
      case 'teamster':
        setStrengthMod(5);
        setSpeedMod(5);
        setIntellectMod(5);
        setCombatMod(5);
        setSanityMod(10);
        setFearMod(10);
        setBodyMod(10);
        setWounds(2);
        break;
    }
  };

  const HandleStrengthChange = (event) => {
    const [strengthBase, setStrengthBase] = React.useState();
    const [strength, setStrength] = React.useState();
    const [strengthMod, setStrengthMod] = React.useState();
    setStrengthBase(event.target.value);
    setStrength(event.target.value + strengthMod);
  };

  const HandleSpeedChange = (event) => {
    const [speedBase, setSpeedBase] = React.useState();
    const [speed, setSpeed] = React.useState();
    const [speedMod, setSpeedMod] = React.useState();
    setSpeedBase(event.target.value);
    setSpeed(event.target.value + speedMod);
  };

  const HandleIntellectChange = (event) => {
    const [intellectBase, setIntellectBase] = React.useState();
    const [intellect, setIntellect] = React.useState();
    const [intellectMod, setIntellectMod] = React.useState();
    setIntellectBase(event.target.value);
    setIntellect(event.target.value + intellectMod);
  };

  const HandleCombatChange = (event) => {
    const [combatBase, setCombatBase] = React.useState();
    const [combat, setCombat] = React.useState();
    const [combatMod, setCombatMod] = React.useState();
    setCombatBase(event.target.value);
    setCombat(event.target.value + combatMod);
  };

  const GenerateDiceRolls = (rolls, dieSides, indexBase) => {
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

  const GenerateStats = () => {
    const [stats, setStats] = React.useState([]);
    const [statsDisabled, setStatsDisabled] = React.useState(false);
    const newStats = [];
    for (let i = 0; i < 4; i++) {
      const result = (GenerateDiceRolls(2, 10, 1));
      newStats.push(result.sum + 25);
    }
        setStats(newStats.sort());
    setStatsDisabled(true);
  }

  const GenerateSaves = () => {
    const [saves, setSaves] = React.useState('');
    const [savesDisabled, setSavesDisabled] = React.useState(false);
    const newSaves = [];
    for (let i = 0; i < 3; i++) {
      const result = (GenerateDiceRolls(2, 10, 1));
      newSaves.push(result.sum + 10);
    }
        setSaves(newSaves.sort());
    setSavesDisabled(true);
  }

  const GetAvailStats = (selectedValue) => {
        const [stats, setStats] = React.useState([]);
    const [strengthBase, setStrengthBase] = React.useState();
    const [speedBase, setSpeedBase] = React.useState();
    const [intellectBase, setIntellectBase] = React.useState();
    const [combatBase, setCombatBase] = React.useState();
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
      if (foundIndex != -1) {
        availStats.splice(foundIndex, 1);
      }
    }
    if (parseInt(selectedValue)) {
      availStats.push(selectedValue);
    }

    
    return(availStats);
  }

  export {
    useHouseRules,
    HandleHouseRulesChange,
    HandleCharClassChange,
    HandleStrengthChange,
    HandleSpeedChange,
    HandleIntellectChange,
    HandleCombatChange,
    GenerateDiceRolls,
    GenerateStats,
    GenerateSaves,
    GetAvailStats
  }