module.exports = {
  siteTitle: 'Pratyush Pandey | Software Engineer',
  siteDescription:
    'Pratyush Pandey is a software engineer, who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Pratyush Pandey, Pratyush, Pandey, yashpandey4, pratyushpandey4, pratyuush99, software engineer, front-end engineer, web developer, javascript, IIT Delhi, Coder',
  siteUrl: 'https://pratyushpandey.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Pratyush Pandey',
  location: 'Delhi, India',
  email: 'yashpandey4@gmail.com',
  github: 'https://github.com/yashpandey4',
  twitterHandle: '@pratyushpandey4',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yashpandey4',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/pratyushpandey4',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/pratyushpandey4', // Fix this link
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pratyuush99',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Pratyuush99',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
