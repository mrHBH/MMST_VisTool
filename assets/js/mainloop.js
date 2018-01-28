var w = 800,
    h = 600;
var zoomFactor = 4;

zoom = d3.behavior.zoom();

var triples = [
  			{subject:"ex:ThaiLand", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"},
			{subject:"ex:TomYumKung", 	predicate:"ex:isFoodOf", 	object:"ex:ThaiLand"},
  			{subject:"ex:TomYumKung", 	predicate:"rdf:type", 		object:"ex:SpicyFood"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:shrimp"},
            {subject:"ex:ThaiLand", 	predicate:"ex:includes", 	object:"ex:shrimp"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:requires", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:hasSpicy", 	object:"ex:chilly"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:lemon"},
    {subject:"ex:TomYusmKung", 	predicate:"ex:includes", 	object:"ex:lemon"},
     {subject:"ex:TomYusmKung", 	predicate:"ex:includes", 	object:"ex:lemon"}, {subject:"ex:TomYusmKung", 	predicate:"ex:inscludes", 	object:"ex:lemosn"},
  			
		
  		];
var svg = d3.select("#svg-body")
    .append("svg:svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("id","svg")
    .attr("pointer-events", "all")
    .attr("viewBox","0 0 "+w+" "+h)
    .attr("perserveAspectRatio","xMinYMid")
    .call(zoom.on("zoom", redraw))
 
    
    .append('svg:g');

   

function redraw() {
    trans=d3.event.translate;
    scale=d3.event.scale;
    svg.attr("transform",
        "translate(" + trans + ")"
            + " scale(" + scale + ")");
};

var force = d3.layout.force().size([800, 600]);
	
var graph = triplesToGraph(triples);


	update();

