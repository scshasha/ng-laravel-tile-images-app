
# pull latest setup code
git pull origin setup

# remove repo to avoid messing it up
rm -rf .git/


# make directories for app root
mkdir app app/html

# nav to root dir
cd app/html


# init repo
git init

# pull latest code
git remote add origin https://github.com/scshasha/ng-laravel-tile-images-app.git

git checkout -b laravel-be

echo "Pulling latest code..."

git pull origin laravel-be

echo "Pulled latest code from repo!"

echo "Installing and updating dependencies"

composer install -y


cd ../../


echo "Spinning up containers..."

docker-compose up -d --build

docker-compose down

echo "Running database migrations"

docker exec -t php php artisan migrate:refresh


echo "Spinning up containers once more."
docker-compose up -d

echo "DONE!"