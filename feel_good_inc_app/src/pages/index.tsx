import { Button, Footer, Modal } from "flowbite-react";
import Head from "next/head";
import { useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  HiArrowSmRight,
  HiChartPie,
  HiPlus,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";
import EventsCarousel from "../components/EventsCarousel";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { SidebarProvider } from "../context/SidebarContext";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Feel Good Inc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SidebarProvider>
        <Header />
        <div className="flex dark:bg-gray-900 w-full">
          <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
            <HomePage />
          </main>
          <div className="order-1">
            <ActualSidebar />
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiPlus}>
            AddUser
          </Sidebar.Item>
          <Sidebar.Item href="login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Add New Event
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function HomePage(): JSX.Element {
  return (
    <>
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-gray-200">
            Feel Good Inc
          </h1>
          <p className="mb-6 text-2xl font-extrabold dark:text-gray-200">
            Feel Good Inc
          </p>
        </header>
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Top Events
          </h2>
        </header>
        {/* <EventsCarousel /> */}
      </section>
      <section>
        <EventsCarousel entityId={""} id={0} name={""} org={0} description={""} image={""} city={""} address={""} categories={[]} />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Events
          </h2>
        </header>
        <ModalNewElement />
        <FooterExample />
      </section>
    </>
  );
}

function ModalNewElement(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event);

    const form = JSON.stringify({
      name: event.target.name.value,
      org: event.target.email.value,
      description: event.target.description.value,
      image: event.target.photo.value,
      city: event.target.where.value,
      address: event.target.adres.value,
      categories: [event.target.email.value],
    });
    console.log(form);

    const results = sendModal(form);
    console.log(results);
    setOpen(false)
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Set new events</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>CreateEvent</Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="space-y-3">
              <div className="flex space-x-12 space-y-3 ">
                <label
                  htmlFor="name"
                  className="py-4  block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                ></input>
              </div>
              <div className="flex space-x-14 ">
                <label
                  htmlFor="email"
                  className=" py-2 block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  User
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                ></input>
              </div>
              <div className="flex space-x-14 ">
                <label
                  htmlFor="date"
                  className=" py-2 block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                ></input>
              </div>
              <div className="flex space-x-14 ">
                <label
                  htmlFor="where"
                  className=" py-2 block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City
                </label>
                <input
                  type="text"
                  name="where"
                  id="where"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                ></input>
              </div>
              <div className="flex  space-x-7">
                <label
                  htmlFor="competence"
                  className=" py-2 block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Address{" "}
                </label>
                <input
                  type="text"
                  name="adres"
                  id="adres"
                  className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></input>
              </div>

              <div className="flex space-x-12">
                <label
                  htmlFor="photo"
                  className=" py-2 block  mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Background photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className=" px-5"
                ></input>
              </div>

              <div className="flex space-x-2">
                <label
                  htmlFor="description"
                  className="py-10 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={5}
                  className="bg-gray-50 border width=20% border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500"
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
async function sendModal(modalObject: any) {
  const res = fetch("/api/createEvent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: modalObject,
  });
  const result = await (await res).json();
  console.log(result);
}

function FooterExample(): JSX.Element {
  return (
    <Footer container>
      <div className="w-full sm:flex sm:items-center sm:justify-between mb-0 pb-0">
        <Footer.Copyright href="#" by="Proteus Belivers" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsDribbble} />
        </div>
      </div>
    </Footer>
  );
}
