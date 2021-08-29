
const projects = [
  {
    title: 'Home Team Baseball App',
    image: `url(${require('../images/baseballapp.png').default})`,
    link: 'https://home-team-baseball-scores.herokuapp.com/',
    description: "This baseball scores app is biased towards my home team, The Mariners. Featuring responsive mobile first design and plain CSS3. The landing page renders today's home score and AL West division standings are listed first. Go Mariners!",
    tech: ['React.js', 'Baseball Api'],
  },
  {
    title: 'Tip Calculator App - Frontend Mentor',
    image: `url(${require('../images/tipcalcapp.png').default})`,
    link: 'https://frontendmentor-tip-calc-vercel-xwvk4vrpd-victortwu.vercel.app/',
    description: "A frontend challenge from frontendmentor.io. It's a tip calculator built to design specs from Frontend Mentor.",
    tech: ['React.js'],
  },
  {
    title: 'Custom Dashboard',
    image: `url(${require('../images/customdashboard.png').default})`,
    link: 'https://custom-restaurant-dashboard.herokuapp.com/',
    description: 'A custom restaurant dashboard that parses csv data from 3rd party vendors like Doordash and UberEats. Puts everything in one place, ready for excise tax returns! Also features a rather gratuitous transforming Soundwave!',
    tech: ['React.js', 'Flask/Python', 'PosgreSQL'],
  },
  {
    title: 'Restaurant App',
    image: `url(${require('../images/restaurantapp.png').default})`,
    link: 'https://victor-twu-project-2.herokuapp.com/',
    description: 'A full CRUD restaurant menu app with a shopping cart.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
  }

]

export default projects

// title: 'T-Rex Counting Game',
// image: `url(${require('../images/trexgame.png').default})`,
// link: 'https://victortwu.github.io/GAproject1/',
// description: 'A counting game for kids. Drag and drop the correct plate of drumsticks to feed T-Rex!',
// tech: ['JavaScript', 'CSS', 'HTML', 'JQuery', 'JQueryUI'],
