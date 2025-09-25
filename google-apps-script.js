// Google Apps Script for Newsletter Email Collection
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = data.timestamp;
    
    // Open your Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('1xt2ANixX1xPiz74bnNxHUHX9wt5qcJgB--LkR9BJgBM').getActiveSheet();
    
    // Check if email already exists
    const emails = sheet.getRange('A:A').getValues().flat();
    if (emails.includes(email)) {
      return ContentService.createTextOutput('Already subscribed');
    }
    
    // Add new subscriber
    sheet.appendRow([email, timestamp]);
    
    return ContentService.createTextOutput('Success');
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

function doGet() {
  return ContentService.createTextOutput('Newsletter subscription service is running');
}

// Setup Instructions:
// 1. Create a new Google Sheet
// 2. Add headers: Email | Timestamp in row 1
// 3. Copy this script to Google Apps Script (script.google.com)
// 4. Replace YOUR_GOOGLE_SHEET_ID with your actual sheet ID
// 5. Deploy as web app with execute permissions for "Anyone"
// 6. Copy the web app URL and replace YOUR_SCRIPT_ID in the HTML