# login-test-backend
Node js backend to login test

# INSTRUCTIONS

This project use a MongoDBdatabse so you have to create a collection in your local

## STEPS TO CREATE YOUR LOCAL MONGODB DATABSE

1. Run your mongodb instance with the following command:
   brew services start mongodb-community@6.0
2. Run mongosh to connect with your local instance
   mongosh
3. Create a database
   use mydatabase

## CONFIGURE YOUR LOCALENVS CORRECTLY
1. The most of env variables are ok with default values, just take care about DATABASE_BASE_URL, put the correct URL
   usually the mongodb url databse is like 'mongodb://localhost:27017/[name of your database]', just make sure that you are using
   the same database name like the step 3 in creating your local mongodb databse

To run the project execute:

### npm install
### npm run start

