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

const moment = require('moment');
const express = require('express');
const node_cron = require('node-cron');
const jsonfile = require('jsonfile');
const simple_git = require('simple-git');

const FILE_PATH = './data.json';
const CURRENT_TIMESTAMP = moment().format();

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

const DATA = {
  Striking_Time: CURRENT_TIMESTAMP,
};

const app = express();
const git = simple_git();

app.use(express.static('public'));

app.get('/', async (req, res) => {
  readFile('./public/index.html', 'utf8', async (err, html) => {
    if (err) {
      res.status(500).send("Sorry, I don't feel like striking right now.");
    }
    res.send(html);
  });
});

node_cron.schedule('* * * * *', async function () {
  console.log('Striking');
  await jsonfile.writeFile(FILE_PATH, DATA, async function () {
    await git.add([FILE_PATH]).commit(CURRENT_TIMESTAMP).push();
  });
  console.log('THE WIZARD STRIKES AGAIN!!!');
});

app.listen(PORT, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
