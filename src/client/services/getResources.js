import PieceByPiece from '../content/pieceByPiece';
import TerminalDelays from '../content/terminalDelays';
import ResourcesHome from '../content/resourcesHome';
import FaustusSector from '../content/faustusSector';

const GetResources = () => {
    const resources = [
        {displayText: 'Home', key: 'resourcesHome'},
        {displayText: 'Campaign Setting', key: 'faustus'},
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
        terminaldelays: TerminalDelays
    }
    return content[key];
}

export { GetResources, GetResourceContent }