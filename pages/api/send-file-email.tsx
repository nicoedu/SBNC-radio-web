import { NextApiRequest, NextApiResponse } from 'next'
import sgMail, { MailDataRequired } from '@sendgrid/mail'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg: MailDataRequired = {
      to: email, // Change to your recipient
      from: 'assistentecomercial@sbnc.com.br', // Change to your verified sender
      templateId: 'd-5046cdd64ff544cbb5b4df155d4370cf',
      dynamicTemplateData: { name: name }
    }

    const msg2: MailDataRequired = {
      to: 'assistentecomercial@sbnc.com.br',
      from: 'assistentecomercial@sbnc.com.br', // Change to your verified sender
      templateId: 'd-5e110a4c15464a1da9c92a17c0add342',
      dynamicTemplateData: { name: name, email: email, phone: phone }
    }
    await sgMail
      .send(msg)
      .then(async () => {
        await sgMail
          .send(msg2)
          .then(() => {
            res.status(200).end()
          })
          .catch((error) => {
            console.error(error)
            res.status(400).json(error)
          })
      })
      .catch((error) => {
        console.error(error)
        res.status(400).json(error)
      })
  }
}
