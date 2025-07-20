export const sharePointFormElements = {
  outLookUserEmail: "//input[@type='email']",
  emailNextButton: "//input[@type='submit']",
  formUserId: "(//input[@placeholder='Enter your answer'])[1]", //userId
  executionDate: "(//input[@placeholder='Enter your answer'])[2]", // Date
  projectName: "(//input[@placeholder='Enter your answer'])[3]", //Project
  totalTest: "(//input[@placeholder='Enter your answer'])[4]", // TotalTests
  passedTests: "(//input[@placeholder='Enter your answer'])[5]", // Passed Test
  failedTests: "(//input[@placeholder='Enter your answer'])[6]", ////Failed Test
  suiteName: "(//input[@placeholder='Enter your answer'])[7]", ////SuiteName
  skippedTests: "(//input[@placeholder='Enter your answer'])[8]", ////skipped Test
  executionTime: "(//input[@placeholder='Enter your answer'])[9]", ////ExecutionTime
  envName: "(//input[@placeholder='Enter your answer'])[10]", ////EnvName Test
  passPercentage: "(//input[@placeholder='Enter your answer'])[11]", //Pass percentage ka kam
  submitButton: "//*[contains(text(),'Submit')]", ////submit Button
  // reportSuccess: "//span[contains(text(), 'Your response has been successfully recorded.')]",
  reportSuccess: "//span[contains(text(), 'Your response was submitted.')]",
};

export const sharePointUserData = {
  teamChannelWebhookUrl: process.env.TEAMS_WEBHOOK_URL || '',
  sharePointFormURL: process.env.SHAREPOINT_FORM_URL || '',
  outLookUserEmail: process.env.OUTLOOK_EMAIL || '',
  outLookUserPassword: process.env.OUTLOOK_PASSWORD || '',
  outLookUserName: process.env.OUTLOOK_USERNAME || '',
  projectName: "Demo_E-commerce",
  suiteName: process.env.SUITE_NAME || "Swag_Labs_Smoke",
};

export const AppConfig = {
  EnvName: process.env.ENV_NAME || "qa",

  get BaseURL() {
    switch (this.EnvName.toLowerCase()) {
      case 'qa':
        return "https://www.saucedemo.com/";
      case 'prod':
        return "";
      default:
        return "";
    }
  },

  get UserName() {
    switch (this.EnvName.toLowerCase()) {
      case 'qa':
        return "standard_user";
      case 'prod':
        return "";
      default:
        return "";
    }
  },

  get Password() {
    switch (this.EnvName.toLowerCase()) {
      case 'qa':
        return "secret_sauce";
      case 'prod':
        return "";
      default:
        return "";
    }
  },
};
