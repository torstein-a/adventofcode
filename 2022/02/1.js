document.body.innerText.split(/\n/).reduce((a,b)=>a+['','B X','C Y','A Z','A X','B Y','C Z','C X','A Y','B Z'].indexOf(b),0)
