Hello this is just another angular seed
============================================

This project is just a very basic seed for angular apps.
The seed should provide everything to get started on your new angular app.


# Clone angular seed
If you just want to start a new project without the angular-seed commit history then you can do:
```sh
    git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>
````

Requirements
------------
 - node js
 - npm and gulp
 - ruby and SASS

## Running the app
Install global dependecies first:
Install node version manager and set default node version (should be higher than 0.12).

```sh
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
$ source ~/.profile
$ nvm install 0.12
$ nvm use 0.12
$ nvm alias default 0.12
```

Gulp and ruby sass:
```sh
    sudo npm install gulp -g
````

Ruby and ruby sass:
```sh
    sudo su -c "gem install sass"
    gem install sass
```

Install dependencies for development
````sh
    # in project root
    npm install
````

Run development server for Front End:
````sh
    gulp
````
or for using the node server mocks:
````sh
    gulp --nodemon
````

# About architectural decisions
The app does not use bower as I find it creates a lot of problems and does not help much. For dependency management npm should be enough for most apps.
Ruby SASS is used instead of gulp-sass as there might be some problems with bootstrap not working as expected.


#TODO
Add end to end testing as well as unit testing.
