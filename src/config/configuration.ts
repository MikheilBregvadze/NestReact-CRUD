export default () => ({
  // Add your own properties here however you'd like
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
});
