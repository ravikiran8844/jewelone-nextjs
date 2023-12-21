import {  NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS:true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
    }

    // host: 'smtp.ethereal.email',
    // port: 587,
    // auth: {
    //     user: 'janice74@ethereal.email',
    //     pass: 'wt8uxrdQU7erYVyfxa'
    // }
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_USER,
    to: 'retail.crm@ejindia.com',
    replyTo: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Jewlone Contact form - Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}