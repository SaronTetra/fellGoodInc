import { GetServerSideProps } from "next";
import { FC } from "react";

type Message = {
    message: string
}

const About: FC<Message> = ({message}) => {
    return (
        <div className="text-gray-200">
            <h1>This is Home Page</h1>
            <h2>{message}</h2>
        </div>
    );
}
    
export const getServerSideProps: GetServerSideProps = async (_context) => {
    return {
        props: { message: "Welcome to the About Page" },
    };
}

export default About