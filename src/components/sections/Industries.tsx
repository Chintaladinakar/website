import { FadeIn } from "@/components/ui/fade-in";

const industries = [
  "Aerospace", 
  "Consumer Electronics", 
  "Defence Systems", 
  "Healthcare", 
  "IoT", 
  "Industrial Electronics", 
  "Railways"
];
const standards = [
  "ISO 9001:2015", 
  "AS9100D", 
  "Quality Management Certified", 
  "Full Process Testing"
];

export function Industries() {
  return (
    <section className="py-24 border-t border-white/5">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">Industries Served</h2>
            <ul className="space-y-4">
              {industries.map((ind, i) => (
                <li key={i} className="flex items-center text-brand-text-muted border-b border-white/5 pb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-4"></span>
                  {ind}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">Standards & Quality</h2>
            <div className="grid grid-cols-2 gap-4">
              {standards.map((std, i) => (
                <div key={i} className="border border-white/10 bg-brand-surface p-4 rounded text-center text-sm font-medium text-brand-text-primary">
                  {std}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
