const jsonfile = require('jsonfile');
const moment = require('moment');
const simple_git = require('simple-git');

const FILE_PATH = './data.json';
const CURRENT_TIMESTAMP = moment().format();

const data = {
  date: CURRENT_TIMESTAMP,
};

jsonfile.writeFile(FILE_PATH, data, () => {
  simple_git().add([FILE_PATH]).commit(CURRENT_TIMESTAMP);
});
