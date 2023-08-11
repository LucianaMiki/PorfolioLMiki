import Home from '../PortfolioContainer/Home/Home';
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Resume from '../PortfolioContainer/Resume/Resume';
import Projects from '../PortfolioContainer/Projects/Projects';

export const TOTAL_SCREENS = [
    {
        screen_name: 'Home',
        screen_name_br: 'Página Inicial',
        component: Home,
    },
    {
        screen_name: 'About Me',
        screen_name_br: 'Sobre Mim',
        component: AboutMe,
    },
    {
        screen_name: 'Resume',
        screen_name_br: 'Currículo',
        component: Resume,
    },
    {
        screen_name: 'Projects',
        screen_name_br: 'Projetos',
        component: Projects,
    }
]

export const GET_SCREEN_INDEX = (pt, screen_name) => {
    if(!screen_name) return -1;
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(pt){
            if(TOTAL_SCREENS[i].screen_name_br === screen_name) return i;
        }
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
}