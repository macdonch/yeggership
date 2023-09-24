import PieceByPiece from '../content/pieceByPiece';
import TerminalDelays from '../content/terminalDelays';
import ResourcesHome from '../content/resourcesHome';
import FaustusSector from '../content/faustusSector';
import HouseRules from '../content/houseRules';
import Terraforming from '../content/terraforming';
import Hyperspace from '../content/hyperspace';
import ClawsOut from '../content/clawsOut';

const GetResources = () => {
    const resources = [
        {displayText: 'Home', key: 'resourcesHome'},
        {displayText: 'Campaign Setting', key: 'faustus'},
        {displayText: 'House Rules', key: 'houserules'},
        {displayText: 'Hyperspace', key: 'hyperspace'},
        {displayText: 'Terraforming', key: 'terraforming'},
        {displayText: 'Claws Out', key: 'clawsout'},
        {displayText: 'Piece By Piece', key: 'piecebypiece'},
        {displayText: 'Terminal Delays', key: 'terminaldelays'}
    ]
    return resources;
}

const GetResourceContent = (key) => {

    const content = {
        resourcesHome: ResourcesHome,
        faustus: FaustusSector,
        clawsout: ClawsOut,
        piecebypiece: PieceByPiece,
        terminaldelays: TerminalDelays,
        houserules: HouseRules,
        terraforming: Terraforming,
        hyperspace: Hyperspace
    }
    return content[key];
}

export { GetResources, GetResourceContent }