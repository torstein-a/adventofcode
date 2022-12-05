$('*').innerText.split(/\n/).reduce((a,b)=>a+(b&&' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf([...b].find(n=>b.substr(-b.length/2).includes(n)))),0)
