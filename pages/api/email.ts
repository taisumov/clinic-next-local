import { type NextApiRequest, type NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailProps {
	select: string;
	data: string;
	name: string;
	phone: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const requestBody = req.body as EmailProps;
	const TEXT = `
  <p><strong>Услуга:</strong> ${requestBody.select}</p>
  <p><strong>Имя:</strong> ${requestBody.name}</p>
  <p><strong>Дата:</strong> ${requestBody.data}</p>
  <p><strong>Контактный номер:</strong> ${requestBody.phone}</p>
  `;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: false,
		auth: {
			user: process.env.MAIL_USERNAME ?? 'taisumoov@gmail.com',
			pass: process.env.MAIL_PASSWORD ?? 'trcxqmdfrixsbteg',
		},
	});

	const mailOptions = {
		from: 'taisumoov@gmail.com',
		to: 'islam.taisumov10@gmail.com',
		subject: `Заявка на услугу "${requestBody.name}"`,
		text: requestBody.select,
		html: TEXT,
	};

	transporter.sendMail(mailOptions, (error: any) => {
		if (error) {
			console.log(error);
			res.status(500).send(error);
		} else {
			res.send('Email sent');
		}
	});
}
