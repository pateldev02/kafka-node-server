// const { Kafka } = require("kafkajs");
const { kafka } = require("./client");
//client
// const kafka = new Kafka({
//   clientId: "kafka-node-server",
//   brokers: ["192.168.1.243:9092"],
// });

//Admin
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting....");
  admin.connect();
  console.log("Admin connection success....");

  console.log("Creating Topics....");
  admin.createTopics({
    //Topics
    topics: [
      {
        topic: "rider-updates", //Properties
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics created....");

  console.log("Disconnecting admin....");
  await admin.disconnect();
}

init();
