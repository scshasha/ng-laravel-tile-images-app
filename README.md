# Angular + Laravel Sample App

## Basic Requirements

* [Angular work environment](https://angular.io/guide/setup-local)
* [Laravel work environment](https://laravel.com/docs/7.x)
* [Dev Desktop / Docker Toolbox](https://www.docker.com/products/docker-desktop) *(Optional)*

## Setup

The setup guide assumes that you have the obove requirements. I will be using Docker Toolbox tool to run the Laravel api in this demonstration.

## Angular Setup

You can setup your anguar app by using the following commands on your favourite terminal:

* `git clone https://github.com/scshasha/ng-laravel-tile-images-app.git`
* `git branch -b YOUR-BRANCH-NAME origin/angular-fe`
* `git pull origin angular-fe`
* `npm install`
* `ng serve`



## Laravel Setup (without Docker)
To run the laravel api you will need to have a running local web server, with access to your database host.

* `git clone https://github.com/scshasha/ng-laravel-tile-images-app.git`
* `git branch -b YOUR-BRANCH-NAME origin/laravel-be`
* `git pull origin laravel-be`
* `composer install`

Update DB values on your `.env` file accordingly. Login into your DB host and create a database, its name being the same as the value you've previously entered on the envinronemts files.
You are now ready to do the migration:
* `php artisan migrate` OR `php artisan migrate:refresh`


## Laravel Setup (Docker)
The following setup is if you intend to run the Laravel api on a Doker setup.

Get started with:

* `git clone https://github.com/scshasha/ng-laravel-tile-images-app.git`
* `git pull origin setup --force`
* `. install.sh`

THATS IT!!!

## License

This project is licensed under the MIT open source license.
