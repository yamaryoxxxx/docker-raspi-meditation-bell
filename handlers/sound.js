const Sound = require('aplay');
const player = new Sound();
player.play(params.filename);

module.exports = function(_params){
    const params = _params;
    return {
        exec: function(){
            player.resume();
            console.log('play', params.filename);
        }
    }
};
