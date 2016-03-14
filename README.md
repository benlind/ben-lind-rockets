# Ben Lind's Personal Site
This is the repository for the personal site of Ben Lind. I am a web developer, currently working at a freelance level but soon at a professional level as well. This website is primarily a place where I showcase my web development work.

# Grading
To grade this project, you can either 1) build it from the source (see "Building" below) or 2) simply look at the files in `/dist`. That directory contains all of the *compiled* assets. If you choose option 2, you can skip to the "Running" section below.

To see the raw, uncompressed files for grading, look in `/app`.

## Building
To build this project from the source, run the following commands from the project root:

```
npm install
bower install
gulp build
```

The `gulp build` command will compile all of the assets in `/app` and write the compiled files to `/dist`.

## Running
To run the app, there are two options: use `gulp serve:dist` to start up a small PHP server, or use an app like XAMPP or MAMP.

### Option 1: Gulp
To use this option, you will likely have to edit `gulpfile.babel.js`. In that file, change the following lines to point to a PHP binary and php.ini file on your system:

```
const PHPbin = '/Applications/MAMP/bin/php/php5.5.10/bin/php';
const PHPini = '/Applications/MAMP/bin/php/php5.5.10/conf/php.ini';
```

After pointing those lines to the appropriate files, you should be able to run `gulp serve:dist` to run the app. That command should launch a browser pointing to the main app page. If it does not, simply navigate to http://localhost:3000/index.php in a browser.

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
