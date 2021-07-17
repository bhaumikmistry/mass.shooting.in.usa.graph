const get_data = function() {
    console.log("get_data()")
    var link = 'https://raw.githubusercontent.com/bhaumikmistry/mass.shooting.in.usa.graph/main/scripts/op.json'
    return $.getJSON(link).then(function(data){
        return data;
    })
};