import { Carousel } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

type Events = {
  events: [];
};

const Events: FC<Events> = function ({ events }): JSX.Element {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {events.map((event: any) => (
          <div className="flex content-center justify-center h-max">
            <div>
              <Image
                className="w-1/5 h-auto px-2"
                alt="..."
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              />
              <div>
                <h1>{event.title}</h1>
              </div>
            </div>
            <Image
              className="w-1/5 h-auto px-2"
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
            <Image
              className="w-1/5 h-auto px-2"
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
