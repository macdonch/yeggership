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
        {displayText: 'Home', key: 'home', path: '/yeggership/'},
        {displayText: 'PC Gen', key: 'faq', path: '/yeggership/charactergenerator'},
        {displayText: 'About', key: 'about', path: '/yeggership/about'},
        {displayText: 'Contact', key: 'contact', path: '/yeggership/contact'},
    ];
    return pages;
}

export {GetContent, GetPages}