
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, FileText, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCustomer } from "@/context/CustomerContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { customers } = useCustomer();

  const stats = [
    {
      title: "Total Customers",
      value: customers.length.toString(),
      icon: <Users className="h-5 w-5 text-primary" />,
      change: "+12% from last month",
    },
    {
      title: "New Registrations",
      value: "24",
      icon: <User className="h-5 w-5 text-primary" />,
      change: "+18% from last month",
    },
    {
      title: "Pending Approvals",
      value: "8",
      icon: <FileText className="h-5 w-5 text-primary" />,
      change: "-5% from last month",
    },
    {
      title: "Today's Activity",
      value: "12",
      icon: <Calendar className="h-5 w-5 text-primary" />,
      change: "0% change",
    },
  ];

  const recentCustomers = [
    { id: 1, name: "Michael Johnson", date: "Apr 18, 2023", status: "Complete" },
    { id: 2, name: "Sarah Williams", date: "Apr 17, 2023", status: "Pending" },
    { id: 3, name: "David Brown", date: "Apr 16, 2023", status: "Complete" },
    { id: 4, name: "Emma Davis", date: "Apr 15, 2023", status: "Complete" },
    { id: 5, name: "Robert Wilson", date: "Apr 14, 2023", status: "Pending" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Admin</h1>
          <Button onClick={() => navigate("/customers")}>View All Customers</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Customer Registrations</CardTitle>
              <CardDescription>
                Showing the 5 most recent registrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customers.slice(0, 5).map((customer) => (
                  <div
                    key={customer.id}
                    className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {customer.date}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          customer.status === "Complete"
                            ? "bg-success/10 text-success"
                            : "bg-warning/10 text-warning"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {customers.length > 5 && (
                <Button
                  variant="link"
                  className="mt-4 px-0"
                  onClick={() => navigate("/customers")}
                >
                  View all customers
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/")}
              >
                <User className="mr-2 h-4 w-4" />
                Register New Customer
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/customers")}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Customer Details
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/profile")}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Admin Profile
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate("/settings")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
