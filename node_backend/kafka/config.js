const config = {
  // KAFKA_HOST: "localhost",
  KAFKA_HOST: "ec2-3-137-217-134.us-east-2.compute.amazonaws.com",
  KAFKA_PORT: 9092,
  DB:{
    "host": "lab1237cmpe.cauvszlanaze.us-east-2.rds.amazonaws.com",
    "username": "auro",
    "password": "gnQAMYArWg3rqfuntohZ",
    "port": 3306,
    "database":"indeed"
},
secret: "mysql"
};

module.exports = config;
