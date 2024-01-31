const tl = gsap.timeline();
const v0 = "h1.creator_header";
const v1 = "div.calculator";
const v2 = "input";
const v3 = "button";
const v4 = "label";
const n = "none";

 tl.from(v0,{
  scale:0,
  width:0,
  height:0,
  display:n,
  rotate:5000,
  duration:2,
  x:0,
  y:0
});
tl.from(v1,{
  scale:0,
  width:0,
  height:0,
  display:n,
  rotate:360,
  duration:1
});

tl.from(`${v2},${v3},${v4}`,{
  scale:0,
  display:n,
  width:0,
  rotate:360,
  height:0,
  stagger:0.2
}); 