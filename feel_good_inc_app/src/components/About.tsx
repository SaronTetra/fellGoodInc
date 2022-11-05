import {GetServerSideProps, GetServerSidePropsResult} from "next";
import { FC } from "react";

interface Message {
    message: string
}

type Events = {
    events: Event[]
}

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

import { useState, useEffect } from 'react'
// import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";


const About: FC<Event> = () => {
    const [hits, setHits] = useState([])

    const search = async (event) => {
        const q = event.target.value;
        if (q.length > 2) {
            const params = new URLSearchParams({q})

            const res = await fetch('/api/events');
            const result = await res.json();
            console.log(result)
            setHits(result['events'])
        }
    }

    return (
        <div>
            <input onChange={search} type="text" />

            <ul>
                {hits.map((hit) => (
                    <li key={hit.entityId}>
                        {hit.name}
                    </li>
                ))}
            </ul>
        </div>
    )

    // return (
    //     <div className="text-gray-200">
    //         {data.map((event) => (
    //             <div>
    //                 <img
    //                     className="w-1/5 px-2"
    //                     alt="..."
    //                     src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
    //                 />
    //                 <div>
    //                     <h1>{event.name}</h1>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
}
    
// export async function getServerSideProps(_context: any): Promise<GetServerSidePropsResult<Events>>  {
//     const res = await fetch('http://localhost:3000/api/events')
//     console.log(res)
//     const events = await res.json()
//     console.log(events)
//
//     return {
//         props: {
//             events,
//         },
//     }
// }

export default About