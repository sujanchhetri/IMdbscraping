var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://www.imdb.com/chart/moviemeter?sort=ir,desc&mode=simple&page=1',function(err,res,body){ 
   var $ = cheerio.load(body);
    $('.lister-list tr').each(function(){
var title = $(this).find('.titleColumn a').text().trim();
var rating =$(this).find('.imdbRating strong').text().trim();
var year =$(this).find(' .titleColumn span').text().trim();

console.log('Title:'+title+' '+rating+' '+ year);
fs.appendFile('imdb.txt', title + ' ' + rating+' '+ year+ '\n', function (err) {
    if (err) throw err;
});
    
    });
});