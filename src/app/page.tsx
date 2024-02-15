import Analytics from "./presentations/Analytics";
import BalanceStatistics from "./presentations/Balance";
import Cardholder from "./presentations/Cardholder";
import Chat from "./presentations/Chat";
import ExpensesIncome from "./presentations/ExpensesIncome";
import Header from "./presentations/Header";
import ItemsToBuy from "./presentations/ItemsToBuy";
import LastTransactions from "./presentations/LastTransactions";
import LatestSpending from "./presentations/LatestSpending";
import Premium from "./presentations/Premium";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-purple-50">
      <div className="flex-1 flex flex-col gap-8 p-6">
        <Header />
        <div className="flex gap-8">
          <BalanceStatistics />
          <Cardholder />
        </div>
        <div className="flex gap-8">
          <ItemsToBuy />
          <Chat />
        </div>
        <div className="flex gap-8">
          <LastTransactions />
          <Analytics />
        </div>
      </div>
      <div className="w-[25%] bg-white p-6  shadow-sm">
        <div className="sticky top-6 flex flex-col gap-8">
          <ExpensesIncome />
          <LatestSpending />
          <Premium />
        </div>
      </div>
    </main>
  );
}
