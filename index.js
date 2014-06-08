'use strict';

var csfd = require('csfd');
var search = process.argv.slice(2).join(' ').replace('--movie=', '');

if(process.argv.slice(2)[0].split('=')[0] === '--movie'){

  csfd.searchMovie(search).then(function(data){
    var xml = '<?xml version="1.0"?><items>';

    data.forEach(function (movie) {
      xml += '<item arg="'+ movie.url +'"><title>'+ movie.title +'</title><subtitle>'+ movie.actors.join(', ') + ' | ' + movie.genres.join(', ') + ' | ' + movie.countries.join(', ') +'</subtitle><icon>icon.png</icon></item>';
    });

    xml += '</items>';
    console.log(xml);
  });

}


