import type { Message } from "discord.js";

import { client } from "..";

export default {
  name: "hello",
  async run(message: Message, args: string[]) {
    const userId = args[0]?.replace(/\D+/g, "");
    if (!userId)
      return message.reply({
        content: "You must mention a user to say hello!",
      });

    const user = await client.users.fetch(userId).catch(() => null);
    if (!user)
      return message.reply({
        content: "The user indicated is invalid! Please mention a valid user!",
      });

    message.reply({
      content: `Hello <@!${user.id}>! 👋 Welcome to the server.`,
    });
  },
};
