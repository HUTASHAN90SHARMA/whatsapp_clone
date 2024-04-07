// const io=require('socket.io')(8000);
// const users={};
// io.on('connection',function(socket)
// {  
//     console.log("hi from server ");  
//     socket.on('new-user-joined',name =>
//     {
//         users[socket.id]=name;
//         socket.broadcast.emit('user-joined','hutashan');
//     });
        
//     socket.on('send',message =>
//     {
//         socket.broadcast.emit('receive',{message:message ,name:users[socket.id]});
//     });
//     socket.on('disconnect',message =>
//     {
//         socket.broadcast.emit('left',users[socket.id]);
//         delete users[socket.id];
//     });

// })


var express=require('express'); //in web console giving error that express is not defined
const app=express();
var http=require('http').Server(app);  //or you can use var http=require('http').createServer(app);
app.use(express.static(__dirname));//baakki url vha exceess karna k liye
var user_no=0;
app.get('/', (req, res) => {
    if(user_no ===1)
    {
        res.sendFile(__dirname + '\\1_copy.html');//res.sendFile m path dalana hota h.
        //if you write res.send(then on web page ot will write path of file but in res.sendFile it will not write anything on web page but send file)
    }
    else
    {
        res.sendFile(__dirname + '\\1.html');
    }
});


var io=require('socket.io')(http);
io.on('connection',socket=>
{
    user_no++;
    socket.broadcast.emit('online','Online');
    //uper online likho
    console.log("connected--");
    //uper offline likho
    socket.on('send',msg=>
    {
        socket.broadcast.emit('send',msg);
    })
    socket.on('disconnect',()=>
    {
        user_no--;
        console.log('disconnected');
        socket.broadcast.emit('offline_gya','offline');
    })
})

http.listen(3000, () => {
        console.log('listening on *:3000');
      });



    // const fs=require('fs');
    // const readlineSync=require('readline-sync');
    // const path='C:\\Users\\hutas\\4th_sem\\scripting_lab\\nodejs\\points.txt'; //double slash needed as single slash give error
    // const file_content=fs.readFileSync(path,'utf-8');
    // console.log(file_content);
    // const lines=file_content.split('\n');//iska matlab h jab use \n milega tab vha add 1 to count of lines




    // for(const line in lines )
    // {
    //     lines[line].trim(" ");
    //     if(lines[line].lastIndexOf(" ") <= 0 ) //0 for " " and -1 for \n
    //     {
    //         continue;
    //     }
    //     else
    //     {
    //         console.log(lines[line].lastIndexOf(" "));
    //         console.log(`line : ${line} `+lines[line]);
    //     }
        
    // }




    // fs.appendFile('points.txt'," hi from append file \n",'utf-8',err=>
    // {
    //     if(err)
    //     throw err;
    //     else
    //     console.log("bakwas");
    // });


    // socket.on('user-joined',name =>
    // {
    //     append(`${name} joined the chat`,'right')
    // });
    
    
    // socket.on('recieve',data =>
    // {
    //     append(`${data.name} :{data.message}`,'left')
    // });
    
    // socket.on('left',name =>
    // {
    //     append(`${name} left the chat`);
    // })



//rough work h y
//     var express=require('express'); //in web console giving error that express is not defined
// const app=express();
// var http=require('http').Server(app);  //or you can use var http=require('http').createServer(app);
// app.use(express.static(__dirname));//baakki url vha exceess karna k liye
// app.get('/', (req, res) => {
//         res.sendFile(__dirname + '\\1.html');
// });


// var io=require('socket.io')(http);
// io.on('connection',socket=>
// {
//     socket.emit('online','Online');
//     //uper online likho
//     console.log("connected--");
//     //uper offline likho
//     socket.on('send',msg=>
//     {
//         socket.emit('send',msg);
//     })
//     socket.on('disconnect',()=>
//     {
//         console.log('disconnected');
//         socket.emit('offline_gya','offline');
//     })
// })
    

//     http.listen(3000, () => {
//         console.log('listening on *:3000');
//       });


//       var express=require('express'); //in web console giving error that express is not defined
//       const app1=express();
//       var http=require('http').Server(app1);  //or you can use var http=require('http').createServer(app);
//       app1.use(express.static(__dirname));//baakki url vha exceess karna k liye
//       var user_no=0;
//       app1.get('/', (req, res) => {
//               res.sendFile(__dirname + '\\1_copy.html');//res.sendFile m path dalana hota h.
//               //if you write res.send(then on web page ot will write path of file but in res.sendFile it will not write anything on web page but send file)
//       });
      
      
//       var io1=require('socket.io')(http);
//       io1.on('connection',socket=>
//       {
//           socket.emit('online','Online');
//           //uper online likho
//           console.log("connected--");
//           //uper offline likho
//           socket.on('send',msg=>
//           {
//               socket.emit('send',msg);
//           })
//           socket.on('disconnect',()=>
//           {
//               console.log('disconnected');
//               socket.emit('offline_gya','offline');
//           })
//       })
          
      
//           http.listen(4000, () => {
//               console.log('listening on *:4000');
//             });
