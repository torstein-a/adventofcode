$('*').innerText.split(/(.+?\n.+?\n.+?)\n/).reduce((a,b)=>{x=b.split(/\n/).map(n=>new Set([...n]))
return a+(b&&' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf([...x[0]].find(y=>x[1].has(y)&&x[2].has(y)))||0)},0)
