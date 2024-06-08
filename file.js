const fs=require("fs");

// fs.writeFileSync('./test.txt','Hello World');


// fs.writeFile("./test.txt","Hello sumit" ,(err)=>{})

// const result =fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})