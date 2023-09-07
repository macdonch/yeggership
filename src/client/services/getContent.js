import Home from '../pages/home.js';
import About from '../pages/about.js';
import Resources from '../pages/resources.js';
import Faq from '../pages/faq.js';

const GetContent = (name) => {
    let content;
        switch(name) {
        case 'home':
            content = Home;
            break;
        case 'about':
            content = About;
            break;
        case 'resources':
            content = Resources;
            break;
        case 'faq':
            content = Faq;
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
        {displayText: 'Character Sheet', key: 'charactersheet', path: '/fillablecharacter'},
        {displayText: 'Resources', key: 'resources', path: '/resources'},
        {displayText: 'Hall Of Fame', key: 'charactergallery', path: '/charactergallery'},
        {displayText: 'About', key: 'about', path: '/about'},
    ];
    return pages;
}

export {GetContent, GetPages}