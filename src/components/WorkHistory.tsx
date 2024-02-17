import { cn } from "@/libs/cn";
import { TextSection } from "./TextSection";

export function WorkHistory() {
  return (
    <TextSection title="Work History" className="relative overflow-hidden">
      <ul role="list" className="space-y-6 my-12">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={cn(
                activityItemIdx === activity.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center",
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            {!!activityItem.comment ? (
              <>
                <img
                  src=""
                  alt=""
                  height="24"
                  width="24"
                  className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-gray-500">
                      <span className="font-medium text-gray-900">
                        {activityItem.title}
                      </span>{" "}
                      at {activityItem.company}
                    </div>
                    <time className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm leading-6 text-gray-500">
                    {activityItem.comment}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                </div>
                <p className="flex-auto py-0.5 leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">
                    {activityItem.title}
                  </span>{" "}
                  at {activityItem.company}
                </p>
                <time className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                  {activityItem.date}
                </time>
              </>
            )}
          </li>
        ))}
      </ul>
    </TextSection>
  );
}

const activity = [
  {
    id: 1,
    company: "Umdasch-Group Technologies",
    title: "Lead Developer",
    comment: "",
    date: "Sept. 2023 - Present",
  },
  {
    id: 2,
    company: "Umdasch-Group Ventures",
    title: "Lead Developer",
    date: "Jan. 2023 - Sept. 2023",
  },
  {
    id: 3,
    company: "Umdasch-Group Ventures",
    title: "Developer",
    date: "Aug. 2020 - Jan. 2023",
  },
  {
    id: 4,
    company: "MELTIQ",
    title: "Senior Software Engineer",
    date: "Apr. 2020 - May. 2020",
  },
  {
    id: 5,
    company: "dataformers",
    title: "Senior Software Engineer",
    date: "Mar. 2019 - Apr. 2020",
  },
  {
    id: 6,
    company: "bwin",
    title: "Web Technology Lead",
    date: "Aug. 2016 - Mar. 2019",
  },
  {
    id: 7,
    company: "bwin",
    title: "Interactive Developer",
    date: "Nov. 2013 - Aug. 2016",
  },
  {
    id: 8,
    company: "bwin",
    title: "Online Graphics Designer",
    date: "Jul. 2012 - Nov. 2013",
  },
];
