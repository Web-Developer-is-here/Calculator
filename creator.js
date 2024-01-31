const data_Fetcher = async () => {
  const raw_data = await fetch(`https://raw.githubusercontent.com/Web-Developer-is-here/Calculator/main/data.json`);
  
/*  window.document.body.innerHTML += `<div id="body_hider"></div>`;
  
 const blacker = window.document.querySelector('#body_hider');*/
  
  
  const typer_speed_value = -0.03;
  
  const fresh_data = await raw_data.json();
  const creator = document.querySelector('div#creator');
  //console.log(fresh_data)
  const creator_heading = `${ fresh_data.creator_heading }`;
//  console.log(creator_heading)
  const creator_info = `${creator_heading} ${fresh_data.creator_para}  ${fresh_data.additional_info}`;
  // console.log(creator_info)
  // creator.innerHTML = creator_heading;
  
  const typed = new Typed('div#creator_para', {
      strings: [creator_info],
      typeSpeed: typer_speed_value,
    }); 
    
  const locator = () => {
    window.document.location.href = `https://web-developer-is-here.github.io/Calculator/index.html`;
  }

  
 const interval =  setInterval(()=>{
  if(window.document.querySelector('#creator_para').innerHTML == creator_info){
    creator.innerHTML += `<button id="creator_ok_btn">Ok</button>`;
    clearInterval(interval);
    let btn = document.querySelector('#creator_ok_btn');
    
    if(btn !== null){
    btn.addEventListener('click',()=>{
      if(creator.style.display !== 'none'){
        locator();
      }
    });
  }
 
  }
},1000);
  
};

data_Fetcher();
