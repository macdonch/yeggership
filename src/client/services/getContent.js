import Home from '../pages/home.js';
import Resources from '../pages/resources.js';

const GetContent = (name) => {
    let content;
        switch(name) {
        case 'home':
            content = Home;
            break;
        case 'resources':
            content = Resources;
            break;
        default:
            content = Home;
    }
        return content;
};

const GetPages = () => {
    const pages = [
        {displayText: 'Home', key: 'home', path: '/'},
        {displayText: 'PC Gen', key: 'pcgen', path: '/charactergenerator'},
        {displayText: 'PC Sheet', key: 'charactersheet', path: '/fillablecharacter'},
        {displayText: 'Resources', key: 'resources', path: '/resources'},
        {displayText: 'HR', key: 'charactergallery', path: '/charactergallery'},
        {displayText: 'Ships', key: 'ships', path: '/ships'},
    ];
    return pages;
}

export {GetContent, GetPages}