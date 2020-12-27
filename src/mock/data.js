import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
   title: 'Ajay Ram K',
   lang: 'en',
   description: 'Portfolio Website',
};

// HERO DATA
export const heroData = {
   title: 'Hi, my name is ',
   name: 'Ajay Ram K',
   subtitle: "I'm a full stack developer.",
   cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
   img: 'profile.jpg',
   paragraphOne:
      'Designer & developer from Kerala, India. Presently a Computer Science undergrad, I find joy in learning new stuff, putting it into action and challenging myself along the way. Mostly I tinker around with front-end and UI/UX design, but these days I am trying to get an edge in the development side. ',
   paragraphTwo:
      "I am familier working with Unix systems. In the programming side, Python & C++ are my goto languages. I am profficient with AppDev using Flutter and WebDev using MERN Stack. Currently I am looking into Data Science and Machine Learning using Python. ",
   paragraphThree:
      'If you find my profile interesting or want to reach out for anything, go to the contact section. If you want to know more about me, find my resume here.',
   resume:
      'https://drive.google.com/file/d/14p2Tqh01A_qp3diyXjpkcYD6FH7IQJEj/view',
};

// PROJECTS DATA
export const projectsData = [
   {
      id: nanoid(),
      img: 'demo.png',
      title: 'Xpense',
      info:
         'Personal Expense Manager',
      info2: '',
      repo: ' ',
      url: ' ',
   },
   {
      id: nanoid(),
      img: 'demo.png',
      title: 'kuttikaattil.com',
      info:
         'Online Grocery Store',
      info2:
         '',
      repo: '  ',
      url: ' ',
   },
   {
      id: nanoid(),
      img: 'demo.png',
      title: 'Parava',
      info:
         'Tourist Guidance App',
      info2:
         '',
      repo: ' ',
      url: ' ',
   },
];

// CONTACT DATA
export const contactData = {
   cta: 'Wanna reach out for something?',
   btn: "Write away!!",
   email: 'ajayram192@gmail.com',
};

// FOOTER DATA
export const footerData = {
   networks: [
      {
         id: nanoid(),
         name: 'linkedin',
         url: 'https://www.linkedin.com/in/ajayrmk/',
      },
      {
         id: nanoid(),
         name: 'github',
         url: 'https://github.com/ajayrmk',
      },
      {
         id: nanoid(),
         name: 'telegram',
         url: 'https://t.me/ajayrmk',
      },
      {
         id: nanoid(),
         name: 'twitter',
         url: 'https://twitter.com/ajayrmk',
      },
      {
         id: nanoid(),
         name: 'medium',
         url: 'https://medium.com/@ajayrmk',
      },
   ],
};
