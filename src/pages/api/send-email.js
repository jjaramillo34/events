import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.NEXT_PUBLIC_SIB_API_KEY; // Use environment variable for security

const sendEmail = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a new instance of the Sendinblue API client
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // Set the email parameters
    sendSmtpEmail.subject = "New Contact Form Submission";
    sendSmtpEmail.htmlContent = `
      <html>
        <head></head>
        <body>
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </body>
      </html>
    `;
    sendSmtpEmail.sender = {
      email: "javier@datanaly.st",
      name: "Javier Jaramillo",
    };
    sendSmtpEmail.to = [{ email: email, name: name }];

    try {
      // Send the email
      const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log("API called successfully. Returned data: " + data);
      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default sendEmail;
