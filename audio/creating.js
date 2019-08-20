function createList(obj) {
  switch (obj) {
    case 'vi': {
      obj = vi;
    } break;
    case 'ae': {
      obj = ae;
    } break;
    case 'ar': {
      obj = ar;
    } break;
    case 'mx': {
      obj = mx;
    } break;
    default:
      console.error('Error: not corrected ARG');
      return false;
  }
  const head = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Parse audio-list from VK</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anonymous+Pro">
      <link rel="stylesheet" href="style.css">
    </head>
  <body style="text-align: left;">`;
  const backbtn = `<input type=button class="back" value="<- back" onClick="window.location.reload()">`;
  const botom = `</body></html>`;
  document.write(head);
  for (let i = 0; i < obj.length; i++)
    for (let j = 0; j < obj.length; j++)
      if (obj[i].artist.localeCompare(obj[j].artist)==0)
        if (i!=j) {
          console.log(obj[i].artist);
          obj.splice(i, 1);
        } else continue;
  for(let i = 0; i < obj.length; i++)
    document.write('-> ' + (i<10 ? '000'+i : i<100 ? '00'+i : i<1000 ? '0'+i : i) + ' -> <a href="https://vk.com/search?c%5Bper_page%5D=200&c%5Bq%5D=' + obj[i].artist + '&c%5Bsection%5D=audio">' + obj[i].artist + '</a><br>');
  document.write(backbtn);
  document.write(botom);
}
