const Sound = require('aplay');
const execSync = require('child_process').execSync;

module.exports = function(_params){
    const params = _params;
    const player = new Sound();
    player.play(params.filename);
    console.log(execSync('amixer scontrols'));
    console.log(execSync('amixer sset "PCM" 100%'));    
    
    return {
        exec: function(){
            player.resume();
            console.log('play', params.filename);
        }
    }
};
