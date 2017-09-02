function createList(obj){
  switch (obj) {
    case 'vi':{obj = vi;} break;
    case 'ae':{obj = ae;} break;
    case 'ar':{obj = ar;} break;
    case 'mx':{obj = mx;} break;
    default: console.error('Error: not corrected ARG'); return false;
  }
  var head = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Parse audio-list from VK</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anonymous+Pro">
      <link rel="stylesheet" href="style.css">
    </head>
  <body style="text-align: left;">`,
  backbtn = `<input type=button class="back" value="<- back" onClick="window.location.reload()">`,
  botom = `</body></html>`;
  document.write(head);
  for (var i = 0; i < obj.length; i++)
    for (var j = 0; j < obj.length; j++)
      if(obj[i].artist.localeCompare(obj[j].artist)==0)
        if(i!=j){
          console.log(obj[i].artist);
          obj.splice(i, 1);
        } else continue;
  for(var i = 0; i < obj.length; i++)
    document.write('-> ' + (i<10 ? '000'+i : i<100 ? '00'+i : i<1000 ? '0'+i : i) + ' -> ' + obj[i].artist + '<br>');
  document.write(backbtn);
  document.write(botom);
}
