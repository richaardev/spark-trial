import type { Message } from "discord.js";

export default {
  name: "serverinfo",
  async run(message: Message, _: string[]) {
    // biome-ignore lint/style/noNonNullAssertion: we know that guild is valid here
    const guild = message.guild!;

    message.reply({
      content: [
        "## Server Information",
        `**${guild.name}**`,
        `**Total Members:** ${guild?.memberCount ?? guild?.approximateMemberCount ?? "Unknown"}`,
        `**Creation date:** ${Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "medium" }).format(guild.createdAt)}`,
      ].join("\n"),
    });
  },
};
