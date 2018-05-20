const Sound = require('aplay');
module.exports = function(_params){
    const params = _params;
    var sound = null;
    return {
        exec: function(){
            if(!sound){
                sound = new Sound(params.filename);
            }
            sound.play();
            console.log('play', params.filename);
        }
    }
};