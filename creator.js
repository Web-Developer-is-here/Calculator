const data_Fetcher = async () => {
  const raw_data = await fetch(`https://raw.githubusercontent.com/Web-Developer-is-here/Calculator/main/data.json`);
  
/*  window.document.body.innerHTML += `<div id="body_hider"></div>`;
  
 const blacker = window.document.querySelector('#body_hider');*/
  
  
  const typer_speed_value = -0.03;
  
  const fresh_data = await raw_data.json();
  const creator = document.querySelector('div#creator');
  
  const creator_heading = `${ fresh_data.creator_heading }`;
  const creator_info = `${fresh_data.creator_para}  ${fresh_data.additional_info}`;
  creator.innerHTML = creator_heading;
  
  
  
  const typed = new Typed('#creator_para', {
      strings: [creator_info],
      typeSpeed: typer_speed_value,
    }); 
  const locator = () => {
    window.document.location.href = `https://web-developer-is-here.github.io/Calculator/index.html`;
  }
  
/*   const blacker_remover = () => {
    //blacker.id = 'now_not_body_hider';
    blacker.style.display = 'none';
    console.log(blacker);
} */

  
    setInterval(()=>{
  if(window.document.querySelector('#creator_para').innerHTML == creator_info){
    creator.innerHTML += `<button id="creator_ok_btn">Ok</button>`;
    
    let btn = document.querySelector('#creator_ok_btn');
    
    if(btn !== null){
    btn.addEventListener('click',()=>{
      if(creator.style.display !== 'none'){
        locator();
   /*    blacker_remover(); */
      }
    });
  }
 
  }
},1000);
  
};

data_Fetcher();