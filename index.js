const http=require('http');

// const myserver=http.createServer((req,res)=>{
// console.log('server 1');
// res.end('hello this is my first server');
// })

const myserver=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('this is my home page\n ABES Engineering College');
       

    }    //'/' is only for normal api and 'api/' is for restAPI
    else if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`
            <h1> ABES Engineering College <h1>
            <img src="https://images.shiksha.com/mediadata/images/1494566683phpZgcM81.jpeg"><img>`);
    }
    else if(req.url=='/contact'){
        res.end('this is about us page \n Name: Shruti Gupta \n Contact no. - 7565041654');
    }
    else{
        res.end('404 page is not found');
    }
})

myserver.listen(8000, ()=> console.log('server is running'));