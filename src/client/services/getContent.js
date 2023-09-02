import Home from '../pages/home.js';
import About from '../pages/about.js';
import Contact from '../pages/contact.js';
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
        case 'contact':
            content = Contact;
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
        {displayText: 'About', key: 'about', path: '/about'},
        {displayText: 'Contact', key: 'contact', path: '/contact'},
    ];
    return pages;
}

export {GetContent, GetPages}