/*
The Green Square Wizard
Copyright (C) 2021  Carlton Aikins

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Define Package variable
const moment = require('moment');
const express = require('express');
const jsonfile = require('jsonfile');
const simple_git = require('simple-git');
const node_cron = require('cron').CronJob;

// Define file manipulation variables
const FILE_PATH = './data.json';
const CURRENT_TIMESTAMP = moment().format();

// Define Web App Variables
const PORT = process.env.PORT || 49160;
const HOST = 'localhost';

// Create data.json code
const DATA = {
  Striking_Time: CURRENT_TIMESTAMP,
};

// Define setup variables
const app = express();
const git = simple_git();

// Use public directory
app.use(express.static('public'));

// Setup Web App
app.get('/', async (req, res) => {
  readFile('./public/index.html', 'utf8', async (err, html) => {
    if (err) {
      res.status(500).send("Sorry, I don't feel like striking right now.");
    }
    res.send(html);
  });
});

var strike = async () => {
  await git.pull();

  jsonfile.writeFile(FILE_PATH, DATA, async function () {
    await git
      .add([FILE_PATH])
      .commit(CURRENT_TIMESTAMP)
      .push('origin', 'master', { '--force': true });
  });

  console.log('THE WIZARD STRIKES AGAIN!!!');
};

// Setup cron job to commit file every 6 hours
var job = new node_cron('0 0 */6 * * *', async function () {
  await strike();
});

strike();
job.start();

// Start web app
app.listen(PORT, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
