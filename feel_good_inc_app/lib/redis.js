/* eslint-disable no-unused-vars */
import { Client, Entity, Schema } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class User extends Entity {}
class Event extends Entity {}
class Review extends Entity {}
class Category extends Entity {}

let userSchema = new Schema(
  User,
  {
    name: { type: "text" },
    isInstitution: { type: "boolean" },
    description: { type: "text" },
  },
  {
    dataStructure: "JSON",
  }
);

let eventSchema = new Schema(
  Event,
  {
    name: { type: "text" },
    org: { type: "number" },
    description: { type: "text" },
    image: { type: "string" },
    city: { type: "text" },
    address: { type: "text" },
    categories: { type: "string[]" },
  },
  {
    dataStructure: "JSON",
  }
);

let reviewSchema = new Schema(
  Review,
  {
    eventId: { type: "number" },
    review: { type: "number" },
  },
  {
    dataStructure: "JSON",
  }
);

let categorySchema = new Schema(
  Category,
  {
    name: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createEventIndex() {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  await eventRepository.createIndex();
}

export async function getAllEvents() {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const events = await eventRepository.search().return.all();

  return events;
}

export async function createEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const event = eventRepository.createEntity(data);
  const id = await eventRepository.save(event);
  return id;
}

export async function deleteEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  await eventRepository.remove(data);
}
