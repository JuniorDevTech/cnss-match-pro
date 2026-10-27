import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-50 text-slate-900">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-col pl-0 md:pl-24 xl:pl-72">
        <Header />
        <main className="min-w-0 flex-1 px-3 pb-6 pt-20 sm:px-5 sm:pt-6 lg:px-6 xl:p-8">
          <div className="mx-auto w-full max-w-[1600px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
