import { TextSection } from "./TextSection";

export function HowDoIWork() {
  return (
    <TextSection
      title="How Do I Work?"
      className="bg-neutral-50 text-neutral-700 relative overflow-hidden"
    >
      <div className="absolute bg-[url('/images/noise.png')] opacity-5 h-[400%] w-[400%] -inset-[200%] block -z-10" />
      <div className="space-y-4">
        <p>
          Dev teams build better products if they{" "}
          <strong>love and find purpose in what they do</strong>. I try to
          approach every new problem with a splash of juvenille curiosity ✨.
        </p>
        <div className="prose">
          <ul>
            <li>
              <strong>Building bridges</strong> over working in isolation.
            </li>
            <li>
              <strong>Self-responsibility</strong> over micromanaging.
            </li>
            <li>
              <strong>Strong opinions weekly held</strong> over apathy or
              religiosly defending conventions.
            </li>
            <li>
              <strong>Embracing diversity</strong> over one-size-fits-all
              solutions.
            </li>
          </ul>
          <blockquote>
            Failure doesn&apos;t guarantee success, but the absence of failure
            guarantees the absence of success .
          </blockquote>
        </div>
      </div>
    </TextSection>
  );
}
