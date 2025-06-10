import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: "Contact API" });
}

export async function POST(request) {
  const formData = await request.formData(); // Handle form data instead of JSON
  const email = formData.get('email');
  const name = formData.get('name');
  const mobile = formData.get('mobile');
  const position = formData.get('position');
  const city = formData.get('city');
  const resume = formData.get('resume'); // This will be a File object

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  // Convert the file to a buffer for the attachment
  const resumeBuffer = await resume.arrayBuffer();
  const attachment = {
    filename: resume.name,
    content: Buffer.from(resumeBuffer),
    contentType: resume.type,
  };

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_USER,
    to: 'ravikiran@brightbridgeinfotech.com,vivinrajkumar.r@ejindia.com,hiring@ejindia.com,vivin.emerald@gmail.com,vasanth.t@ejindia.com,e21663@ejindia.com,retail.crm@ejindia.com',
    replyTo: email,
    subject: `New Job Application from ${name} (${email})`,
    html: `
      <p>You have a new job application submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>City:</strong> ${city}</p>
    `,
    attachments: [attachment], // Attach the resume
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
