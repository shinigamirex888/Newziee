import  mongoose  from "mongoose";

const Connection = async ()=>{
    try{
    const URL=`mongodb://shinigamirex888:Stonecold316@newziee-shard-00-00.xczhq.mongodb.net:27017,newziee-shard-00-01.xczhq.mongodb.net:27017,newziee-shard-00-02.xczhq.mongodb.net:27017/NEWZIEE?ssl=true&replicaSet=atlas-eozbfc-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
    console.log("connected to database")
}catch(err){
    console.log("Error in conn")
}
}

export default Connection;