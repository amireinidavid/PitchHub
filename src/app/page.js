import { fetchProfileAction } from "@/actions";
import AboutSection from "@/components/about-page";
import Contact from "@/components/contact-page";
import FeaturesSection from "@/components/features";
import Hero from "@/components/hero";
import HowToUse from "@/components/howtouse";
import Testimonials from "@/components/Testimonials";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <div className="w-full h-full min-h-screen">
      <Hero />
      <AboutSection />
      <div className="mt-10">
        <FeaturesSection />
      </div>
      <div className="mt-10">
        <Testimonials />
      </div>
      <div className="mt-12">
        <HowToUse />
      </div>
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
