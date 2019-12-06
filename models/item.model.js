const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {type : String, required : true},
    imgSrc: {type : String, required : true},
    title: {type : String, required : true},
    price: {type : Number, required : true},
    category: {type : String, required : true},
    createdAt: {type : Date, default : Date.now}
});
const Item = mongoose.model('Item' , itemSchema);

itemSchema.statics.getItems = function(itemIds){
    //returning a promise
    return new Promise((resolve,reject) => {
        //maps through itemids
        const query = itemIds.map(id => mongoose.Types.ObjectId(id))
        //searching for id that is also in query so every id
        this.find({
            '_id' : {
                $in: query
            }
        },(err, docs)=>{
            if(err){
                console.log(err)
                return reject("failed to get items");
                //rejecting promise if error occurs
            }
            resolve(docs);
            //resolving promise if we succeed in getting the items
        });
    });
}



module.exports = {
    Item 
}