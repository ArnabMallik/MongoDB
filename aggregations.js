db.tweets.aggregate([ {$group : {_id : '$user.screen_name' , total : {$sum : 1}} }, {$sort : { total: -1 }} ])
db.tweets.aggregate([ {$group : {_id : '$place.full_name' , total : {$sum : 1}} }, {$sort : { total: -1 }} ])
db.tweets.aggregate([ {$group : {_id : '$in_reply_to_screen_name' , total : {$sum : 1}} }, {$sort : { total: -1 }} ])
db.tweets.aggregate([ {$group : {_id : '$user.screen_name' , total : {$sum : '$hashtags'.length}} }, {$sort : { total: -1 }} ])