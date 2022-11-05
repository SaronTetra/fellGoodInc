import { Carousel } from "flowbite-react";
import { FC } from "react";

type Events = {
  events: Event[]
}

type Event = {
  id: number,
  name: string,
  org: number,
  description: string,
  image: string,
  city: string,
  address: string,
  categories: string[],
}

const EventsCarousel: FC<Events> = function ({ events }): JSX.Element {
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex content-center justify-center h-max">
        {events.map((event) => (
          <div>
            <img
              className="w-1/5 px-2"
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <div>
              <h1>{event.name}</h1>
            </div>
          </div>
        ))}
        </div>
      </Carousel>
    </div>
    );
  };

  export async function getStaticProps() {
    const res = await fetch('/api/events')
    const events = await res.json()
  
    return {
      props: {
        events,
      },
    }
  }
  
  export default EventsCarousel;