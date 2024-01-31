const clicker = () => {
  const canvas = document.querySelector('canvas');
  const click = new MouseEvent('click',{
    clientX : Math.random() * canvas.width,
    clientY : Math.random() * canvas.height
  });
  canvas.dispatchEvent(click);
};

setInterval(clicker,100);