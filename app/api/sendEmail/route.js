import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_KEY);

export async function POST(req) {
  try {
    const { email, title, content } = await req.json();
    console.log(content);
    const cont = JSON.stringify(content);
    var stringToHTML = function (str) {
      var dom = document.createElement("div");
      dom.innerHTML = str;
      return dom;
    };

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: title,
      react: <div>{content}</div>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
