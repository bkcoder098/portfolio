import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

 const  App = () => {



 return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
        {/* Multi-Color Dark Animated Gradient */}
      <div className="animated-gradient-dark fixed inset-0"></div>
      {/* Stars Layer */}
      <div className="stars fixed inset-0"></div>
      {/* Subtle Overlay for Readability */}
      <div className="fixed inset-0 bg-black bg-opacity-35"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  );
};

              // OLD VERSION

//   return (
//     <main className="mx-auto mx-w-7xl overflow-x-hidden antialiased">
//       {/* <div className=" bg-image fixed inset-0 bg-cover bg-fixed bg-center "></div> */}

//       {/* <div className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"></div> */}
//       {/* <div className="fixed inset-0 animated-gradient"></div> */}
//       <div className="animated-gradient-dark fixed inset-0"></div>

//       <div className="relative z-10">
//         <Navbar/>
//         <Hero/>
//         <Projects/>
//         <Skills/>
//         {/* <Experience/> */}
//         <Education/>
//         {/* <Testimonials/> */}
//         <Contact/>
//       </div>
//     </main>
//   )
// };


export default App
