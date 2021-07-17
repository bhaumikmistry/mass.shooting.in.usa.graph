// Add squares

Date.prototype.dayOfYear= function(){
  var j1= new Date(this);
  j1.setMonth(0, 0);
  return Math.round((this-j1)/8.64e7);
}
today_day_number = new Date().dayOfYear()

const map_number_to_date = function(i){
  var new_startDate= new Date(new Date(2021, 0, i).toLocaleDateString());
  return  moment(new_startDate).format('MM/DD/YYYY');
}

prepare_html_element = function(year) {
  var cols = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var rows = ["-", "Week", "-", "Over", "-", "Week", "-"];

  var data = '<div class="graph">'
  data += '<ul class="title">' + year + '</ul>'
  data += '<ul class="months">'
  for (var col = 0; col < cols.length; col++) {
    data += '<li>' + cols[col] + '</li>'
  }
  data += '</ul> <ul class="days">'
  for (var row = 0; row < rows.length; row++) {
    data += '<li>' + rows[row] + '</li>'
  }
  data += '</ul><ul class="squares" id="squares-' + year + '">'
  return data
}

var graph = document.getElementById("graph-holder");
var year = 2022
graph.innerHTML += prepare_html_element("2020")
graph.innerHTML += prepare_html_element("2021")

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

get_data().then(
  function (data) {
    console.log("get_data().then");

    keys = Object.keys(data)
    keys.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a) - new Date(b);
    });

    keys.forEach(function(date) {
      console.log(date)
      var year = date.substring(date.lastIndexOf("/")+1)
      console.log(year)
      let death = data[date]
      let level = data[date];
      if (!level){
        level = 0
      }
      if (level>9){
        level = 9
      }
      id = 'squares-' + year
      console.log(id);
      const squares = document.getElementById(id);
      // Usage!
      squares.insertAdjacentHTML(
        'beforeend', 
        `<li style="background-color:${color[level]}" data-level="${level}" title="Date: ${date} Killed: ${death}"></li>`
        );
    });

    // for (var i = 1; i < today_day_number; i++) {
    //   date_str = map_number_to_date(i);
    //   console.log(date_str)
    //   let death = data[date_str]
    //   let level = data[date_str];
    //   if (!level){
    //     level = 0
    //   }
    //   if (level>9){ level=9; }
    //   const squares = document.getElementById('squares');
    //   squares.insertAdjacentHTML(
    //     'beforeend', 
    //     `<li style="background-color:${color[level]}" data-level="${level}" title="Date: ${date_str} Killed: ${death}"></li>`
    //     );
    // }
  }
)
