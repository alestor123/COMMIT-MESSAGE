var axios = require('axios'),
{ exec } = require('child_process');

module.exports = async () => {
var data = await axios('http://whatthecommit.com/index.txt')
exec(`git add . && git commit -m '${data.data||' commit message '}'`)
return data.data
}