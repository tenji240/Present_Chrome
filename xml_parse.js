$.get("http://jsonp.jit.su/?raw=true&url=http%3A%2F%2Fmy.umbc.edu%2Fevents.xml", function(data){
 	var title_regex = /<title>(.+)<\/title>/gi;
 	var startdate = /<StartDate>(.+)<\/StartDate>/gi;
 	var enddate = /<EndDate>(.+)<\/EndDate>/gi;
 	var title_result = title_regex.exec(data);
	var date_result = startdate.exec(data);
	var end_result = enddate.exec(data);
    table = document.getElementById("JS_table");
    var strings = "<thead> <th>Event</th><th>Start</th><th>End</th> </thead>";
    while(title_result != null && date_result != null && end_result != null)
    {
  //      var element = document.createElement("td");
    //    element.appendChild(document.createTextNode("asdf"));
//	table.appendChild(element);
    strings = strings.concat("<tr>");
	strings = strings.concat("<td>" + title_result[1] + "</td>");
	date = new Date(date_result[1]);
//	strings = strings.concat("<td> " + date.toDateString() + "</td>");
    var str;
   // var day = date.substring(1,4);
    var utc = date.toUTCString();
    var m = utc.substring(7,11);
    var full = date.getUTCFullYear();
    var short = full.toString();
    str = (date.getMonth()+1) + "/"+ date.getUTCDate()+"/"+ short.substring(2,4);
        
    strings = strings.concat("<td>" + str +"</td>");
        
	end = new Date(end_result[1]);
//	strings = strings.concat("<td> " + end.toDateString() + "</td>");
    str = (end.getMonth()+1) + "/"+ end.getUTCDate()+"/"+ short.substring(2,4);
    strings = strings.concat("<td>" + str +"</td>");
	strings = strings.concat("</tr>");
	end_result = enddate.exec(data);
	title_result = title_regex.exec(data);
	date_result = startdate.exec(data);
}
table.innerHTML = strings;
});