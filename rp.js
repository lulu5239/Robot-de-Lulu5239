const Discord = require("discord.js");
const client = new Discord.Client();

var mode = 4

var chose_changés = {
	nom: {
		ok: false,
		nouveau: "Lulu5239",
	},
	logo: {
		ok: false,
		nouveau: "https://cdn.discordapp.com/app-icons/445157515802443778/6560d7ee104cd704915625a330a0a8e4.png",
	},
	status: {
		ok: true,
		nouveau: "idle",
	},
	jeu: {
		ok: true,
		nouveau: "être hébergé par Lulu5239."
	}
}

var ok = ["367645967694036994", "445157515802443778"]

var prefixe = "rp:"

client.on("error", (e) => console.error("\n\n"+e));
client.on("warn", (e) => console.warn("\n\n"+e));

client.on('ready', () => {
  console.log("Prêt !");
  if(chose_changés.nom.ok){process.user.setUsername(chose_changés.nom.nouveau)}
  if(chose_changés.jeu.ok){process.user.setActivity(chose_changés.jeu.nouveau, "type:PLAYING")}
  if(chose_changés.status.ok){process.user.setStatus(chose_changés.status.nouveau)}
  if(chose_changés.logo.ok){process.user.setAvatar(chose_changés.logo.nouveau)}
});

client.on("message", msg => {
	if (msg.content === (prefixe + 'off') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		msg.channel.send("<@426775253650505729>\nLe robot est éteint.");
		msg.react("✅")
		off()
	}
	if (msg.content.startsWith(prefixe + 'jeu') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		msg.channel.send("Nouveau jeu : "+msg.content.replace(prefixe + "jeu ", ""))
		client.user.setActivity(msg.content.replace(prefixe + "jeu ", ""),"PLAYING")
	  }
	  if (msg.content.startsWith(prefixe + 'status') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
		if(msg.content.replace(prefixe + "status ", "")=="online"||msg.content.replace(prefixe + "status ", "")=="idle"||msg.content.replace(prefixe + "status ", "")=="dnd"||msg.content.replace(prefixe + "status ", "")=="invisible") {
		  if (msg.content===prefixe+"status online") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 255*255,
			}})
		  } else if (msg.content===prefixe+"status idle") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 16776960,
			}})
		  } else if (msg.content===prefixe+"status dnd") {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			  color: 16711680,
			}})
		  } else {
			msg.channel.send({embed:{
			  title: ":white_check_mark:",
			  description: "Nouveau status : "+msg.content.replace(prefixe + "status ", ""),
			}})
		  } // Rouge : 16711680
		  client.user.setStatus(msg.content.replace(prefixe + "status ", ""))
		} else {
		  msg.channel.send({embed:{
			title: "Argument non-répertorié.",
			fields:[{
			  name: "online",
			  value: "En ligne."
			},{
			  name: "idle",
			  value: "Inactif."
			},{
			  name: "dnd",
			  value: "Ne pas déranger."
			},{
			  name: "invisible",
			  value: "Invisible."
			}],
			color: 16711680,
		  }})
		}
	}
	if(msg.content==prefixe+"aide"){
		msg.channel.send("Le préfixe est `"+prefixe+"`.")
	}
	if(msg.content.startsWith(prefixe+"avance ")&&(msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))){
		var n = Number(msg.content.replace(prefixe+"avance ",""))
		n++
		msg.channel.bulkDelete(15)
		var x = 1
		while(x!=n){
			msg.channel.send({embed:{
				title: ":white_check_mark: | Niveau "+x,
				color: 255*255,
			}})
			x++
		}
		msg.channel.send({embed:{
			title: ":large_blue_circle: | Niveau "+x,
			color: 255
		}})
	}
	if (msg.content.startsWith(prefixe + "liste")) {
    let sender = msg.author.username;
    let server = msg.guild.name;
    let ginfoEmbed = new Discord.RichEmbed()
        .setColor('#00FFE8')
        .addField("Liste des serveurs :", `${client.guilds.map(g => g.name).join("\n")}`)

    msg.channel.send(ginfoEmbed)
	}
	if (msg.content.startsWith(prefixe + 'dire') && (msg.author == "<@426775253650505729>" || ok.includes(msg.author.id))) {
    msg.channel.send(msg.content.replace(prefixe + "dire ", ""))
    msg.delete()
  }
})

client.on("message", msg => {
	if(msg.channel.id=="440214431838765060"&&msg.author.bot==false){
		msg.channel.send({embed:{
			title: "RP",
			description: "Vous devez écrire `!aventure` pour commencer le jeu.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
	}
	if(msg.channel.id=="440230224026796052" && msg.content.startsWith("!m1-lvl1")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bon ton épreuve seras q... ATTENTION !! Un tigre juste derrière toi ! Bon que le combat commence. Tu as trois choix :\n:one: La fuite (`!fuite`)\n:two: L’attaquer (`!attack`)\n:three: Ou se défendre (`!defence`).\n\nChoisis bien...",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230224026796052" && msg.content.startsWith("!attack")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" On t’a peut être appris que la meilleur défense était l’attaque, mais non.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230224026796052" && msg.content.startsWith("!defence")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bien joué !\nMaintenant, il est épuisé. Place au tour 2 : `!fuite`, `!attack2` ou `defence2`.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230224026796052" && msg.content.startsWith("!defence2")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Aïe aïe aïe... il a compris comment tu t’es defendu et t’a attaqué à la tête... Tu es mort.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230224026796052" && msg.content.startsWith("!attack2")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bravo ! Tu viens de le battre !\nDonc tu passes au lvl 2 !",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230334290984980" && msg.content.startsWith("!m1-lvl2")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Voici une énigme pour toi :\nQu’est-ce qui a 4 pattes le matin, 2 pattes le jour puis 3 pattes la nuit ?",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230334290984980" && ( msg.content.startsWith("!humain") || msg.content.startsWith("!un-humain") || msg.content.startsWith("!homme") || msg.content.startsWith("!un-homme") )){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" C'est ça mais c'est pas ça : `!l-homme`.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440230334290984980" && msg.content.startsWith("!l-homme")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Oui, c'est ça !\nBravo !",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231402915495987" && msg.content.startsWith("!m1-lvl3")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Tu as atterri dans cette chambre après avoir répondu à mon énigme. Tu dois trouver une clé qui te permettra de sortir de cette pièce, explore bien tout les meubles... (Pour explorer un meuble, fais `!<nom du meuble>`.)",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231402915495987" && msg.content.startsWith("!bureau")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Il n'y a rien du tout.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231402915495987" && msg.content.startsWith("!armoire")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Il y a une commode à côté...",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231402915495987" && msg.content.startsWith("!lit")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Belle couleur, le bleu.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231402915495987" && msg.content.startsWith("!commode")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bravo !\nVoici la clé : `!clef-open-691`.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231479637835796" && msg.content.startsWith("!m1-lvl4")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Tu aimes les calculs ? Je pense que non, mais je vais quand même t'en faire un : **90 - 42 + 6** .\nUtilises la fonction `!calcul`. (ex. `!calcul-1234`).",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231479637835796" && msg.content.startsWith("!calcul-54")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bravo ! tu as trouvé la solution !",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	} // Je pense que tu as aimé le combat contre le tigre ? Eh ben en voila un autre juste pour toi par contre c'est pas un tigre mais un gobelin poilu : (!fuite) (!attack3) ou (!defence3)
	if(msg.channel.id=="440231541042446346" && msg.content.startsWith("!m1-lvl5")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Je pense que tu as aimé le combat contre le tigre. Eh ben en voilà un autre juste pour toi. Par contre, ce n'est pas un tigre mais un gobelin poilu : `!fuite` `!attack3` ou `!defence3`.",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231541042446346" && msg.content.startsWith("!attack3")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bien... tu lui a fait quelques degâts...	Maintenant : `!fuite`, `!attack4` ou `!defence4` ?",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231541042446346" && msg.content.startsWith("!defence3")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Il vient de te bouffer litéralement...",
			color: 0,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231541042446346" && msg.content.startsWith("!attack4")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bien !\nTu as gagné !",
			color: 255*255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440231541042446346" && msg.content.startsWith("!defence4")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Il vient de te bouffer litéralement...",
			color: 0,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440396880648732673" && msg.content.startsWith("!m1-lvl6")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Alors comme sa tu as trouvé le premier calcul simple hum...\nAlors tiens : 7 + 6 x 2 (!calcul-<resultat>)",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440396880648732673" && msg.content.startsWith("!calcul-19")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bravo !",
			color: 255*255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440396981131804688" && msg.content.startsWith("!m1-lvl7")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Mon premier est un objet qui sert à faire un château de sable.\nMon deuxième est une petite montagne.\nMon tout est un poisson très bon.\n(`!charade-<réponse>`)",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440396981131804688" && msg.content.startsWith("!charade-saumon")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Bravo !",
			color: 255*255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440397016296849409" && msg.content.startsWith("!m1-lvl8")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Quel arbre a encore un feuillage vert en hiver ?\n:one: Le pin\n:two: Le marronnier\n:three: L’orme",
			color: 255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			},
			fields: [{
				name: "Fonction :",
				value: "`!rep-<VOTRE REPONSE>`"
			}]
		}})
		msg.delete()
	}
	if(msg.channel.id=="440397016296849409" && msg.content.startsWith("!rep-1")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Gagné !",
			color: 255*255,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440397016296849409" && (msg.content.startsWith("!rep-2")||msg.content.startsWith("!rep-3"))){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Perdu.",
			color: 0,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	if(msg.channel.id=="440397071326117899" && msg.content.startsWith("!m1-lvl9")){
		msg.channel.send({embed:{
			title: "RP",
			description: msg.author+" Le niveau n'est pas encore créé. :cry:",
			color: 0,
			footer: {
				text: "Robot programmé par Lulu5239#8623."
			}
		}})
		msg.delete()
	}
	
})

function off () {
  console.error("La commande 'off()' a été exécutée.")
	client.user.setStatus("dnd")
	client.user.setActivity("se mettre à jour !", "PLAYING")
  setTimeout("dvgvfghfccrvggcfh",3000)
}

client.login(process.env.BOT_TOKEN);
