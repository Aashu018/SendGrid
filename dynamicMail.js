const sgMail = require("@sendgrid/mail");
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const ATOM = 'Some Value';
const msg = {
    to: "agarwalk444@gmail.com",
    from: {
        name: ATOM,
        email:"ashish.agarwal@atomtechnologies.io"
      },
   templateId: process.env.TEMPLATE_ID,
   dynamicTemplateData: {
      name : 'Ashish'
   }
  };

  const sendMail = async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  };

sendMail();