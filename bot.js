const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
	if (message.content.charAt(0) == "!") {
		if (message.content.indexOf("+") === -1 && message.content.indexOf("-") === -1) {
			var toRoll = message.content.substring(1);
			var mod = 0;
		}
		else {
			var isNeg = 1;
			var pos = message.content.indexOf("+");
			if (pos === -1) { pos = message.content.indexOf("-"); isNeg = -1; }
			
			var toRoll = message.content.substring(1, pos);
			var mod = parseInt(message.content.substring(pos + 1)) * isNeg;
		}

		var cnt = 0; var toFumble = 0; var fumble = "";
		var rolls = new Array();
		while (cnt < toRoll){
			rolls[cnt] = (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(12-1+1))+1;
			if (rolls[cnt] === 1) toFumble ++;
			cnt ++;
		}
		
		if (toFumble > toRoll / 2) fumble = "Fumble ";
		rolls.sort(function(a, b){return a-b});
		
		var i; var showRoll = ""; var comma = "";
		for (i = 0; i < rolls.length; i++) {
		  showRoll += comma + rolls[i];
		  comma = ", ";
		}
		
		showRoll = fumble + (parseInt(rolls[i-1] + parseInt(mod))) + " (" + showRoll + ")";
		
		message.reply(showRoll);
	}
	
	if (message.content.charAt(0) == "*") {
		var toRoll = message.content.substring(1);
		var cnt = 0; var total = 0;
		var rolls = new Array();
		while (cnt < toRoll){
			rolls[cnt] = (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(12-1+1))+1;
			cnt ++;
		}
		rolls.sort(function(a, b){return a-b});
		
		var i; var showRoll = ""; var comma = "";
		for (i = 0; i < rolls.length; i++) {
		  showRoll += comma + rolls[i];
		  comma = ", ";
		  if (rolls[i] > 5) total ++;
		}
		
		showRoll = total + " (" + showRoll + ")";
		
		message.reply(showRoll);
	}
  
	if (message.content == "Help") {
		message.reply('for a skill or effect roll, type ! followed by the number of d12 to roll. Add + or - and an amount to modify the result. Do not use spaces. For a damage or healing roll, type * followed by the number of d12 to roll.')
	}
})

client.login(process.env.hmWWEzyhaIspeTp4FRn1r1TeyaJja2J1);