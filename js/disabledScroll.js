window.disableScroll = function () {

  document.body.style.cssText = `
     
     widht: 100%;
     overflow: hidden;
     heingt: 100vh;
     
  `;
}

window.enableScroll = function () {
   document.body.style.cssText = `position: relative;`;
   window.scroll({top: document.body.dbscrollY})

}