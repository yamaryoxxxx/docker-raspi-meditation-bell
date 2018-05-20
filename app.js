const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const cron = require('cron');
const handler = {
    debug: require('./handlers/debug'),
    sound: require('./handlers/sound')
};

config.jobs.forEach(function(job){
    var h = handler[job.handler](job.params);
    var cronJob = new cron.CronJob({
        cronTime: job.cronTime,
        onTick: h.exec,
        start: job.isActive,
        timeZone: config.timeZone
    });
});