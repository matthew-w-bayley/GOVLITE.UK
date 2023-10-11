nunjucks = require('nunjucks')
nunjucks.configure([
    "../node_modules/govuk-frontend/",
    "."
  ])
var res = nunjucks.render('main.njk');
var res = nunjucks.render('application.njk');

const fs = require('fs');

fs.writeFile('main.html', res, err => {if (err) {console.error(err);}});
fs.writeFile('application.html', res, err => {if (err) {console.error(err);}});
