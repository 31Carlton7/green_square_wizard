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

const jsonfile = require('jsonfile');
const moment = require('moment');
const simple_git = require('simple-git');

const GIT = simple_git();
const FILE_PATH = './data.json';
const CURRENT_TIMESTAMP = moment().format();

const DATA = {
  Striking_Time: CURRENT_TIMESTAMP,
};

jsonfile.writeFile(FILE_PATH, DATA, async function () {
  await GIT.add([FILE_PATH]).commit(CURRENT_TIMESTAMP).push();
});

console.log('THE WIZARD STRIKES AGAIN...');
