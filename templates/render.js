const fs = require('fs');

nunjucks = require('nunjucks')
nunjucks.configure('.', { autoescape: true });

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('.'), {
  autoescape: true,
  noCache: true
});

const BASE_URL = "/GOVLITE.UK/";
env.addGlobal('base_url', BASE_URL);

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