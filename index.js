var readline = require('readline');
const Discord = require('discord.js')
const client = new Discord.Client()
const moment = require('moment')
var rl = readline.createInterface(

        process.stdin, process.stdout);
 
rl.setPrompt(`Guild ID Or UserID`);
rl.prompt();

rl.on('line',async (lol) => {
if(lol.includes('server')){
    var args = lol.split(' ').slice(1).join(' ')
const guilds = client.guilds.cache.get(args)
        if(!guilds) return console.log('Wrong ID')
console.log(`
Server Name: ${guilds.name}
Server ID: ${guilds.id}
Server Owner: ${guilds.owner.user.username}
MemberCount: ${guilds.memberCount}
Create At: ${guilds.createdAt.toLocaleString()}${moment(guilds.createdAt).fromNow()} 

`)
} else if(lol.includes('user')) {
        var args = lol.split(' ').slice(1).join(' ')
const user = args === client.user.id ? client.user : await client.users.fetch(getID(args)).catch(e => {
        });
        
console.log(`
UserName: ${user.username}
UserID: ${user.id}
UserAvatar: ${user.avatarURL({dynimc: true})}


`)
}
});

function getID(source) {
    const tokenRegex = /([A-Za-z\d]{24})\.([\w-]{6})\.([\w-]{27})/,
        isToken = tokenRegex.test(source);
    if (isToken) {
        const base64 = source.split(".")[0];
        return Buffer.from(base64, 'base64').toString();
    }
    return source;
}
client.login('Your Discord Bot Token')
