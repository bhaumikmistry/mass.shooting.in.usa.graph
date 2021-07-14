// Add squares
const squares = document.querySelector('.squares');

Date.prototype.dayOfYear= function(){
  var j1= new Date(this);
  j1.setMonth(0, 0);
  return Math.round((this-j1)/8.64e7);
}
today_day_number = new Date().dayOfYear()

const map_number_to_date = function(i){
  var new_startDate= new Date(new Date(2021, 0, i).toLocaleDateString());
  return moment(new_startDate).format('MM/DD/YYYY');
}

get_data().then(
  function (data) {
    console.log(typeof (data));
    for (var i = 1; i < today_day_number; i++) {
      date_str = map_number_to_date(i);
      let death = data[date_str]
      let level = data[date_str];
      if (!level){
        level = 0
      }
      if (level>9){ level=9; }
      console.log(date_str, level)
      console.log(`<li style="background-color:"${color[level]}"" data-level="${level}"></li>`)
      squares.insertAdjacentHTML(
        'beforeend', 
        `<li style="background-color:${color[level]}" data-level="${level}" title="Date: ${date_str} Killed: ${death}"></li>`
        );
    }
  }
)
