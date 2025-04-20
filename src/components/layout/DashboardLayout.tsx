
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  User, Settings, List, LogOut, Home
} from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  isActive: boolean;
}

function NavItem({ href, label, icon, isActive }: NavItemProps) {
  return (
    <Link to={href}>
      <Button
        variant={isActive ? "default" : "ghost"}
        className={cn(
          "w-full justify-start mb-1",
          isActive ? "bg-primary" : ""
        )}
      >
        <span className="mr-2">{icon}</span>
        {label}
      </Button>
    </Link>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="h-4 w-4" /> },
    { href: "/customers", label: "Customers", icon: <List className="h-4 w-4" /> },
    { href: "/profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { href: "/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-card border-r p-4">
        <div className="text-xl font-bold p-4 mb-6">Customer Portal</div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
        <div className="pt-4 mt-auto border-t">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-card border-b z-10 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Customer Portal</div>
          {/* Mobile menu button would go here */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 pt-16 md:pt-0 overflow-auto">
        <div className="container mx-auto p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
