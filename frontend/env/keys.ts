export const env = { 
  site: process.env.IP,
  redirectRoute:`${process.env.IP}v1/redirect`,
  linkDiscordRoute:`${process.env.IP}v1/linker/discord`,
  createFormRoute:`${process.env.IP}v1/hackaton/sendForm`,
  redirected: `${process.env.IP}v1/any`
}