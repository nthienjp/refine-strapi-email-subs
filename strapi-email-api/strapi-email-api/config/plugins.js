module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'your-email-adress',
        defaultReplyTo: 'your-email-adress',
        testAddress: 'your-email-adress',
      },
    },
  });