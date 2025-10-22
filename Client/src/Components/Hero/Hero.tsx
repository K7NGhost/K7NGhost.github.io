import { ArrowDown } from "lucide-react";

import { Button } from "../../components/ui/button";

function scrollToWork() {
  const el = document.getElementById("work");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-24 md:py-32">
      {/* subtle brand glow behind content */}

      <div className="group text-center max-w-3xl mx-auto relative z-10 p-8 md:p-12 rounded-3xl border bg-background/60 backdrop-blur-md border-white/10 shadow-2xl transition-all duration-300">
        <h1 className="text-5xl md:text-7xl font-light mb-5 tracking-tight leading-tight">
          Hello, I'm <span className=" text-[#c93c46]">Kevin</span>.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground/90 mb-12 font-light max-w-2xl mx-auto">
          Full‑stack developer and CS @ VCU focused on building fast, delightful
          experiences.
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={scrollToWork}
          className="group relative border-[#cc3e48] text-[#cc3e48] hover:bg-[#cc3e48] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc3e48]/40 transition-colors duration-200"
        >
          View my work
          <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
