import { ContactCard } from "./ContactCard";
import { TextSection } from "./TextSection";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <TextSection title="Alex Spieslechner">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-4">
          <p>
            Senior Software Engineer bei dynatrace, mit über zehn Jahren
            Erfahrung im Bereich Software, Web-Entwicklung und Marketing.
          </p>
          <div>
            <a
              href="mailto:hi@mostviertel.tech"
              className="font-semibold text-indigo-500 inline-flex gap-1 items-center"
            >
              <span>Schreib mir per Mail</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="relative lg:-top-24 hidden lg:flex">
          <ContactCard />
        </div>
      </div>
    </TextSection>
  );
}
