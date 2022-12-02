$('*').innerText.split(/\n/).reduce((a,b)=>a+['','B X','C X','A X','A Y','B Y','C Y','C Z','A Z','B Z'].indexOf(b),0)
