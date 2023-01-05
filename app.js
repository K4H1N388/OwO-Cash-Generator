const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const { token, ownerName, channel, owo } = require("./settings.json");
const { QuickDB } = require('quick.db');
const db = new QuickDB();

const 
	cfOnly = settings.gameSettings.cf,
	slotOnly = settings.gameSettings.slot,
	cfCash = settings.gameSettings.cfCashs,
	slotCash = settings.gameSettings.slotCashs

async function save(){
await db.set("cfNumber", 1);
await db.set("slotNumber", 1);
await db.set("owoDoğrulama", 0);
}

save()
client.on("ready", async () => {
	await console.log("-------------------------------------------------------------------------------")
	await console.log("Developer/Producer Information")  // Encoded By K4H1N
	await console.log(" ")
	await console.log("Discord: K4H1N#1969")
	await console.log("İtemsatış: K4H1N")
	await console.log(" ")
	await console.log(" ")  // Encoded By K4H1N
	await console.log("System Information")
	await console.log(" ") // Encoded By K4H1N
	await console.log("Checking a coin toss...")
	if(cfOnly == true){
		await console.log("The coin toss system opens...") // Encoded By K4H1N
		cfOpen()
		await console.log("Coin toss system opened successfully")
	} else {
		await console.log("The coin toss system could not be run because it was turned off.")
	} // Encoded By K4H1N

	if(slotOnly == true){
		await console.log("Checking the slot system...")
		slotOpen()
		await console.log("Slot system opened successfully")
	} else { // Encoded By K4H1N
		await console.log("The slot system could not be run because it was turned off.")
	}
	
	await console.log(" ")
	await console.log("Necessary settings have been made. The system is being activated.")
	console.log("ACTIVE") // Encoded By K4H1N
	await console.log("-------------------------------------------------------------------------------")
})

function cfOpen(){
	db.set("cfData", true)
	let channels = client.channels.get(channel)
	if(channel) { // Encoded By K4H1N
		setTimeout(function(){
			channels.send(`owo cf ${cfCash["1"]}`)
		}, 16000)
	} else { // Encoded By K4H1N
		console.log(" ")
		console.log("The first cf message could not be sent because the game channel could not be found.")
	}
}

async function slotOpen(){
	await db.set("slotData", true) // Encoded By K4H1N
	let channels = client.channels.get(channel)
	if(channel) {
		setTimeout(function(){
			channels.send(`owo s ${slotCash["1"]}`)
		}, 16000) // Encoded By K4H1N
	} else {
		console.log(" ")
		console.log("The first slot message could not be sent because the game channel could not be found.")
	}
}

setInterval(async () => {
	var status = await db.get("owoVerification");
	if(status) return // Encoded By K4H1N
	let channels = client.channels.get(channel);
	if(channels){
		client.channels.get(channel).send("owo pray");
		console.log(`"Pray (Luck Boost)" command executed`) // Encoded By K4H1N
	} else {
		console.log(`The command "Pray (Increase Luck)" was not executed because the game channel was not found.`)
	}
}, 300000)

async function ggCfNextRaunt() { // Encoded By K4H1N
	var oldCf = await db.get("cfNumber") || 1
	if(oldCf == 5 || oldCf > 5){
		setTimeout(function(){
			let channels = client.channels.get(channel)
			if(channels) {
				channels.send(`owo cf ${cfCash["1"]}`);
				await db.set("cfNumber", 1) // Encoded By K4H1N
				console.log(`"cf" command executed`)
			} else {
				console.log(`The command "cf" was not executed because the game channel was not found.`)
			}
		}, 16000)
	} else {
		setTimeout(async () => {
			let channels = client.channels.get(channel)
			if(channels) { // Encoded By K4H1N
				channels.send(`owo cf ${cfCash[oldCf]}`);
				await db.set("cfNumber", oldCf++)
				console.log(`"cf" command executed`) // Encoded By K4H1N
			} else {
				console.log(`The command "cf" was not executed because the game channel was not found.`)
			}
		}, 16000) // Encoded By K4H1N
	}
}
// Encoded By K4H1N
async function ggSlotNextRount() {
	var oldSlot = await db.get("slotNumber") || 1
	if(oldSlot == 5 || oldSlot > 5){ // Encoded By K4H1N
		setTimeout(function(){
			let channels = client.channels.get(channel) // Encoded By K4H1N
			if(channels) {
				channels.send(`owo s ${slotCash["1"]}`);
				await db.set("slotNumber", 1)
				console.log(`"slot" command executed`) // Encoded By K4H1N
			} else {
				console.log(`The command "slot" was not executed because the game channel was not found.`)
			}
		}, 16000) // Encoded By K4H1N
	} else {
		setTimeout(async () => {
			let channels = client.channels.get(channel) // Encoded By K4H1N
			if(channels) {
				channels.send(`owo s ${slotCash[oldSlot]}`); // Encoded By K4H1N
				await db.set("slotNumber", oldSlot++)
				console.log(`"slot" command executed`)
			} else { // Encoded By K4H1N
				console.log(`The command "slot" was not executed because the game channel was not found.`)
			}
		}, 16000) // Encoded By K4H1N
	}
}

async function cfWin(){
	setTimeout(async () => { // Encoded By K4H1N
		let channels = client.channels.get(channel)
		if(channels) {
			channels.send(`owo cf ${cfCash["1"]}`); // Encoded By K4H1N
			await db.set("cfNumber", 1)
			console.log(`"cf" command executed`)
		} else { // Encoded By K4H1N
			console.log(`The command "cf" was not executed because the game channel was not found.`)
		}
	}, 16000)
} // Encoded By K4H1N

async function slotWin(){
	setTimeout(async () => { // Encoded By K4H1N
		let channels = client.channels.get(channel)
		if(channels) { // Encoded By K4H1N
			channels.send(`owo s ${slotCash["1"]}`);
			await db.set("slotNumber", 1) // Encoded By K4H1N
			console.log(`"slot" command executed`)
		} else { // Encoded By K4H1N
			console.log(`The command "slot" was not executed because the game channel was not found.`) // Encoded By K4H1N
		}
	}, 16000)
} // Encoded By K4H1N

async function startsAgaing(){
	if(cfOnly == true){ // Encoded By K4H1N
		setTimeout(async () => {
			let channels = client.channels.get(channel) // Encoded By K4H1N
			if(channels) {
				channels.send(`owo cf ${cfCash["1"]}`);
				await db.set("cfNumber", 1)
				console.log(`"cf" command executed`) // Encoded By K4H1N
			} else {
				console.log(`The command "cf" was not executed because the game channel was not found.`)
			}
		}, 16000) // Encoded By K4H1N
	}

	if(slotOnly == true){
		setTimeout(async () => { // Encoded By K4H1N
			let channels = client.channels.get(channel)
			if(channels) {
				channels.send(`owo s ${slotCash["1"]}`); // Encoded By K4H1N
				await db.set("slotNumber", 1)
				console.log(`"slot" command executed`)
			} else { // Encoded By K4H1N
				console.log(`The command "slot" was not executed because the game channel was not found.`)
			}
		}, 16000) // Encoded By K4H1N
	}
}

client.on("messageUpdate", async (oldMessage, newMessage) => { // Encoded By K4H1N
	const cfData = await db.get("cfData") || false
	if(cfData == false) return
	try {
		if(newMessage.member.id !== owo) return // Encoded By K4H1N
		//if(newMessage.channel.id !== channel) return
		if(newMessage.member.id !== owo) return	
		if(!newMessage.content.startsWith(`**${ownerName}**`)) return // Encoded By K4H1N

		var status = await db.get("owoVerification") || 0
		var oldCf = await db.get("cfNumber") || 1
		if(newMessage.content.endsWith(":c")) { // Encoded By K4H1N
			if(status !== 0) return
			switch (oldCf) {
				case 1: {
					await db.set("cfNumber", 2)
					ggCfNextRaunt() // Encoded By K4H1N
					break
				}

				case 2: {
					await db.set("cfNumber", 3)
					ggCfNextRaunt()
					break
				}

				case 3: {
					await db.set("cfNumber", 4)
					ggCfNextRaunt()
					break
				}

				case 4: {
					await db.set("cfNumber", 5)
					ggCfNextRaunt()
					break
				}

				case 5: {
					await db.set("cfNumber", 1)
					ggCfNextRaunt()
					break
				}
			}
		} else {
			if(status !== 0) return
			await db.set("cfNumber", 1)
			cfWin() 
		}

	} catch (error) {
		console.log(`We encountered an error while executing the "cf" command. The command will be reset and tried again.`)
		cfWin() // Encoded By K4H1N
	}
})


client.on("messageUpdate", async (oldMessage, newMessage) => { // Encoded By K4H1N
	const slotData = await db.get("slotData") || false
	if(slotData == false) return
	try {
		if(newMessage.member.id !== owo) return // Encoded By K4H1N
		//if(newMessage.channel.id !== channel) return
		if(newMessage.member.id !== owo) return	
		if(!newMessage.content.includes(`**${ownerName}**`)) return // Encoded By K4H1N

		var status = await db.get("owoVerification") || 0
		var oldSlot = await db.get("slotNumber") || 1 // Encoded By K4H1N
		if(newMessage.content.includes(":c")) {
			if(status !== 0) return

			switch (oldSlot) {
				case 1: {
					await db.set("slotNumber", 2) // Encoded By K4H1N
					ggSlotNextRount()
					break
				}

				case 2: {
					await db.set("slotNumber", 3) // Encoded By K4H1N
					ggSlotNextRount()
					break
				}

				case 3: {
					await db.set("slotNumber", 4) // Encoded By K4H1N
					ggSlotNextRount()
					break
				}

				case 4: {
					await db.set("slotNumber", 5) // Encoded By K4H1N
					ggSlotNextRount()
					break
				}

				case 5: {
					await db.set("slotNumber", 1) // Encoded By K4H1N
					ggSlotNextRount()
					break
				}
			}
		} else {
			if(status !== 0) return // Encoded By K4H1N
			await db.set("slotNumber", 1)
			slotWin()
		}

	} catch (error) {
		console.log(`We encountered an error while executing the "slot" command. The command will be reset and tried again.`)
		slotWin()
	} // Encoded By K4H1N
})

client.on("message", async message => {
	if (message.author.id != owo) return;
	if (message.channel.type == "dm") { // Encoded By K4H1N
		if (message.content.indexOf("Are you a real human? Please use the link below so I can check!") != "-1") await db.set("owoVerification", 1)
		if (message.content.indexOf("Beep Boop. Are you a real human? Please reply with the following") != "-1") await db.set("owoVerification", 1)
		if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") await db.set("owoVerification", 1)
		if (message.content.indexOf("I have verified that you are human!") != "-1") { // Encoded By K4H1N
			await db.set("owoVerification", 0)
			startsAgaing()
			return
		}  // Encoded By K4H1N
		if (message.content.indexOf("Wrong verification code!") != "-1") console.log("\n You entered the wrong verification code. Please try again. (Remember, if you exceed the misspelling limit, you will be permanently banned.) \n")
		if (message.content.indexOf("You have been banned") != "-1") await db.set("owoVerification", 1)
		if(message.content == "**👍 |** I have verified that you are human! Thank you! :3") {
			await db.set("owoVerification", 0)
			startsAgaing() // Encoded By K4H1N
		} 
	}
 
	if(message.channel.id == channel) { // Encoded By K4H1N
		if (message.content.indexOf("Please complete your captcha to verify") != "-1") await db.set("owoVerification", 1)
		if (message.content.indexOf("You have been banned") != "-1") await db.set("owoVerification", 1)
		if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") await db.set("owoVerification", 1)
	}
});
 // Encoded By K4H1N
client.login(token);
 // Encoded By K4H1N
