function Network(){
	this.nodes = {};

    this.addNode = function(node){
    	
    	this.nodes[node.id] = node;

    	var nodeslength = Object.keys(this.nodes).length;
    	
    
    	if(nodeslength > 1){
    		//select a random connection from the collection of nodes
    		//makindsure the connection is to the same node;
    		var randomNode = node.id; 
    		while(node.id == randomNode){
    				randomNode = Math.floor(Math.random() * nodeslength) + 1;
    		}
    		
    		// Connect the new  node to the current random node on the network. 
    		node.addConnection(randomNode);
    		console.log("randomNode: " + randomNode)
			//Connect the currentnode to the new node.
			var nodeRetVal = this.nodes[node.id].addConnection(node.id);
			
			// If a number greater than 0 is returned then a remove that connection from that node.
			if(nodeRetVal > 0){
				this.nodes[nodeRetVal].removeConnection(node.id);	
    		}     
    	}	
    }
}

function node(id){

    this.connections = [];
	this.id = id;	
	this.addConnection = function(id){
		 var removed = 0;
		 console.log("Adding connection for " + id)
		 
		 //Add this to the connections 
		 this.connections.push(id);

		 //If the number of nodes is great than the recommended level remove the first one from the collection. 
		 if(this.connections.length > 6){
		 	removed = this.connections.shift();
		 }
		 return removed;
	}
}	


var network = new Network();
for(var i=1; i < 3; i++){
	var n = new node(i);
	network.addNode(n);
}

console.log(network)
