import type { NextPage } from "next";
import AddTask from "./AddTask";
import Header from "./Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <AddTask />
    </>
  );
};

export default Home;
