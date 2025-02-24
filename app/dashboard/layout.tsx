import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientDashboardLayout>{children}</ClientDashboardLayout>;
}
