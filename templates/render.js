const fs = require('fs');

nunjucks = require('nunjucks')
nunjucks.configure([
    "../node_modules/govuk-frontend/",
    ".", ".."
  ])


// --base-url can be passed
if (process.argv.length > 2) {
  nunjucks.addGlobal('base_url', process.argv[2]);
}

async function ls(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    var filename = dirent.name;
    if (filename.slice(filename.length - 3) == "njk"){
      var res = nunjucks.render(filename);
      fs.writeFile(filename.slice(0, filename.length-4) + ".html", res, err => {if (err) {console.error(err);}});
    }
  }
}
ls('.').catch(console.error)