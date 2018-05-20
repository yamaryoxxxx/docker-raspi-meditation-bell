const Sound = require('aplay');
const execSync = require('child_process').execSync;

module.exports = function(_params){
    const params = _params;
    const player = new Sound();
    execSync('amixer scontrols');
    execSync(`amixer sset "PCM" ${params.volume}`);    
           
    player.play(params.filename);

    return {
        exec: function(){
            player.play(params.filename);
        }
    }
};
