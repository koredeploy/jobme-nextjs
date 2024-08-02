// import { google } from 'googleapis';
// import { GoogleAuth } from 'google-auth-library';


// const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64, 'base64').toString());

// const auth = new GoogleAuth({
//   credentials,
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// // Replace with your Google Sheet ID and range
// const SPREADSHEET_ID = process.env.SPREADSHEET_ID
// const RANGE = 'Sheet1!A:E';



// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { name, email, phoneNumber, subject, message } = req.body;

//       if (!name || !email || !phoneNumber || !subject || !message) {
//         return res.status(400).json({ message: "Missing required fields" });
//       }

//       const sheets = google.sheets({ version: 'v4', auth });

//       const response = await sheets.spreadsheets.values.append({
//         spreadsheetId: SPREADSHEET_ID,
//         range: RANGE,
//         valueInputOption: 'USER_ENTERED',
//         requestBody: {
//           values: [[name, email, phoneNumber, subject, message]],
//         },
//       });

//       res.status(200).json({ message: "Data added to Google Sheet successfully", response: response.data });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: "Error adding data to Google Sheet", error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

let auth;

try {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS_BASE64 is not set');
  }
  
  const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64, 'base64').toString());
  
  auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
} catch (error) {
  console.error('Error setting up Google auth:', error);
  // You might want to set a default auth or handle this error appropriately
}

// // Replace with your Google Sheet ID and range
const SPREADSHEET_ID = process.env.SPREADSHEET_ID
const RANGE = 'Sheet1!A:E';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (!auth) {
        throw new Error('Google auth is not properly initialized');
      }

      // ... rest of your handler code ...
      const { name, email, phoneNumber, subject, message } = req.body;

      if (!name || !email || !phoneNumber || !subject || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const sheets = google.sheets({ version: 'v4', auth });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, email, phoneNumber, subject, message]],
        },
      });

      res.status(200).json({ message: "Data added to Google Sheet successfully", response: response.data });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: "Error processing request", error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}