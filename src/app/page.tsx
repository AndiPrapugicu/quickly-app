import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import Courses from "./courses/page";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Courses />
      <Footer />
    </div>
  );
}
