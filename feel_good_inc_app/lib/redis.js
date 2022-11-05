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
    org: { type: "string" },
    description: { type: "text" },
    image: { type: "string" },
    city: { type: "text" },
    address: { type: "text" },
    categories: { type: "string[]" },
    attendees: { type: "number" },
    isHidden: { type: "boolean" },
  },
  {
    dataStructure: "JSON",
  }
);

let reviewSchema = new Schema(
  Review,
  {
    eventId: { type: "string" },
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

export async function createCategoryIndex() {
  await connect();

  const categoryRepository = client.fetchRepository(categorySchema);
  await categoryRepository.createIndex();
}

export async function getAllEvents() {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const events = await eventRepository.search().return.all();

  return events;
}

export async function getVisibleEvents() {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const events = await eventRepository
    .search()
    .where("isHidden")
    .false()
    .return.all();

  return events;
}

export async function createEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const event = eventRepository.createEntity(data);
  const id = await eventRepository.save(event);
  return id;
}

export async function getEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const event = eventRepository.fetch(data);
  return event;
}

export async function deleteEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  await eventRepository.remove(data);
}

export async function createCategory(data) {
  await connect();

  const categoryRepository = client.fetchRepository(categorySchema);
  const category = categoryRepository.createEntity(data);
  const id = await categoryRepository.save(category);
  return id;
}

export async function getAllCategories() {
  await connect();

  const categoryRepository = client.fetchRepository(categorySchema);
  const categories = await categoryRepository.search().return.all();

  return categories;
}

export async function createUser(data) {
  await connect();

  const userRepository = client.fetchRepository(userSchema);
  const user = userRepository.createEntity(data);
  const id = await userRepository.save(user);
  return id;
}

export async function addAttendee(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const event = await eventRepository.fetch(data);
  event.attendees = event.attendees + 1;
  const id = await eventRepository.save(event);

  return event.attendees;
}

export async function hideEvent(data) {
  await connect();

  const eventRepository = client.fetchRepository(eventSchema);
  const event = await eventRepository.fetch(data);
  event.isHidden = true;
  const id = await eventRepository.save(event);
}
