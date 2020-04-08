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



## Laravel Setup 

### Without Docker
To run the laravel api you will need to have a running local web server, with access to your database host.

>git clone https://github.com/scshasha/ng-laravel-tile-images-app.git

> git branch -b laravel-be

> git pull origin laravel-be

> composer install


Files to update:

On file `./.env` Update the following vairables

```
DB_NAME=databasename
DB_USER=userpassowrd
DB_PASSWORD=userpassword
DB_HOST=mariadb
```


On `./app/html.env` same values as in `./.env`, replacing `DB_HOST=127.0.0.1` with `DB_HOST=mariadb`

DB migrations. Run:
> php artisan migrate

> php artisan migrate:refresh


### With Docker (Dev Desktop / Toolbox)
The following setup is if you intend to run the Laravel api on a Doker setup.

#### Essential containers used:
```
mariadb
php
nginx
```

Get started with:

> git clone https://github.com/scshasha/ng-laravel-tile-images-app.git

> git pull origin setup --force

> . install.sh


THATS IT!!! 

You can now access your applcation under `http://locahost:8002`

___
[NOTE]: With Docker Toolbox you may need to do:

* Map your port via VM for host ports to be able to communicate with your docker machine.
* `docker-machine ip` will display your default ip to access the app. In my case I access it via https://192.168.99.100:8002
* To change :8002 edit docker-compose.yml and change post(s) under `nginx` sevice

## License

This project is licensed under the MIT open source license.
