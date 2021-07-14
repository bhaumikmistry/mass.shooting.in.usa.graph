const get_data = function() {
    var link = 'https://raw.githubusercontent.com/bhaumikmistry/mass.shooting.in.usa.graph/main/scripts/op.json'
    return $.getJSON(link).then(function(data){
        return data;
    })
};