import PieceByPiece from '../content/pieceByPiece';
import TerminalDelays from '../content/terminalDelays';
import ResourcesHome from '../content/resourcesHome';
import FaustusSector from '../content/faustusSector';
import HouseRules from '../content/houseRules';
import Terraforming from '../content/terraforming';
import Hyperspace from '../content/hyperspace';
import ClawsOutResources from '../content/clawsOutResources';
import Ypsilon14 from '../content/ypsilon14'
import ChariotOfTheGods from '../content/chariotOfTheGods'

const GetResources = () => {
    const resources = [
        {displayText: 'Landing Zone', key: 'resourcesHome'},
        {displayText: 'Campaign Setting', key: 'faustus'},
        {displayText: 'House Rules', key: 'houserules'},
        {displayText: 'Hyperspace', key: 'hyperspace'},
        {displayText: 'Terraforming', key: 'terraforming'},
        {displayText: 'Chariot of the Gods', key: 'chariotOfTheGods'},
        {displayText: 'Claws Out', key: 'clawsout'},
        {displayText: 'Piece By Piece', key: 'piecebypiece'},
        {displayText: 'Terminal Delays', key: 'terminaldelays'},
        {displayText: 'Ypsilon 14', key: 'ypsilon14'}
    ]
    return resources;
}

const GetResourceContent = (key) => {

    const content = {
        resourcesHome: ResourcesHome,
        faustus: FaustusSector,
        clawsout: ClawsOutResources,
        piecebypiece: PieceByPiece,
        terminaldelays: TerminalDelays,
        houserules: HouseRules,
        terraforming: Terraforming,
        hyperspace: Hyperspace,
        ypsilon14: Ypsilon14,
        chariotOfTheGods: ChariotOfTheGods
    }
    return content[key];
}

export { GetResources, GetResourceContent }