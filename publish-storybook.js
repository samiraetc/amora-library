const ghpages = require('gh-pages');

ghpages.publish('./story', { message: 'Publish storybook' }, () => {
  console.log('Published on https://github.com/samiraetc/amora-library 🚀');
});
