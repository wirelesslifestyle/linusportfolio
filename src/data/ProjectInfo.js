import movieappimg from '../images/movie.png';
import movieappbanner from '../images/moviebanner.png';
import moviedesignimg from '../images/moviemockup.png';
import javagameimg from '../images/java.png';
import javagamebanner from '../images/javagamebanner.png';
import javadesignimg from '../images/javamockup.png';
import portfolioimg from '../images/portfolio.png';
import portfoliobanner from '../images/portfoliobanner.png';
import portfoliodesignimg from '../images/portfoliomockup.png';
import capstoneimg from '../images/capstone.png';
import capstonebanner from '../images/capstonebanner.png';
import capstonedesignimg from '../images/movie.png';

import {SiJavascript, SiReact, SiHtml5, SiCss3, SiSass, SiPhp, SiGulp, SiGithub, SiGreensock} from 'react-icons/si';
import {SiWordpress, SiWoocommerce, SiShopify, SiMamp,SiMysql,SiJquery} from 'react-icons/si';
import {SiAdobeillustrator,SiAdobephotoshop,SiAdobeindesign,SiAdobexd, SiThemoviedatabase} from 'react-icons/si';

const projectInfo = [
    {
        title: 'React Movie',
        img: movieappimg,
        banner: movieappbanner,
        alt: 'React Movie App which shows updated movie information',
        language: [<SiHtml5 size={40} color='orange' />, <SiSass size={40} color='pink'/>, ],
        technology: [<SiReact size={40} color='blue' />, <SiThemoviedatabase size={40} color='blue' />],            
        excerpt: 'A reactive movie app with features of preset catagory, search and favourite',
        overview: 'React Movie App built with the React Framework. By using the TMDB API, this dynamic website will present the latest filtered movie and also allow users to search and favourite movies.',
        goals: 'The goal for this project is using React and API.',
        design:'After investigate many comercial movie website, I choose dark background is chosen.',
        designimg:moviedesignimg,
        desingimgalt:'mockup of movie app showing intial design',
        highlights: 'Collaborated with classmates to develop this movie app.',
        takeaway: 'This project was a great learning experience for myself and my teammates. One of the biggest challenges of this project was using local storage and state to save favourite movie. ',
        github: 'https://github.com/wirelesslifestyle/reactmoviea',
        livesite: 'https://linusluo.com/movie-owl',
        id: 0
    },
    {
        title: 'JS Game',
        img: javagameimg,
        banner: javagamebanner,
        alt: 'JavaScript Game for matching pairs of tiles',
        language: [<SiHtml5 size={40} color='orange'/>, <SiJavascript size={40} color='yellow'/>, 
                    <SiJquery size={40} color='black'/>, <SiCss3 size={40} color='yellow'/>],
        technology: [],
        excerpt: 'A fun matching game created with JavaScript and JQuery.',
        overview: 'This is a memory game to match pairs of photographic tiles. Playing is very simple – one player turns over one tile and then try to find a matching tile from his/her memory. The scoring system incorporates how many pairs matched. There will be different levels based on the total number of tiles. And there will be some modes to make the game more attractive. For example, all the tiles are revealed initially for a few seconds. This game can be played by single or multiple players. ',
        goals: 'Integrate all skills learned from class about JavaScript',
        design:'I do not put much effort on the UI of the java game and more effort on how to get all functions working',
        designimg:javadesignimg,
        desingimgalt:'The design plan for the java design game',
        highlights: ['The first is data storage, including all componets and their status.', 'The second is interactive. This is the first project writing react page. I added user control and time control in this project. ' ],
        takeaway: 'Data storage is the most challenge part of this part. Need to consider the effective area of the data.',
        github: 'https://github.com/wirelesslifestyle/javagame',
        livesite: 'https://linusluo.com/matchgame/',
        id: 1
    },
    {
        title: 'Capstone Project',
        img: capstoneimg,
        banner: capstonebanner,
        alt: 'Capstone Project build with wordpress and woocommerce',
        language: [<SiPhp size={40} color='#4e598c'/>, <SiSass size={40} color='pink'/>, ],
        technology: [<SiWordpress size={40} color='#207196'/>, <SiWoocommerce size={40} color='#7b51ad'/>,  <SiMamp size={40} color='#60acd1'/>,
                    <SiGithub size={40}/>, <SiGulp size={40} color='#d34446'/>,
                    <SiAdobeindesign size={40} color='#47021e'/>],
        excerpt: 'An ecommerce website for a dag walking business using WordPress and Woocommerce plugin.',
        overview: 'This is a ecommerce website for a small business using WordPress and Woocommerce plugins',
        goals: ['Working in a team as in the real working environment.','Go through full website development cycle, from collect client requirement to finally deployment.'],
        design:'Easy to use for end user is what we put for the first priority for the design.',
        designimg:capstonedesignimg,
        desingimgalt:'Capstone project mockup of mobile version',
        highlights: ['Using Trello for project management.','Using slack for teamcommunitcation'],
        takeaway:['Using ACF for the whole page is the best practice to control content'],
        github: '',
        livesite: 'https://fetch.bcitwebdeveloper.ca/',
        id: 2
    },
    {
        title: 'Personal Portfolio',
        img: portfolioimg,
        banner: portfoliobanner,
        alt: 'Personal portfolio for myself',
        language: [<SiJavascript size={40} color='yellow'/>, <SiSass size={40} color='pink'/>,],
        technology: [<SiReact size={40} color='blue'/>,
                    <SiAdobeillustrator size={40} color='orange' />, <SiAdobexd size={40} color='crimson' />],
        excerpt: 'This is my portfolio website which showcases all of my previous projects and some introduction about me.',
        overview: 'My personal portfolio encompasses everything I have learned in the FWD program. In addition to coding the website, I designed it from scratch. It is created by React which has allowed me to compartmentalize my code creating a very reusable, organized and scalable code structure. All project information are saved in a object array. So project content can be modified or added easily. Also, I embedded the google analytics code to track the number of users browsing the site. In addition to this, I created the meta description tag and sit map to improve the SEO.',
        goals: ['To fulfill career goals and to showcase and emphasize the appropriate information.',' Develop the website according to field-specific best practices and standards.' ],
        design:'I really like some photoes taken by my photographer friend. They expressed special meanings representing some of my meaning.',
        designimg: portfoliodesignimg,
        desingimgalt:'Mockup of initial portfolio website.',
        highlights:['Responsive in Mobile device'] ,
        takeaway: 'My objective weas to create a user-friendly experience on my website while highlighting my skills as a developer with sample, one of which being the site itself.',
        github: 'https://github.com/wirelesslifestyle/linusportfolio',
        livesite: 'https://linusluo.com/portfolio',
        id: 3
    },
]

export default projectInfo
