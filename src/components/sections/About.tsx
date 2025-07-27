import { ContactCard } from "./ContactCard";
import { TextSection } from "./../TextSection";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <TextSection title="Who Am I?">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-4">
          <p>
            <strong>Alex Spieslechner</strong>, Senior Software Engineer with a
            solid decade of experience and with a strong background in design,
            communications and usability.
          </p>
          <div>
            <a
              href="mailto:hi@mostviertel.tech"
              className="font-semibold text-indigo-500 inline-flex gap-1 items-center"
            >
              <span>Get in touch</span>
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
