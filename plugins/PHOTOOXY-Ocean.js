import { photooxy } from '@shizodevs/wabotmodule';

let handler = async (m, { conn, args }) => {
let shizo = `${args}`
conn.reply(m.chat, wait, m)
  try {
    const imageUrl = await photooxy('https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html', shizo);
    conn.sendFile(m.chat, imageUrl, 'image.jpg', maker, m);
  } catch (error) {
   console.error(error);
    conn.reply(m.chat, 'An error occurred while generating the image.', m);
  }
};

handler.help = ['underwater', 'uwoxy'];
handler.tags = ['photooxy'];
handler.command = /^(underwater|uwoxy)$/i;

export default handler;
