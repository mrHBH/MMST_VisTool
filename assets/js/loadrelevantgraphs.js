function loadrelevantgraphs(selectedgraph,selectedComm,commits,revisionss)
{
	var rdf1link='';
	var rdf2link='';
	var selectedcommdetails=[];
	var rdf1linkdetails=[];
	var rdf2linkdetails=[];
	var added='';
	var deleted='';
	
	for (j = 0; j < commits.length; j++){
	if (commits[j].subject.includes(selectedComm)  ){ selectedcommdetails.push(commits[j])}
	    }
			
	for (j = 0; j < selectedcommdetails.length; j++){
	if (selectedcommdetails[j].predicate.includes('used')  ){ rdf1link=selectedcommdetails[j].object}
     if (selectedcommdetails[j].predicate.includes('generated')) { rdf2link=selectedcommdetails[j].object}
      }


for (j = 0; j < revisionss.length; j++) { 
if (revisionss[j].subject.includes(rdf1link)  ){ rdf1linkdetails.push(revisionss[j])}
if (revisionss[j].subject.includes(rdf2link)  ){ rdf2linkdetails.push(revisionss[j])}
}

for (j = 0; j < rdf2linkdetails.length; j++) {
if (rdf2linkdetails[j].predicate.includes('addSet')) {added=rdf2linkdetails[j].object} 
if (rdf2linkdetails[j].predicate.includes('deleteSet')) {deleted=rdf2linkdetails[j].object} 
 } 
      
    

    return {
        
      rdf1link,
      rdf2link,

       added,

      deleted
    
    
}}

