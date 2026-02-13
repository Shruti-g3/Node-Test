const fs= require('fs');

// fs.writeFile("./cse-c.txt", "hi we are coder in node", () => { });
fs.readFile("./cse-c.txt", "utf-8",(err, result) => { 
    if(err){
        console.log("error", err)
    }
    else{
        console.log(result);
    }
})
// fs.writeFile("./cse-c.txt", "utf-8",(err) => { 
//     if(err){
//         console.log("error", err)
//     }
//     else{
//         console.log("successfully created");
//     }
// })/

fs.appendFileSync("./cse-c")