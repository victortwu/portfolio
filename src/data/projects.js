
const projects = [
  {
    title: 'Home Team Baseball App',
    image: `url(${require('../images/baseballapp.png').default})`,
    link: 'https://home-team-baseball-scores.herokuapp.com/',
    description: "This baseball scores app is biased towards my home team, The Mariners. Featuring responsive mobile first design and plain CSS3. The landing page renders today's home score and AL West division standings are listed first. Go Mariners!",
    tech: ['React.js', 'Baseball Api'],
  },
  {
    title: 'Custom Dashboard',
    image: `url(${require('../images/customdashboard.png').default})`,
    link: 'https://custom-restaurant-dashboard.herokuapp.com/',
    description: 'Description coming soon.',
    tech: ['React.js', 'Flask/Python', 'PosgreSQL'],
  },
  {
    title: 'T-Rex Counting Game',
    image: `url(${require('../images/trexgame.png').default})`,
    link: 'https://victortwu.github.io/GAproject1/',
    description: 'A counting game for kids. Drag and drop the correct plate of drumsticks to feed T-Rex!',
    tech: ['JavaScript', 'CSS', 'HTML', 'JQuery', 'JQueryUI'],
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
