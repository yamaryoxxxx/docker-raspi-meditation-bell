module.exports = function(_params){
    const params = _params;
    return {
        exec: function(){
            console.log(params.message);
        }
    }
};
