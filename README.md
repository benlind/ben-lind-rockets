# Ben Lind's (Previous) Personal Site (With Rockets)

This is the repository for my old personal site from my college days.

## Building
To build this project from the source, run the following commands from the project root:

```
npm install
bower install
gulp build
```

The `gulp build` command will compile all of the assets in `/app` and write the compiled files to `/dist`.

## Running
To run the app, there are two options: use `gulp serve` to start up a small PHP server, or use an app like XAMPP or MAMP.

### Option 1: Gulp
To use this option, you will likely have to edit `gulpfile.babel.js`. In that file, change the following lines to point to a PHP binary and php.ini file on your system:

```
const PHPbin = '/Applications/MAMP/bin/php/php5.5.10/bin/php';
const PHPini = '/Applications/MAMP/bin/php/php5.5.10/conf/php.ini';
```

After pointing those lines to the appropriate files, you should be able to run `gulp serve` to run the app. That command should launch a browser pointing to the main app page. If it does not, simply navigate to http://localhost:3000/index.php in a browser.

### Option 2: XAMPP or MAMP
Start up XAMPP or MAMP, and point their htdocs to the `/dist` folder of this project. Then start the Apache server.

## Database
The database is only used for the contact form. Every message entered into this form is stored to the database.

To set up the database, start a MySQL server on localhost. Create a database named cs1520 in it with a Messages table. The Messages table should contain these fields: `msg_id`, `name`, `email`, and `message`.

# Technologies
- Gulp
- Bower
- NPM
- Sass
- jQuery
- PHP

# TODO
- Serve non-retina images to non-retina devices (via [retina.js](http://imulus.github.io/retinajs/) or [retinaimag.es](http://retinaimag.es/))
- Change the local PHP server to allow using POST from the contact form instead of only GET
- Link to GitHub profile
