import { Resend } from 'resend';
import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = contactFormSchema.parse(json);
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jotyy318@gmail.com',
      subject: `Hello from ${name}<${email}>`,
      html: `<p>${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return Response.json({ error }, { status: 500 });
  }
}
