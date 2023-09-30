//Client

const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "kafka-node-server",
  brokers: ["192.168.1.243:9092"],
});
