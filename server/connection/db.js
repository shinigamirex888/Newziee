import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@newziee-shard-00-00.xczhq.mongodb.net:27017,newziee-shard-00-01.xczhq.mongodb.net:27017,newziee-shard-00-02.xczhq.mongodb.net:27017/NEWZIEE?ssl=true&replicaSet=atlas-eozbfc-shard-0&authSource=admin&retryWrites=true&w=majority`

        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;