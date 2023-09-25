import Rutger from '../content/rutger';
import OldBen from '../content/oldBen';
import CharactersHome from '../content/charactersHome';

const GetCharacters = () => {
    const resources = [
        {displayText: 'Directory', key: 'charactersHome'},
        {displayText: 'Old Ben', key: 'oldBen'},
        {displayText: 'Rutger', key: 'rutger'},
    ]
    return resources;
}

const GetCharacterContent = (key) => {
    const content = {
        charactersHome: CharactersHome,
        oldBen: OldBen,
        rutger: Rutger
    }
    return content[key];
}

export { GetCharacters, GetCharacterContent }