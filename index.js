var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var url = "https://www.nike.com/us/en_us/";

request(url, function(err, response, html){
	if(!err){
		var $ = cheerio.load(html);
		var allItems = $("#body").children();
		var items = [];
		allItems.each(function(index){
			var result = $("#body").children().eq(index).children().eq(6).find("a.title").text();
			if(result !== ""){
				items.push(result);
			}
			// items.push($("#body").children().eq(index).children().eq(6).find("a.title").text())
		});

		fs.writeFile("output.txt", JSON.stringify(items, null, 6), function(err){
			if(err){
				console.log(err);
			} else{
				console.log("Data has been added to a file.");
			}
		});

		// console.log(items);
			
	}
});
