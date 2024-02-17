import { ContactCard } from "./ContactCard";
import { TextSection } from "./TextSection";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <TextSection title="Who Am I?">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <p>
            Alex Spieslechner - currently working as{" "}
            <strong>lead developer</strong> at{" "}
            <a
              href="https://www.umdaschgroup.com"
              className="font-semibold text-indigo-500 inline-flex gap-1 items-center"
            >
              <span>Umdasch-Group</span>
              <ArrowUpRight />
            </a>
          </p>
          <p>
            A <strong>software engineer</strong> with a solid decade of
            experience, bringing his strong background in design, communications
            and usability to not just the frontend, but also to APIs, cloud
            infrastructure, tooling and developer experience.
          </p>
          <p className="italic text-gray-400">
            I&apos;m a Mostviertel, Austria 🗻 native but I mostly work, learn,
            publish and consume content in english.
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
        <div className="flex justify-center">
          <ContactCard />
        </div>
      </div>
    </TextSection>
  );
}
