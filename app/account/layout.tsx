// This layout wraps all /account/* routes.
// The actual auth protection is handled in middleware.ts via Clerk.
// If someone reaches this layout unauthenticated, middleware already redirected them.

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}