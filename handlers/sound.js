const Sound = require('aplay');
const execSync = require('child_process').execSync;

module.exports = function(_params){
    const params = _params;
    const player = new Sound();
    console.log(execSync('amixer scontrols'));
    console.log(execSync(`amixer sset "PCM" ${params.volume}%`));    
           
    player.play(params.filename);

    return {
        exec: function(){
            player.play(params.filename);
            console.log('play', params.filename);
        }
    }
};
