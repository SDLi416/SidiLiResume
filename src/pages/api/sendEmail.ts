// pages/api/sendEmail.ts
import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

const pwd = 'bavmnfmwfagjbghf';
const fromEmail = 'icubic@qq.com'

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  auth: {
    user: fromEmail,
    pass: pwd,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {name, email, message} = req.body;

  const mailOptions = {
    from: fromEmail,
    to: fromEmail,
    subject: `来自${email}的简历联系, 标题: ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};
