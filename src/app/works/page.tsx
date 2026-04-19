import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Works | IS-IT Solution",
  description: "Explore our portfolio of premium POS systems, web development projects, and brand designs.",
};

export default function WorksPage() {
  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Our <span className="text-brand-amber">Work</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Delivering high-end solutions across industries. Filter by category to see how we bring precision, performance, and premium aesthetics to every project.
          </p>
        </div>
        
        <PortfolioGrid />
      </div>
    </div>
  );
}
