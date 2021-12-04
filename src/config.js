module.exports = {
  siteTitle: 'Lea Melendez | Game Developer',
  siteDescription: 'Lea Melendez is a vivacious Game Designer who loves to learn and create.',
  siteKeywords:
    'Lea, Lea Melendez, Melendez, programmer, women in stem, stem, coding, programming, coder, programmer, Unreal Engine, Unity, game development, game dev, game design, videogame, portfolio, graphic design',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Lea Melendez',
  location: 'New York, New York, USA',
  email: 'lrm4475@rit.edu',
  github: 'https://github.com/lrm4475',
  twitterHandle: '@n0ctuna',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lrm4475',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lea-melendez-011130163/',
    },
    //    {
    //      name: 'Codepen',
    //      url: 'https://codepen.io/chandrikadeb7',
    //    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/raedreaming/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/n0ctuna',
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
      name: 'Projects',
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
