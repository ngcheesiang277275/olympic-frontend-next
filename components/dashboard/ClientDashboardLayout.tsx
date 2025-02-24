"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProtectedRoute>{children}</ProtectedRoute>
    </div>
  );
}
