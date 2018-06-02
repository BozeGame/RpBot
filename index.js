const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("RpBot!")
 var randnum = 0;
 
 bot.on('ready', function() {
     bot.user.setUsername("RpBot")
     bot.user.setPresence({ game: { name: 'Griller des mages con'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 
 bot.on('message', message => {
     if(message.content === "rp!help"){
 
         const embed = new Discord.RichEmbed()
         .setTitle("commandes Disponible")
         .setColor(0xD4FE00)
         .setDescription("")
         . setFooter ( "Si vous avez un problème ... index.js ne répond pas" )
         . addField ( "liste",
           "```help1.exe                                              _ ☐ X\nfaire apparaître des armes :\nrp!katana pour faire apparaître un katana (la logique)\nrp!hache pour faire apparaître attention suspens... une hache (bon ok j'arrète)\nrp!arc pour faire apparaître une canne a pêche... et non c'est pour un arc XD\nrp!faux pour faire apparaître une Faux et pas de Norman, merci :3\nrp!sceptre pour faire apparaître un sceptre de mage :3\nrp!couteau pour faire apparaître un couteau (poignard)\nrp!pistolet pour faire apparaître 2 Pistolet !\nrp!chaîne pour faire apparaître une chaîne en métal magique incassable\nrp!sword pour faire apparaître une épée divine ! (Aucune religion n'est visé)\nrp!dynamite pour faire apparaître des explosifs hyper puissants :3\nrp!baton pour faire apparaitre  un baton en bois... et oui un baton peix faire très mal !```" )
    
         message.channel.send({embed});
     }
     if(message.content === "rp!news" ){ 
 
     const embed = new Discord.RichEmbed()
     .setTitle("Dernières News répertoriés :")
      .setColor(0xD4FE00)
      .setDescription("Liste")
      .setFooter("si vous avez un problème... index.js ne répond pas")
           .addField("",
                     "```02/06/2018 13:53\nMessage du développeur :\n je vous prépare une surprise mais ça sera pas tout de suite car c'est long a faire :3```")
  
      message.channel.send({embed});
 }
if (message.content === "Bienvenue"){
    random();
    if (randnum == 1){
     message.channel.send(`Bienvenue... ehh... c'est qui qui à rejoin ? Là je suis vraiment perdu...`);
}
if (randnum == 2){
    message.channel.send(`Bienvenue... index.js ne répond pas !\nraison : j'ai la flemme de te répondre :3`);
}
if (randnum == 3){
    message.channel.send(`Bienvenue je ne sais qui, Bienvenue dans le rp **{server}** ehh... non c'est pas ça... `);
}}
  if(message.content.startsWith("rp!katana")){
    message.channel.send(`**${message.author.username}** fait apparaître son Katana !`,{
    file:"https://orig00.deviantart.net/8300/f/2007/171/b/e/katana_by_vyrosia.jpg"
})
}
if(message.content.startsWith("rp!hache")){
    message.channel.send(`**${message.author.username}** fait apparaître sa Hache !`,{
    file:"https://i.pinimg.com/originals/71/02/0b/71020b0b0f15002ef877deb3f716dad6.jpg"
})
}
if(message.content.startsWith("rp!arc")){
    message.channel.send(`**${message.author.username}** fait apparaître son arc !`,{
    file:"http://img4.hostingpics.net/pics/484588arc.png"
})
}
if(message.content.startsWith("rp!faux")){
    message.channel.send(`**${message.author.username}** fait apparaître sa Faux !`,{
    file:"https://cdn.discordapp.com/attachments/448046019301736452/448060981978071040/th.jpg"
})
}
if(message.content.startsWith("rp!sceptre")){
    message.channel.send(`**${message.author.username}** fait apparaître son Sceptre !`,{
    file:"https://i.skyrock.net/4010/71994010/pics/3154696378_1_6_CYLmvdbs.png"
})
}
if(message.content.startsWith("rp!couteau")){
    message.channel.send(`**${message.author.username}** fait apparaître son Couteau (poignard) !`,{
    file:"http://img.hebus.com/hebus_2010/06/03/preview/100603180307_19.jpg"
})
}
if(message.content.startsWith("rp!pistolet")){
    message.channel.send(`**${message.author.username}** fait apparaître son Pistolet (x2) !`,{
    file:"https://i.skyrock.net/1287/90701287/pics/3220760413_1_16_rngUeCl8.jpg"
})
}
if(message.content.startsWith("rp!chaîne")){
    message.channel.send(`**${message.author.username}** fait apparaître sa chaîne !`,{
    file:"https://cdn.discordapp.com/attachments/448162387434930176/448162555165409281/38_elingue-chaine-d16-lg-2m50.jpg"
})
}
if(message.content.startsWith("rp!sword")){
    message.channel.send(`**${message.author.username}** fait apparaître son épée !`,{
    file:"https://cdn.discordapp.com/attachments/448128099247456256/448131072887357440/unknown.png"
})
}
if(message.content.startsWith("rp!dynamite")){
    message.channel.send(`**${message.author.username}** fait apparaître sa dynamite!`,{
    file:"https://cdn.discordapp.com/attachments/449255475389661204/449255515596259330/telechargement_2.jpeg"
})
}
if(message.content.startsWith("rp!call")){
    message.channel.send(`**${message.author.username}**, vous appelez <@323807479651631104> avec succes !`,{
})
}
if(message.content.startsWith("rp!baton")){
    message.channel.send(`**${message.author.username}** fait apparaître son bâton !`,{
    file:"https://cdn.discordapp.com/attachments/446324148730331176/451061465764593674/1527345634780.png"
})
}
}
)
function random(min, max) {
    min = Math.ceil(0)// 0 est impossible a avoir
    max = Math.floor(3)
    randnum = Math.floor(Math.random() * (max - min +1) + min);
 }
