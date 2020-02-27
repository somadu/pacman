
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
        [2,1,2,0,0,2,1,2,0,0,0,2,1,2,1,2,0,0,0,2,1,2,0,0,2,1,2],
        [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
        [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,1,2,2,2,2,2,0,2,0,2,2,2,2,2,1,2,2,2,2,2,2],
        [0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0],
        [0,0,0,0,0,2,1,2,0,2,2,2,4,4,4,2,2,2,0,2,1,2,0,0,0,0,0],
        [2,2,2,2,2,2,1,2,0,2,0,0,0,0,0,0,0,2,0,2,1,2,2,2,2,2,2],
        [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
        [2,2,2,2,2,2,1,2,0,2,0,0,0,0,0,0,0,2,0,2,1,2,2,2,2,2,2],
        [0,0,0,0,0,2,1,2,0,2,2,2,2,2,2,2,2,2,0,2,1,2,0,0,0,0,0],
        [0,0,0,0,0,2,1,2,0,0,3,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0],
        [2,2,2,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,0,2,1,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
        [2,1,1,1,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,1,1,1,2],
        [2,2,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2],
        [2,2,2,2,1,2,1,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2,1,2,2,2,2],
        [2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ];

    var score = 0;

    var life = 3;

    var pacman = {
        x: 13,
        y: 16
    };
window.onload = function(){
    function displayworld(){
        var output = '';

        for(var i=0; i < world.length; i++){
            output += "\n<div class='row'>\n";
            for(var j=0; j < world[i].length; j++){
                if (world[i][j] == 2)
                    output += "<div class='brick'></div>";
                else if(world[i][j] == 1)
                    output += "<div class='coin'></div>";
                if (world[i][j] == 0)
                    output += "<div class='empty'></div>";
                else if (world[i][j] == 3)
                    output += "<div class='fruit'></div>";
                if (world[i][j] == 4)
                    output += "<div class='wall'></div>";
                else if (world[i][j] == 5)
                output += "<div class='pink'></div>";
                else if (world[i][j] == 6)
                output += "<div class='red'></div>";
                else if (world[i][j] == 7)
                output += "<div class='orange'></div>";
            }
            output += "\n</div>";
        }
        // console.log(output);
        document.getElementById('world').innerHTML = output;
    }
    function displaypacman(){
        document.getElementById('pacman').style.top = pacman.y*20+"px";
        document.getElementById('pacman').style.left = pacman.x*20+"px";
    }
        function displayred(){
        document.getElementById('red').style.top = red.y*20+"px";
        document.getElementById('red').style.left = red.x*20+"px";
        }
        function displayorange(){
        document.getElementById('orange').style.top = orange.y*20+"px";
        document.getElementById('orange').style.left = orange.x*20+"px";
        }
        function displaypink(){
        document.getElementById('pink').style.top = pink.y*20+"px";
        document.getElementById('pink').style.left = pink.x*20+"px";
    }
    function displayscore(){
        document.getElementById('score').innerHTML = score;
    }

    displayworld();
    displaypacman();
    displayscore();

    document.onkeydown = function(e){
        if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 &&  world[pacman.y][pacman.x-1] !=4){
            pacman.x--;
            document.getElementById('pacman').style.transform = "rotate(180deg)"
        }
        else if(e.keyCode == 39  && world[pacman.y][pacman.x+1] != 2 &&  world[pacman.y][pacman.x+1] !=4){
            pacman.x++;
            document.getElementById('pacman').style.transform = "rotate(360deg)"
        }
        else if(e.keyCode == 38  && world[pacman.y-1][pacman.x] != 2 &&  world[pacman.y-1][pacman.x1] !=4){
            pacman.y--;
            document.getElementById('pacman').style.transform = "rotate(270deg)"
        }
        else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2 &&  world[pacman.y+1][pacman.x] !=4){
            pacman.y++;
            document.getElementById('pacman').style.transform = "rotate(90deg)"
        }
        if(world[pacman.y][pacman.x] == 1){
            world[pacman.y][pacman.x] = 0;
            score += 10;
            displayworld();
            displayscore();
        }
        if(world[pacman.y][pacman.x] == 3){
            world[pacman.y][pacman.x] = 0;
            score += 50;
            displayworld();
            displayscore();
        }
        if(pacman.x > world[pacman.y].length-1){
                pacman.y = 13;
                pacman.x = 0;
            }
        if(pacman.x < world[13][0]){
                pacman.y = 13;
                pacman.x = 26;
            }
        
        // if(world[pacman.y][pacman.x] == 4){   idea de muerte
        //     world[pacman.y][pacman.x] = 4;
        //     life --;
        //     displayworld();
        //     displaylife();
        // }
        // console.log(e.keyCode)
        displaypacman()

        
    }
}