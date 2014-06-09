'use strict';

var csfd = require('csfd');
var search = process.argv.slice(2).join(' ').replace(/^\-\-(movie|actor)\=+/, '');
var type = process.argv.slice(2)[0].split('=')[0];

var xml = '<?xml version="1.0"?><items>';

if(type === '--movie') {

  csfd.searchMovie(search).then(function(data) {
    data.forEach(function (movie) {
      xml += '<item arg="'+ movie.url +'">';
      xml += '<title>'+ movie.title +'</title>';
      xml += '<subtitle>'+ movie.actors.join(', ') + ' | ' + movie.genres.join(', ') + ' | ' + movie.countries.join(', ') +'</subtitle>';
      xml += '<icon>63F60794-BB56-4415-9372-BAF974C3A7E1.png</icon></item>';
    });
    xml += '</items>';
    console.log(xml);
  });

} else if(type === '--actor') {
  csfd.searchActor(search).then(function(data) {
    data.forEach(function (actor) {
      xml += '<item arg="'+ actor.url +'">';
      xml += '<title>'+ actor.title +'</title>';
      xml += '<subtitle>'+ actor.dateBirth + ' | ' + actor.placeBirth + ' | ' + actor.roles.join(', ') +'</subtitle>';
      xml += '<icon>63F60794-BB56-4415-9372-BAF974C3A7E1.png</icon></item>';
    });
    xml += '</items>';
    console.log(xml);
  });
}


