z=[];document.body.innerText.split(/\s/).reduce((a,b)=>{if(!b){z.push(a);return 0}return a+(b|0)}, 0)
z.sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>(b|0)+a,0)
