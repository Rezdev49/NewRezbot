function handler(m) {
  
  const kontak = {
	"displayName": 'Owner ku',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6283811034750@s.whatsapp.net')}\nitem1.TEL;waid=6283811034750:6283811034750\nitem1.X-ABLabel:Busy.\nURL;My Web: https://rezdev.my.id\nEMAIL;Email Owner: rezdev499@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;Nomer bot ku;waid=6282177930256:6282177930256\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler