db.tweets.find({in_reply_to_screen_name : "globeandmail"} , {text : 1 , in_reply_to_screen_name :  1}).pretty()
db.tweets.find({'user.screen_name' : 'MLHealthUnit'} , {text : 1 , 'user.screen_name' : 1}).pretty()
