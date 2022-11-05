import { Carousel, Button } from "flowbite-react";
import { FC, useEffect, useState } from "react";

type Event = {
  entityId: string;
  id: number;
  name: string;
  org: number;
  description: string;
  image: string;
  city: string;
  address: string;
  categories: string[];
};

const EventsCarousel: FC<Event> = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setEvents(data["events"]);
      });
    });
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {events.map((event: Event) => (
          <div className="flex content-center justify-center h-max">
            <div className="flex content-center justify-center h-max">
              <img
                className="w-1/2 h-3/6 px-2 pb-3"
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              />

              <div className="dark:text-gray-400 w-1/2 flex flex-col mt-20 pt-20 ml-10">
                <h1 className="text-4xl">{event.name}</h1>
                <p>{event.description}</p>
                <h5 className="text-xl">{event.city} {event.address}</h5>
                <Button >Sign up</Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
