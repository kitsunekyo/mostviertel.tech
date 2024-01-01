import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Angebot anfragen
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Lass uns unverbindlich darüber sprechen was in deiner Firma technisch
          möglich wäre, und wie wir das Projekt umsetzen könnten.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <BugAntIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Software Entwicklung
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              Stundenweise Fehlerbehebung oder gesamtheitliches Design und
              Entwicklung von Shop, Webseiten oder Web Applikations Lösungen.
            </p>
            <p className="mt-4">
              <a
                href="mailto:hi@mostviertel.tech"
                className="text-sm font-semibold leading-6 text-indigo-600"
              >
                Schreib an hi@mostviertel.tech{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <ChatBubbleLeftRightIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Hardware und Software Beratung
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              Ich berate dich bei der Auswahl und Konfiguration der passenden
              Hardware und Software für dein Unternehmen. Von Office 365 bis
              Wlan Access Points.
            </p>
            <p className="mt-4">
              <a
                href="mailto:hi@mostviertel.tech"
                className="text-sm font-semibold leading-6 text-indigo-600"
              >
                Schreib an hi@mostviertel.tech{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
