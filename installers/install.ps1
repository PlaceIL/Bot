mkdir PlaceCZ
cd PlaceCZ
Invoke-WebRequest https://raw.githubusercontent.com/PlaceCZ/Bot/master/headlessBot.js -OutFile headlessBot.js
Invoke-WebRequest https://raw.githubusercontent.com/PlaceCZ/Bot/master/autoLogin.js -OutFile autoLogin.js
Invoke-WebRequest https://raw.githubusercontent.com/PlaceCZ/Bot/master/package.json -OutFile package.json
npm install
echo "Bot is ready to use in directory PlaceCZ"
