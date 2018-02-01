//nodes_names = svg.selectAll(".nodeName")
//var nodes = svg.selectAll(".node");

function triplesMerge(triples_old, triples_added)
{
	var triples_merged = triples_old.slice(0);
	
	var length = triples_added.length;
	var cnt = 0;
	
	while(cnt < length)
	{
		triples_merged.push(triples_added[cnt]);
		cnt++;
	}
	return triples_merged;
}

function colorDeletedLinks(triples_old, triples_deleted)
{
	//var target = document.getElementBy();
	//target.setAttribute("type", "node_added");
	//alert("target:" + target);
	//target.getAttribute("cx");
	//document.getElementsByClassName("link")[0].setAttribute("stroke", "blue")
	
	/*Deleted Links*/
	var cnt_old = 0;
	var cnt_deleted = 0;
	var length = triples_old.length;
	
	while(cnt_old < length)
	{
		if(triples_old[cnt_old].subject == triples_deleted[cnt_deleted].subject)
		{
			if(triples_old[cnt_old].predicate == triples_deleted[cnt_deleted].predicate)
			{	
				if(triples_old[cnt_old].object == triples_deleted[cnt_deleted].object)
				{
					document.getElementsByClassName("link")[cnt_old].setAttribute("stroke-dasharray", 5.5);					
					cnt_deleted++;
				}
			}
		}
		cnt_old++;
	}
}

function colorDeletedNodes(triples_new, triples_deleted)
{
	var nodes_number = document.getElementsByClassName("node-text").length;
	
	var cnt_new = 0;
	var cnt_deleted = 0;
	
	while(cnt_deleted < triples_deleted.length)
	{
		while(cnt_new < triples_new.length)
		{
			if(triples_deleted[cnt_deleted].object != triples_new[cnt_new].subject)
			{
				if(triples_deleted[cnt_deleted].object != triples_new[cnt_new].object)
				{
					cnt_new++;
				}else{
					break;
				}
			}else{
				break;
			}
		}
		
		if(cnt_new == triples_new.length)
		{
			var cnt_nodes = 0;
			while(cnt_nodes < nodes_number)
			{
				if(document.getElementsByClassName("node-text")[cnt_nodes].innerHTML == triples_deleted[cnt_deleted].object)
				{
					document.getElementsByClassName("node")[cnt_nodes].setAttribute("fill", "red");
				}
				cnt_nodes++;
			}
		}
		
		cnt_new = 0;
		
		cnt_deleted++;
	}
}

function colorAddedLinks(triples_old, triples_added)
{
	var cnt_added = 0;
	
	while(cnt_added < triples_added.length)
	{
		document.getElementsByClassName("link")[triples_old.length+cnt_added].setAttribute("stroke", "blue");
		cnt_added++;
	}
}

function colorAddedNodes(triples_old, triples_merged)
{
	/*var cnt_old = 0;
	var cnt_added = 0;
	var number_added_nodes = 0;
	
	while(cnt_added < triples_added.length)
	{
		//check subject of the added triples
		while(cnt_old < triples_old.length)
		{
			if(triples_added[cnt_added].subject != triples_old[cnt_old].subject)
			{
				if(triples_added[cnt_added].subject != triples_old[cnt_old].object)
				{
					cnt_old++;
				}else{
					break;
				}
			}else{
				break;
			}
		}
		
		if(cnt_old == triples_old.length){number_added_nodes++;}
		
		cnt_old = 0;
		
		//check object of the added triples
		while(cnt_old < triples_old.length)
		{
			if(triples_added[cnt_added].object != triples_old[cnt_old].subject)
			{
				if(triples_added[cnt_added].object != triples_old[cnt_old].object)
				{
					cnt_old++;
				}else{
					break;
				}
			}else{
				break;
			}
		}
		
		if(cnt_old == triples_old.length){number_added_nodes++;}
		
		cnt_old = 0;
		
		
		cnt_added++;
	}
	
	var cnt = 0;
	while(cnt < number_added_nodes)
	{
		//alert(number_added_nodes);
		document.getElementsByClassName("node")[triples_old.length+cnt].setAttribute("fill", "blue");
		cnt++;
	}*/
	
	var nodes_old = countNodes(triples_old);
	var nodes_merged = countNodes(triples_merged);
	
	var cnt = 0;
	var number_added_nodes = nodes_merged - nodes_old;
	
	while(cnt < number_added_nodes)
	{
		//alert(number_added_nodes);
		document.getElementsByClassName("node")[nodes_old+cnt].setAttribute("fill", "blue");
		cnt++;
	}
}

//function for counting the number of nodes from a triples set
function countNodes(triples)
{
	var nodes = [];
	
	var cnt_triples = 0;
	var cnt_nodes = 0;
	
	nodes.push(triples[0].subject);
	
	while(cnt_triples < triples.length)
	{
		while(cnt_nodes < nodes.length)
		{
			if(triples[cnt_triples].subject == nodes[cnt_nodes]){break;}
			cnt_nodes++;
			//alert(triples[cnt_triples].subject);
		}
		
		if(cnt_nodes == nodes.length){nodes.push(triples[cnt_triples].subject);}
		cnt_nodes = 0;
		
		while(cnt_nodes < nodes.length)
		{
			if(triples[cnt_triples].object == nodes[cnt_nodes]){break;}
			cnt_nodes++;
		}
		
		if(cnt_nodes == nodes.length){nodes.push(triples[cnt_triples].object);}
		cnt_nodes = 0;
		
		cnt_triples++;
	}
	
	return nodes.length;
}