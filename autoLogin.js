import fetch from 'node-fetch';
import * as fs from 'fs'

const LOGIN_FILE = "logins.txt";

let tokens = [];

(async function login() {
  let lines = readLines();

  if (lines.length > 4) {
    console.log("Můžou bežet pouze 4 učty na 1 IP");
    process.exit(1);
  }

  for (let line of lines) {
    if (line.startsWith("#")) {
      continue;
    }
    let split = line.split(/\s+/);
    if (split.length != 4) {
      continue;
    }

    let appId = split[0];
    let appSecret = split[1];
    let username = split[2];
    let password = split[3];
    console.log(appId + ", " + appSecret + ", " + username + ", " + password);

    let token = await getToken(appId, appSecret, username, password);
    if (token == null) {
      continue;
    }
    tokens.push(token['access_token']);

    //TODO: add startup for headless bot!
  }
})();

async function getToken(appId, appSecret, username, password) {
  let login = appId + ":" + appSecret;
  let data = `grant_type=password&username=${username}&password=${password}`;

  console.log(Buffer.from(login, 'utf-8').toString('base64'));
  console.log(data);

  let reply = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(login, 'utf-8').toString('base64')
    }
  });

  if (reply.status != 200) {
    console.log(`Přihlašení pro uživatele ${username} selhalo!`);
    return null;
  }

  return await reply.json();
}

function readLines() {
  const data = fs.readFileSync(LOGIN_FILE, 'utf-8');

  return data.split(/\r?\n/);
}