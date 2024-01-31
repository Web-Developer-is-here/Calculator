const clicker_for_creator = () => {
  const canvas = document.querySelector('canvas');
  const creator_clicker = new MouseEvent('click',{
    clientX: Math.random()*canvas.width,
    clientY: Math.random()*canvas.height
  });
  canvas.dispatchEvent(creator_clicker);
}

setInterval(clicker_for_creator,50);