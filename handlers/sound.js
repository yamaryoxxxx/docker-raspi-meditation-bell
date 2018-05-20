const Sound = require('aplay');
const player = new Sound();
module.exports = function(_params){
    const params = _params;
    return {
        exec: function(){
            player.play(params.filename);
            console.log('play', params.filename);
        }
    }
};
