$('*').innerText.split(/\n/).filter(r=>{x=r.split(/,|-/).map(y=>y|0)
return (x[2]<=x[0]&&x[0]<=x[3])||(x[2]<=x[1]&&x[1]<=x[3])||(x[0]<=x[2]&&x[2]<=x[1])||(x[0]<=x[3]&&x[3]<=x[1])})

