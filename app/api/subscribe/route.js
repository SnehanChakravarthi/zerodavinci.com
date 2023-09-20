import { NextResponse } from "next/server";

const mailchimp = require("@mailchimp/mailchimp_marketing");
const crypto = require("crypto");

function md5(string) {
  return crypto.createHash("md5").update(Buffer.from(string)).digest("hex");
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  const formData = await request.json();
  const { name, email } = formData;
  const names = name.split(" ");

  const firstName = names[0];
  const lastName = names.length > 1 ? names.slice(1).join(" ") : "";

  console.log("Fname:", firstName);
  console.log("Lname:", lastName);
  console.log("Email:", email);

  try {
    // Add the contact to the list
    const addResponse = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      }
    );

    console.log(`Successfully added contact with id ${addResponse.id}`);

    // Label the contact with "ReactTesting" tag
    const subscriberHash = md5(email.toLowerCase());
    const tagResponse = await mailchimp.lists.updateListMemberTags(
      process.env.MAILCHIMP_LIST_ID,
      subscriberHash,
      {
        tags: [
          {
            name: "ReactTesting",
            status: "active",
          },
        ],
      }
    );

    console.log(
      `Tagging response is null, so this should be true: ${
        tagResponse === null
      }`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding and tagging contact:", error);
    return NextResponse.json({ success: false, error: error.status });
  }
}
