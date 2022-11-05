import { Carousel } from "flowbite-react";
import { FC, useState, useEffect } from "react";

type Event = {
  entityId: string
  id: number,
  name: string,
  org: number,
  description: string,
  image: string,
  city: string,
  address: string,
  categories: string[],
}

const EventsCarousel: FC<Event> = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
      fetch('/api/events').then((res) => {
          res.json().then((data) => {
              console.log(data)
              setEvents(data['events'])
          })
      });

  }, [])

    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {events.map((event: Event) => (
        <div className="flex content-center justify-center h-max">
          <div>
            <img
              className="w-auto h-3/6 px-2 pb-3"
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <div className="text-gray-200 h-2/6">
              <h1>{event.name}</h1>
            </div>
          </div>
        </div>
        ))}
      </Carousel>
    </div>
    );
  };

  export default EventsCarousel;