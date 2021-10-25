import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  secure: process.env.MAIL_TLS !== undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

function getSubject (form) {
  return 'Neue Nachricht im Meckerkasten der Fachschaft Informatik'
}

function getBody (form) {
  return `Es ist eine neue Nachricht im Meckerkasten der Fachschaft Informatik eingegangen.

Antwortadresse:
${form.email || '(nicht angegeben)'}

Nachricht:
${form.message}
`
}

async function verifyCaptcha (form) {
  const resp = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      response: form['h-captcha-response'],
      secret: process.env.HCAPTCHA_SECRET
    })
  })
  if (resp.status !== 200) {
    throw new Error('Can not reach hCaptcha backend')
  }
  const body = await resp.json()
  if (!body.success) {
    throw new Error('Invalid hCaptcha response')
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}

export default async (req, res) => {
  try {
    const form = req.body
    await verifyCaptcha(form)
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: form.email || undefined,
      subject: getSubject(form),
      text: getBody(form)
    })
    res.redirect('../done')
  } catch (e) {
    console.error(e)
    res.redirect('../error?message=' + encodeURIComponent(e.message))
  }
}
