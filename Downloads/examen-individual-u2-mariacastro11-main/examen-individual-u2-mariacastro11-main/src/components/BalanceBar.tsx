import { usePockets } from "../context/PocketsContext";

export default function BalanceBar() {
  const { mainBalance } = usePockets();
  return (
    <div className="alert bg-base-200">
      <span className="text-lg font-semibold">
        Saldo de cuenta principal: ${mainBalance.toLocaleString()}
      </span>
    </div>
  );
}
