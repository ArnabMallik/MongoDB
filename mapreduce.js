function myMapper() {
    //The mapper function is called with each document, which has the special name 'this'
    //Emit a key-value pair:
	for(var i = 0; i < this.entities.hashtags.length ; i++) {
    emit(this.entities.hashtags[i].text, 1);
	}
}

function myReducer(key, values) {
    //The reducer is called once for each key, and is passed an array
    //containing all values corresponding to that key.
    //Produce the desired result
    return Array.sum( values );
}

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" })
db.mroutput.aggregate({$sort: {value: -1}})