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
  			{subject:"ex:ThaiLand", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"},
			{subject:"ex:TomYumKung", 	predicate:"ex:isFoodOf", 	object:"ex:ThaiLand"},
  			{subject:"ex:TodfdfmYumKung", 	predicate:"rdf:type", 		object:"ex:SpicyFood"},
  			{subject:"ex:TomYumKung", 	predicate:"exdfdf:includes", 	object:"ex:shrimp"},
            {subject:"ex:ThaiLand", 	predicate:"ex:includes", 	object:"ex:shrimp"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:requires", 	object:"ex:cfdfhilly"},
		
  		];



var triples_1 = [
  			{subject:"ex:ThaiLand", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"},
			{subject:"ex:TomYumKung", 	predicate:"ex:isFoodOf", 	object:"ex:ThaiLand"},
  			{subject:"ex:TomYumKung", 	predicate:"rdf:type", 		object:"ex:SpicyFood"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:shrimp"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:requires", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:hasSpicy", 	object:"ex:chilly"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:lemon"},
  			{subject:"ex:lemon", 		predicate:"ex:hasTaste", 	object:"ex:sour"},
  			{subject:"ex:chilly", 		predicate:"ex:hasTaste", 	object:"ex:spicy"}
  		];
		
var triples_2 =[
  			{subject:"ex:ThaiLand", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"},
			{subject:"ex:TomYumKung", 	predicate:"ex:isFoodOf", 	object:"ex:ThaiLand"},
  			{subject:"ex:TomYumKung", 	predicate:"rdf:type", 		object:"ex:SpicyFood"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:shrimp"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:requires", 	object:"ex:chilly"},
			{subject:"ex:TomYumKung", 	predicate:"ex:hasSpicy", 	object:"ex:chilly"},
  			{subject:"ex:TomYumKung", 	predicate:"ex:includes", 	object:"ex:lemon"},
  			{subject:"ex:Taiwan", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"}		
		];

		
var triples_added = [
  			{subject:"ex:Taiwan", 	predicate:"ex:hasFood", 	object:"ex:TomYumKung"}		
  		];
		
var triples_deleted = [
  			{subject:"ex:lemon", 		predicate:"ex:hasTaste", 	object:"ex:sour"},
  			{subject:"ex:chilly", 		predicate:"ex:hasTaste", 	object:"ex:spicy"}  		
		];
        svg = d3.select("#canvas_gmult");


function updategraphs(){
 triples_merged = triplesMerge(triples_1, triples_added);
 graph = triplesToGraph(triples_merged);
}
updategraphs();
//
	
/*
var svgg = d3.select("#svg-body")
    .append("svg:svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("id","svg")
    .attr("pointer-events", "all")
    .attr("viewBox","0 0 "+w+" "+h)
    .attr("perserveAspectRatio","xMinYMid")
    .call(zoom.on("zoom", redraw))
 
    
    .append('svg:g');
*/
  
/*
function redraw() {
    trans=d3.event.translate;
    scale=d3.event.scale;
    svg.attr("transform",
        "translate(" + trans + ")"
            + " scale(" + scale + ")");
};
*/
//ar force = d3.layout.force().size([800, 600]);
	



