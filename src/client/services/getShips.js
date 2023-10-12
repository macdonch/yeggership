import Agamemnon from '../content/agamemnon';
import ShipsHome from '../content/shipsHome';

const GetShips = () => {
    const resources = [
        {displayText: 'Registry', key: 'shipsHome'},
        {displayText: 'Agamemnon', key: 'agamemnon'}
    ]
    return resources;
}

const GetShipContent = (key) => {
    const content = {
        shipsHome: ShipsHome,
        agamemnon: Agamemnon
    }
    return content[key];
}

export { GetShips, GetShipContent }