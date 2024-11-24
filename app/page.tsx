import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Trust from "@/components/trust";
import ExploreCourses from "@/components/Explorecourses";
import Achivement from "@/components/achivement";
import Courses from "@/components/courses";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Trust />
      <ExploreCourses />
      <Achivement/>
      <Courses/>
      <Team/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
