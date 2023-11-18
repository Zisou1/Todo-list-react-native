const mongoose=require("mongoose")
const {MongoMemoryServer}=require("mongodb-memory-server")
async function connect(){
    try {
        const mongod=await MongoMemoryServer.create()
        const getUri=mongod.getUri()
        mongoose.set('strictQuery', true)
        const db = await mongoose.connect(getUri);
        
        console.log(`Database Connected ${getUri}`)
        
    } catch (error) {
        console.log(error);
        throw error
    }    
};
module.exports=connect