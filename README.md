# goodburger2

Goodburger2 is a place where you can devour burgers, free of charge.

## Purpose
To follow the MVC design pattern, using sequelize to save and retrieve data to a SQL database. This is deployed to Heroku with JawsDB as the database.
 
## Screenshot
![screenshot](./public/assets/images/screenshot.png)

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Express.js](https://www.npmjs.com/package/express)
- [Handlebars.js](https://www.npmjs.com/package/express-handlebars)
- [Moment.js](https://momentjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
- [JawsDB](https://elements.heroku.com/addons/jawsdb)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- HTML5, CSS3, Javascript and jQuery

## Features
Google Fonts and Bootsrap provide for a polished UI, and Heroku's hosting combined with JawsDB permit data persistent burgers.

## Installation
- Visit the deployed site at [Good Burger 2](https://damp-tor-93239.herokuapp.com/) for demo.
- Otherwise, fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js and MySQL installed on your machine, as well as Gulp.
- If you have a password that protects your MySQL root user, enter that password in the connection.js file in the cloned repo
- In your CLI, navigate to the cloned directory. Install the npm dependencies and run gulp.

  `npm install`

  `gulp`

This Project uses EditorConfig to standardize text editor configuration.
Visit [https://editorconfig.org/](https://editorconfig.org/)

This Project uses ESLint to detect suspicious code in JavaScript files.
Visit [https://eslint.org/](https://eslint.org/)
Run `npm run -s eslint .` to see ESLint errors and warnings.

This project uses gulp to convert sass files into css files. Additionally, it converts css and javascript files into minified files and uses those minified files on production. Run `gulp` to run all the gulp tasks.

The command `gulp` will automatically launch the project in google chrome.

The files watched by gulp are the client js and sass files.

Client side js files are located at `public/assets/js/*.js`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

Sass files are located at `sass/partials/*.scss`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

🍔 Welcome to goodburger, home of the goodburger, can I take your order 🍔
