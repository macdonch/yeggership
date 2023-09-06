import PieceByPiece from '../content/pieceByPiece';
import TerminalDelays from '../content/terminalDelays';

const GetResources = () => {
    const resources = [
        {displayText: 'Piece By Piece', key: 'piecebypiece'},
        {displayText: 'Terminal Delays', key: 'terminaldelays'}
    ]
    return resources;
}

const GetResourceContent = (key) => {
    const content = {
        piecebypiece: PieceByPiece,
        terminaldelays: TerminalDelays
    }
    return content[key];
}

export { GetResources, GetResourceContent }