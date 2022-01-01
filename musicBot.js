const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:1};

const token = ''; //Your Bot Discord token
bot.login(token);

bot.on('ready', () => {
    console.log('Estou pronto para ser usado!');

});

bot.on('message', msg => {
    if(msg.author.bot){
        return;
    }

    if(msg.constent.toLowerCase().startsWith("?play")) {
        Let.VoiceChannel = msg.guild.channels.find( channel => channel.id === ''); //Your channel ID
        if(VoiceChannel == null){
            console.log('Canal não foi encontrado!');
        }
        if(VoiceChannel != null){
            console.log('O canal foi encontrado');

            VoiceChannel.join()
            .then(connection => {
                const stream =  ytdl('https://www.youtube.com/', {filter:'audioonly'}); // Your streaming music link

                const DJ = connection.playStream(stream, streamOptions);
                DJ.on('end', end => {
                   VoiceChannel.leave();
                });
            })
            .catch(console.error);
        }
    }

});