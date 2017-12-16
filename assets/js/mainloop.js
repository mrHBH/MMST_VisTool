	var triples = [
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
		
	var svg = d3.select("#svg-body").append("svg")
				.attr("width", 800)
				.attr("height", 600)
				;
				
	var force = d3.layout.force().size([800, 600]);
	
	var graph = triplesToGraph(triples);
	
	update();