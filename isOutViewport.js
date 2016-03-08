function isOutViewport(e){
 var w=window,o=e.getBoundingClientRect();
 return o.bottom<0||o.right <0||o.left>w.innerWidth||o.top>w.innerHeight;
}
