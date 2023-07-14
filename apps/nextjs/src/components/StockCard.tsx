import Image from "next/image";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { type RouterOutputs } from "@acme/api";

const StockCard: React.FC<{
  stock: RouterOutputs["stock"]["all"][number];
  onStockDelete?: () => void;
}> = ({ stock, onStockDelete }) => {
  const { createdAt, quantity, description, sku, id } = stock;
  const { expiryDate, product } = sku;
  const { title, image, categories } = product;
  const { day, month, year, type } = expiryDate ?? {};

  return (
    <div className="flex flex-row gap-x-2 rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex items-center">
        <Image
          src={image ?? ""}
          alt={title}
          width="50"
          height="50"
          className="rounded-xl"
        />
      </div>
      <div className="flex-grow">
        <div>
          <h2 className="text-2xl font-bold text-pink-400">{title}</h2>
        </div>
        <div className="flex flex-row gap-4">
          <p className="text-sm">{`${quantity} 個`}</p>
          <p className="text-sm">
            {`日時: ${format(
              utcToZonedTime(createdAt, "Asia/Tokyo"),
              "yyyy/MM/dd HH:mm:ss",
            )}`}
          </p>
          <p className="text-sm">
            {`追加日時: ${format(
              utcToZonedTime(createdAt, "Asia/Tokyo"),
              "yyyy/MM/dd HH:mm:ss",
            )}`}
          </p>
        </div>
      </div>
      <div>
        <span
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={onStockDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default StockCard;
