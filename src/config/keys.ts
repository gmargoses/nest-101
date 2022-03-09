const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;

export default {
  mongoUri: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.uajre.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
};
