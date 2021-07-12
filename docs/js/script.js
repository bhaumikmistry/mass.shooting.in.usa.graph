// Add squares
const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 10);
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}

const request = require('request')
request('https://massshootingtracker.site/data/?year=2021', function (
  error,
  response,
  body
) {
  console.error('error:', error)
  console.log('body:', body)
})