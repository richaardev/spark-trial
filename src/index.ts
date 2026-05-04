import "dotenv/config";

import { Client, GatewayIntentBits } from "discord.js";

import hello from "./commands/hello";
import serverinfo from "./commands/serverinfo";
import { env } from "./env";

const PREFIX = "!";
const commands = [hello, serverinfo];

export const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("clientReady", (c) => {
  console.log(`Bot ${c.user.username} is now online!`);
  console.log(`Add the bot with this link: https://discord.com/oauth2/authorize?client_id=${c.user.id}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  if (!args) return;

  const commandName = args.shift()?.toLowerCase();
  const command = commands.find((f) => f.name === commandName);
  if (!command) return;

  try {
    await command.run(message, args);
  } catch (error) {
    console.error(`❌ Error executing command ${commandName}:`, error);

    await message
      .reply({
        content: "❌ There was an error executing that command. Please try again later.",
      })
      .catch(console.error);
  }
});

client.login(env.DISCORD_TOKEN);
