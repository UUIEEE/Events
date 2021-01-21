

dc=document;
bdy=()=>{gb();bg()}
gto=a=>{a?window.open(a,'_blank'):gb()}
gb=(a="pmt")=>{
	let r=dc.getElementById(a).style.display;
	gebi(a).style.display=r=="none"?"block":"none";
}
gebi=(a)=>{return dc.getElementById(a)}
tmf=(i,t)=>{
		return setInterval(()=>{
		var now = new Date().getTime();
		var d = t-now;
		var days = Math.floor(d/(1000*60*60*24));
		var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((d%(1000*60*60))/(1000*60));
		var seconds = Math.floor((d%(1000*60))/1000);
		gebi(i).innerHTML = '('+(days>0?days + "d ":"") + hours + "h " + minutes + "m" + (days<1?" "+seconds + "s)":")");
		if(d<0)
		{
			gebi(i).innerHTML = "(Started)";
			clearInterval(x);
			gebi("l"+i[2]).title="Click to join Webinar";
		}
	}, 1000);}
bg=()=>{
	var c = tmf("dT0",new Date("Jan 25, 2021 10:29:00").getTime());
	console.log("sssss")
	var d = tmf("dT1",new Date("Jan 25, 2021 16:29:00").getTime());
	
}
