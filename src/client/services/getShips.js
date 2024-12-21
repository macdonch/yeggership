import Agamemnon from '../content/agamemnon';
import Pharaon from '../content/pharaon';
import ShipsHome from '../content/shipsHome';

const GetShips = () => {
    const resources = [
        {displayText: 'Registry', key: 'shipsHome'},
        {displayText: 'Agamemnon', key: 'agamemnon'},
        {displayText: 'Pharaon', key: 'pharaon'}
    ]
    return resources;
}

const GetShipContent = (key) => {
    const content = {
        shipsHome: ShipsHome,
        agamemnon: Agamemnon,
        pharaon: Pharaon,
    }
    return content[key];
}

export { GetShips, GetShipContent }