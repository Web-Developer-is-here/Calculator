const creator_div = document.querySelector('div#creator');
const n = "none";
gsap.from(creator_div,{
  scale:0,
  width:0,
  height:0,
  rotate:1000,
  duration:1
});