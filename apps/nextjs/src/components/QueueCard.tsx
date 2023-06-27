import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { type RouterOutputs } from "@acme/api";

const QueueCard: React.FC<{
  queue: RouterOutputs["queue"]["all"][number];
  onQueueDelete?: () => void;
}> = ({ queue, onQueueDelete }) => {
  const { janCode, createdAt } = queue;

  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-pink-400">{janCode}</h2>
        <p className="mt-2 text-sm">
          {format(
            utcToZonedTime(createdAt, "Asia/Tokyo"),
            "yyyy-MM-dd HH:mm:ss",
          )}
        </p>
      </div>
      <div>
        <span
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={onQueueDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default QueueCard;
