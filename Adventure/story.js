//confirm('Boi what u doiing');
let start = document.getElementById('Start');
let body = document.querySelector('body');
let textbox = document.getElementById('textbox');
let cont = document.getElementById('cont');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let title = document.getElementById('title');
let titlee = document.getElementById('titlee');
let chapter = document.getElementById('chapter');
let dead = document.getElementById('dead');
let restart = document.getElementById('restart');
let hitb = document.getElementById('hit');
let topb = document.getElementById('top');
let bottomb = document.getElementById('bottom');
let leftb = document.getElementById('left');
let rightb = document.getElementById('right');
let number = 0;


function startgame(){
body.style.backgroundImage = 'url(https://media2.giphy.com/media/xUPGcM9CazM9H5KrEA/giphy.gif?cid=ecf05e47ozlo6wcv7z84bcvvn0o4ws4znqdwfdjut1ur9g7t&ep=v1_gifs_search&rid=giphy.gif&ct=g'
textbox.style.display = 'block';
textbox.innerHTML = 'It\'s a nice sunny day to run in the park!\n Headquarters says my mission is to obtain the \"Krabby Patty Formula\"\n Whatever that means.';
number = 0;
hitb.style.display = 'none';
topb.style.display = 'none';
bottomb.style.display = 'none';
leftb.style.display = 'none';
rightb.style.display = 'none';
cont.style.display = 'block';
start.style.display = 'none';
title.style.display = 'none';
titlee.style.display = 'none';
chapter.style.opacity = 1;
dead.style.opacity = 0;
restart.style.display = 'none';
choice1.innerHTML = 'Left';
choice2.innerHTML = 'Right';
choice1.style.left = '10%';
    choice1.style.top = '50%';
    choice2.style.left = '80%';
    choice2.style.top = '50%';
restart.removeEventListener('click', restartgame);

//start.removeEventListener('click', startgame);
textbox.addEventListener('click', dialogue);
}

start.addEventListener('click', startgame);
function restartgame(){
    textbox.removeEventListener('click', goaround);
startgame();
}

 function hit(){
    alert('End game');
 }
 function badending(){
    body.style.backgroundImage = 'url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFrbmhxcGU0YXQybWI1MmFoajdvc2tjanZnajNlZnBoM2I2NTVxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpNbZOBSe9d79Zu/giphy.gif)'; 
    textbox.innerHTML = 'You lined up your sights and shot the wrong person!';
 }
//#region second stage
function escapeThem(){
    textbox.addEventListener('click', escapeThem);
    body.style.backgroundImage = 'url(https://media1.giphy.com/media/d31wtpiWCaQ3drQQ/giphy.gif?cid=ecf05e47hm5w60fn242qthe55p403uxpadm5m34c24aau52w&ep=v1_gifs_related&rid=giphy.gif&ct=g)'; 
    switch(number){
        case 7:
            textbox.innerHTML = 'You managed to escape the mob and make it towards the front of the crowd!';
            break;
            case 8:
                textbox.innerHTML = 'You turn around to face the crowd and start scanning for the target.'
                break;
                case 9:
                    textbox.innerHTML = 'You take aim with your pistol that only has one bullet! On the radio your captain says the target was last seen with a purple sweatband on.'
                    break;
                    case 10:
                        textbox.innerHTML = 'Click on your target!'
                        hitb.style.display = 'block';
                        topb.style.display = 'block';
                        bottomb.style.display = 'block';
                        leftb.style.display = 'block';
                        rightb.style.display = 'block';
        
                        textbox.removeEventListener('click', escapeThem);
                        hitb.addEventListener('click', hit);
                        topb.addEventListener('click', badending);
                        bottomb.addEventListener('click', badending);
                        leftb.addEventListener('click', badending);
                        rightb.addEventListener('click', badending);
                        break;
    }

number++;
}

function gothrough(){
    body.style.backgroundImage = 'url(https://media3.giphy.com/media/Ej30KPW7fZzZYZp2Mb/giphy.gif?cid=ecf05e47vjp208ussy12z28z0hwsj46ilmrt16620dgc6pb9&ep=v1_gifs_related&rid=giphy.gif&ct=g)';
    textbox.innerHTML = 'The crowd seems to get possesed by your target and everybody starts brawling! Spam SpaceBar to fight back!';
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    let escapee = 0;
    number = 7;
    document.addEventListener('keyup', function(e){
       if(e.key === ' '){
        escapee++;
       }
        
        if (escapee === 10){
           escapeThem(); 
        }
    })
    
}
function goaround(){
    
    choice1.style.display = 'none';
choice2.style.display = 'none';

textbox.addEventListener('click', goaround);
    switch (number) {
        case 3:
            textbox.innerHTML = 'You start walking around the crowd when everybody turns to stare at you.';
            body.style.backgroundImage = 'url(https://media3.giphy.com/media/l2Sq7Tk3kAbuv3pbq/giphy.gif?cid=ecf05e477rfxtkr01yibjhgcvr6ct4sklmv1y8oq6gstdued&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
            break;
            case 4:
                textbox.innerHTML = 'They all start rushing at you!';
                body.style.backgroundImage = 'url(https://media4.giphy.com/media/l2SpNXWVKtwjSVnJ6/giphy.gif?cid=ecf05e47kyqy6iasvzxf97io0ys4b4n5p9faar78xxpajfyu&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
                break;
                case 5:
                    textbox.innerHTML = 'You hit the dude wearing glasses with a mean right hook!';
                    body.style.backgroundImage = 'url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNqaXEzd2s3bTRrZ3doZTd5cnV6NTNmb3E1ZDV0bzZkeTcwZnNteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bugwhhJE9WhxkYw/giphy.gif)';
                    break;
                    case 6:
                        textbox.innerHTML = 'They end up overpowering you and taking you out.';
                        body.style.backgroundImage = 'url(https://media2.giphy.com/media/oO07WfshfSFBoaRX3X/giphy.gif?cid=ecf05e47rzghyysuix3sitqd8ebv1e5t08fuuqsw4h7fwhtl&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
                        dead.style.opacity = 1;
                        restart.style.display = 'block';
                        textbox.removeEventListener('click', goaround);
                        restart.addEventListener('click', restartgame);
    }

number++;
}
//#endregion



//#region first stage
function leftpath(){
    body.style.backgroundImage = 'url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJoZHc2YmpwbGt1a3VjNHl6c2dyZTE1cmZrZWd4bDlhbTdwa2w0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsWTnXDnKsgfY08/giphy.gif)'; 
    number = 3;
    choice1.style.display = 'block';
            choice2.style.display = 'block';
    textbox.innerHTML = 'You stumbled upon a crowd. You see your target towards the front of the crowd. Do you go through or walk around the crowd?';
    choice1.innerHTML = 'Go Around';
    choice2.innerHTML = 'Go Through';
    choice1.style.left = '1%';
    choice1.style.top = '35%';
    choice2.style.left = '43%';
    choice2.style.top = '45%';
    
    choice2.removeEventListener('click', rightpath)
choice1.removeEventListener('click', leftpath)
choice2.addEventListener('click', gothrough)
choice1.addEventListener('click', goaround)
textbox.removeEventListener('click', dialogue);
textbox.removeEventListener('click', goaround);
}
function rightpath(){
body.style.backgroundImage = 'url(https://64.media.tumblr.com/a19ac3ba679da920399d2df78bc54688/tumblr_nf00fbGzhd1txy0q2o1_400.gifv)';

textbox.innerHTML='I don\'t know why you thought that was a good idea.'
choice1.style.display = 'none';
choice2.style.display = 'none';
dead.style.opacity = 1;
restart.style.display = 'block';
restart.addEventListener('click', restartgame);
}

function dialogue(){
    

    switch(number){
        case 0: 
        textbox.innerHTML = 'The target was supposedly last located in this park.';
        break;
        case 1:
            textbox.innerHTML = 'I\'m coming up to a fork in the road. I forgot if i go left or right!';
            chapter.style.display = 'none';
            break;
            case 2:
            
           body.style.backgroundImage = 'url(https://media1.giphy.com/media/xT5LMyV3wwx20bNKtq/giphy.gif?cid=ecf05e477uz6i5pwurao2mt4v6e14oob5yr4qr02h3m8tzqf&ep=v1_gifs_search&rid=giphy.gif&ct=g)';
           textbox.innerHTML = '>:D';
            choice1.style.display = 'block';
            choice2.style.display = 'block';
            choice2.addEventListener('click', rightpath)
choice1.addEventListener('click', leftpath)
            break;
    }

    number++;
}

//#endregion
//textbox.addEventListener('click', dialogue);



