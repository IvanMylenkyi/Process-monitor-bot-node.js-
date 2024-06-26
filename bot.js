//Import needed modules
import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import psList from 'ps-list';

//сreate a new Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

//create and set value for old process variable
var processRunOld = false;

console.log(process.env.TOKEN)

//set event listener
client.once('ready', () => {
    console.log('Bot is online!');
    const channel = client.channels.cache.get(process.env.CHANNEL_ID); //get channel

    //create a async func of main functionality
    async function checkprocess() {
        const processes = await psList(); //return all processes
        //get a boolean value of some process
        const processRunning = processes.some(p => p.name.includes(process.env.PROCESS_NAME)); 
        
        //Equal values of process and old process
        if (processRunning && !processRunOld) {
            
            if (channel) { //if channel found
                channel.send(`The process ${process.env.PROCESS_NAME} is started!`); //send a message
            }
        }
        //Another equal values of process and old process 
        else if(!processRunning && processRunOld){
            if (channel) { //if channel found
                channel.send(`The process ${process.env.PROCESS_NAME} stopped`); //send a message
            };
        };
        processRunOld = processRunning; //sets value for old process 
    }

    //Set interval for checking on 30 min
    setInterval(checkprocess, 1800000);

    // Initial check
    checkprocess();
});


//start the bot
client.login(process.env.TOKEN);



