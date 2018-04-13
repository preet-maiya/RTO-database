#!/bin/sh

echo "Installing required packages...\n\n"
sudo apt-get install mysql-server nodejs-dev
cd New/ && sudo npm install
cd ..
cd admin/ && sudo npm install
cd ..
echo "\n\nDone installing. Now run \"npm start\" in New folder and also in admin folder\n"
