import PieceByPiece from '../content/pieceByPiece';
import TerminalDelays from '../content/terminalDelays';
import ResourcesHome from '../content/resourcesHome';
import FaustusSector from '../content/faustusSector';
import HouseRules from '../content/houseRules';
import Terraforming from '../content/terraforming';

const GetResources = () => {
    const resources = [
        {displayText: 'Home', key: 'resourcesHome'},
        {displayText: 'Campaign Setting', key: 'faustus'},
        {displayText: 'House Rules', key: 'houserules'},
        {displayText: 'Terraforming', key: 'terraforming'},
        {displayText: 'Piece By Piece', key: 'piecebypiece'},
        {displayText: 'Terminal Delays', key: 'terminaldelays'}
    ]
    return resources;
}

const GetResourceContent = (key) => {
    const content = {
        resourcesHome: ResourcesHome,
        faustus: FaustusSector,
        piecebypiece: PieceByPiece,
        terminaldelays: TerminalDelays,
        houserules: HouseRules,
        terraforming: Terraforming
    }
    return content[key];
}

export { GetResources, GetResourceContent }