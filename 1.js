
var socket = io();
// let name;
// do
// {
//     name=prompt("enter the name ");
// }while(!name);

var audio=new Audio('audio.mp3');
function append(message1,position1)
{
    var msg_container=document.querySelector('.display');
    var msg_Element=document.createElement('div');
    msg_Element.innerText=message1;
    msg_Element.classList.add('message_box');
    msg_Element.classList.add(position1);
    msg_container.appendChild(msg_Element); //check for append
    // audio.play();
    if(position1 == 'left')
    {
        audio.play();
    }
}

function msg_emit(msg)
{
    socket.emit('send',msg);
}
socket.on('send',msg=>
{
    append(msg,'left');
})
socket.on('offline_gya',msg=>
{
    document.getElementById('on').innerText=msg;
})
socket.on('online',msg=>
{
    document.getElementById('on').innerText=msg;
})

// socket.on('reload',()=>
// {
//     location.reload();
// })
function bhejna()
{
    var x=document.getElementById('send');
    if((x.value.trim()).length===0)
    {
        alert(" Cann't Send an Empty msg");
        return ;
    }
    append(x.value.trim(),'right');
    msg_emit(x.value);
    x.value="";
}



function check_enter()
{
    if(event.key === 'Enter')//event Event ka object h
    {
        event.preventDefault();
        bhejna();
    }
}


// function new1(a)
// {
//     open("http://127.0.0.1:5500/scripting_lab/website/1.html","_self");
//     // document.getElementById("change_name").innerHTML="Tushar Yadav";
//     // document.getElementById("change_photo").src="https://i.pinimg.com/474x/3b/75/7f/3b757f815c429fef230ce1333d3f696c.jpg";
// }
function pen(a,b,c)
{
    // a=name,b=src i.e href,chattime like 5 msg
    document.getElementById("change_name").innerText=a+" \n Offline";
    //why not working 

    //document.getElementById("change_name").innerText=a;
    // document.getElementById("on").textContent='Online';
    // document.getElementById("on").style.fontSize="25px";
    document.getElementById("change_photo").src=b;
    var c1=document.getElementById(c);
    var x=new Date();
    var y=x.toLocaleTimeString();
    c1.innerHTML=y;
    c1.style.color="black";
    // console.log(d.value);
    // console.log("hi");
    //console.log not working
    // document.getElementById('final_3').innerText=" ";
}
function pen1(a,b,c,d)
{
    // d=chatno
    document.getElementById("change_name").innerText=a+" \n Online";
    document.getElementById("change_photo").src=b;
    var c1=document.getElementById(c);
    var x=new Date();
    var y=x.toLocaleTimeString();
    c1.innerHTML=y;
    c1.style.color="black"
    document.getElementById(d).style.display='none';
}

function effective() 
{
    let input = document.getElementById('inp').value;
    input=input.toLowerCase();
    let y = document.getElementsByClassName('nm');
    let x=document.getElementsByClassName('check');
    for (i = 0; i < x.length; i++) 
    { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) 
        {
            y[i].style.display="none";
        }
        else 
        {
            y[i].style.display="block";                 
        }
    }
    if(input === "")
    {
        // open("http://127.0.0.1:5500/scripting_lab/website/1.html","_self");
    }
}


// isma kuch error h as file ka path dusri bar clivk karne per aayega
function doc_send()
{
    var x=document.getElementById("doc_input");
    if(x.click().value != "")//here x.value is file path
    {
        append(`${x.value}`,'right'); //cannnot add a file or ss
        msg_emit(x.value);
    }

}

function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) 
{
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }}
}
function option()
{
   var x= document.getElementById("dropdown");
   x.style.display="block";
}

function big_photo()
{
    var p=document.getElementById("change_photo");
    var x=document.getElementById("photo_k_liye");
    var y=p.src;
    x.style.display="block";
    x.src=y;
}
function photo_gayab()
{
    var x=document.getElementById("photo_k_liye");
    x.style.display="none";
}
var isSpeechRecognitionEnabled = false;
    var recognition;

    function handleSpeechRecognition() {
      const passwordInput = document.getElementById('send');
      
      // Initialize speech recognition
      recognition = new webkitSpeechRecognition() || new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      // Capture speech
      recognition.onresult = function(event) {
        const speechToText = event.results[0][0].transcript;
        passwordInput.value = speechToText;
      };

      // Error handling
      recognition.onerror = function(event) {
        console.error('Speech recognition error: ', event.error);
      };
    }

    function toggleSpeechRecognition() {
      if (!isSpeechRecognitionEnabled) {
        handleSpeechRecognition();
        recognition.start();
        isSpeechRecognitionEnabled = true;
      } else {
        recognition.stop();
        isSpeechRecognitionEnabled = false;
      }
    }

