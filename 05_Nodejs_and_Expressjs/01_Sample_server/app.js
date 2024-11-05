const http=require('http');
console.log('I am inside server')

const requestHandler =(req,res)=>{
    
     console.log("request received",req.url,req.method,req.headers)
     console.log('I am inside Handler')
     res.setHeader('Content-Type', 'text/html');
     // res.write('<!DOCTYPE html>');
     // res.write('<html lang="en">');
     // res.write('<head>');
     // res.write('<title>Document</title>');
     // res.write('</head>');
     // res.write('<body>');
     // res.write('<h1>Welcome to First Server</h1>');
     // res.write('</body>');
     // res.write('</html>');
     res.write(`
       <!DOCTYPE html>
         <html lang="en">
         <head>
           <title>Document</title>
         </head>
         <body>
           <h1>Welcome to First Server</h1>
         </body>
         </html>
       `);
     res.end();
}

const server=http.createServer(requestHandler);
const   PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})