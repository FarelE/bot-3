(async () => {
	switch (command) {
		case "tts": {
			if (q === "help") {
				await m.reply(`*❗Command:* Text-To-Speech\n*🍀Aliases* -tts\n*🧩Category:* Downloader/Utils\n*🛠️Usage:* ${
                prefix + command
              } Text\n\n*📚Description:* Changes your text into Voice`);
				return;
			}
			let texttts = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
			const googleTTS = require("google-tts-api"); // CommonJS
			const ttsurl = googleTTS.getAudioUrl(texttts, {
				lang: "en",
				slow: false,
				host: "https://translate.google.com",
			});
		sisaco.sendMessage(from, {audio:{url: ttsurl}, mimetype:"audio/mpeg", ptt:true,waveform:"AAMGBwUiLS0vKywyOTQyJiYoJy0sIiAdGBALBQgYLjMsKisoJSMkMjMyMCwjExsbGCQxHiUrJx0gIBcIDBUaIQ=="}, {quoted: m});
		}
		break;
	}
})()
