// Here You can type your custom JavaScript...
articles = document.getElementsByTagName("article");

for(i=0;i<articles.length;i++){
    
    if($(articles[i]).find('button').length===0)
    articles[i].innerHTML += '<button id='+i +' onclick="save_function('+i+')">Save</button>';

   
   // $(articles[1]).find(".badge-post-container.post-container").find('img').attr('src')
}

function refresh_Save(){
    articles = document.getElementsByTagName("article");

for(i=0;i<articles.length;i++){
    
    if($(articles[i]).find('button').length===0)
    articles[i].innerHTML += '<button id='+i +' onclick="save_function('+i+')">Save</button>';

   
   // $(articles[1]).find(".badge-post-container.post-container").find('img').attr('src')
}
}

document.getElementById('sidebar-content').innerHTML += '<button onclick="refresh_Save()">Refresh Save</button>';


function loadImage(src, onload) {
    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
    var img = new Image();

    img.onload = onload;
    img.src = src;

    return img;
}



function save_function(num){
     var heading = $(articles[num]).find('header').('h2').text().trim();
    var img1 = loadImage( $(articles[num]).find(".badge-post-container.post-container").find('img').attr('src'));
    var canvas = document.createElement("canvas");
    canvas.width = img1.width+50;
    canvas.height = img1.height+50;
    console.log(heading);
    console.log(heading.trim());
  var context = canvas.getContext("2d");
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.drawImage(img1,0,40);
  context.fillText(heading.trim(), 0, 20);
  articles[num].appendChild(canvas);
}
