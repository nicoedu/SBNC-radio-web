import { NextApiRequest, NextApiResponse } from 'next'
import sgMail, { MailDataRequired } from '@sendgrid/mail'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email } = req.body
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg: MailDataRequired = {
      to: email, // Change to your recipient
      from: 'assistentecomercial@sbnc.com.br', // Change to your verified sender
      templateId: 'd-5046cdd64ff544cbb5b4df155d4370cf',
      dynamicTemplateData: { name: name }
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
