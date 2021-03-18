import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, subject, message, email, phone } = req.body
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg = {
      to: 'assistentecomercial@sbnc.com.br', // Change to your recipient
      from: 'assistentecomercial@sbnc.com.br', // Change to your verified sender
      subject: subject,
      text:
        'Mensagem de ' + name + ' (' + email + ', ' + phone + '): ' + message
    }
    await sgMail
      .send(msg)
      .then(() => {
        res.status(200).end()
      })
      .catch((error) => {
        console.error(error)
        res.status(400).json(error)
      })
  }
}
