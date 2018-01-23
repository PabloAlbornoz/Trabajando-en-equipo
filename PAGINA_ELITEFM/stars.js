var m=30, pic="star.gif", pw=9, ph=9, dist=200, stdep=100, spin=0, cdelay=3000, ss=0.01;  //only edit this line


// don't edit below here, unless you know what yer up to ?;o)

var x, y, s=new Array();
var ti = (document.layers) ? 100 : 1;
if(spin==999){
change=setTimeout('sw()',cdelay);
}
function sw(){
di=Math.random()*3;
spin=0;
if(di>0 && di<1) spin=-ss;
if(di>2 && di<3) spin=ss;
change=setTimeout('sw()',cdelay);
}
function ws(){
x=(document.layers) ? self.innerWidth : document.body.clientWidth;
y=(document.layers) ? self.innerHeight : document.body.clientHeight;
}
function gs(w){
	newone=(w>=s.length)?1:0;
	s[w]=new Array(0,Math.random()*(2*Math.PI),Math.random()*30);
	if(newone==1){
		if(document.layers){
			document.write('<layer name="st'+w+'" left="'+(x/2)+'" top="'+(y/2)+'" width="'+pw+'" height="'+ph+'" visibility="show" position="absolute" z-index="-1"><img src="'+pic+'" border="0" width="100%" height="100%"></layer>');
		}else{
			document.write('<img id="st'+w+'" border="0" src="'+pic+'" width="'+pw+'" height="'+ph+'" STYLE="position:absolute; top:'+(y/2)+'; left:'+(x/2)+'; z-index:'+(s[w][0]-stdep)+';">');
		}
	}
}
function ms(){
	ws();
	for (n=0;n<m;n++){
		if(n>=s.length){
			gs(n);
		}
		s[n][0]+=2; s[n][1]+=spin; yp = (y/2)+(s[n][0]*(Math.sin(s[n][1])*s[n][2])); xp = (x/2)+(s[n][0]*(Math.cos(s[n][1])*s[n][2]));
		if((s[n][0]==dist)||(xp>=x-pw)||(yp>=y-ph)||(xp<=0)||(yp<=0)){
			gs(n);
		}
		if (document.layers){
			with(document.layers['st'+n]){
				top=yp; left=xp; width=parseInt((s[n][0]/dist)*pw); height=2;//parseInt((s[n][0]/dist)*ph); //zIndex=s[n][0];
			}
		}else{
			with(document.all['st'+n]){
				style.top=yp+document.body.scrollTop; style.left=xp; style.zIndex=s[n][0]-stdep; width=parseInt((s[n][0]/dist)*pw); height=parseInt((s[n][0]/dist)*ph);
			}
		}
	}
	moving=setTimeout('ms()',ti);
}
ms();
