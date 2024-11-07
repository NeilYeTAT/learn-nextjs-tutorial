import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* 固定布局 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* router view */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        router view - {children}
      </div>
    </div>
  );
}
