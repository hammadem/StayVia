const path = require('path')
const mongoose = require('mongoose');
let Listing = require('../models/Listing.js');
let initData = require('./dataUpdated.js');
main()
.then(()=>{
    console.log('DB connection successful');
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb+srv://h617155:kycDgOv4kSsmS9Qb@clusterprojects.qjdxa6i.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjects');
}

let initdata = async () =>{
    await Listing.deleteMany({});
    let updated = initData.data.map(obj=>({ ...obj, owner: '68a3ac8ec9540dea665e2a79'}));
    console.log (updated);
    await Listing.insertMany(updated).then(()=>{
        console.log("Data Loaded into Database");
    })
    .catch((err)=>{
        console.log(err.errors)
    });
    
}

initdata();