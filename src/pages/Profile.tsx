
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Building, Calendar, Edit } from "lucide-react";

export default function Profile() {
  // Mock admin user data
  const admin = {
    name: "John Admin",
    role: "Administrator",
    email: "john.admin@example.com",
    branch: "Headquarters",
    joinDate: "January 15, 2022",
    lastActive: "Today at 10:30 AM",
    permissions: ["User Management", "Customer Data", "Reports", "Settings"],
  };

  const recentActivities = [
    { action: "Updated customer record", time: "Today at 09:45 AM", customer: "Emily Johnson" },
    { action: "Added new customer", time: "Yesterday at 03:15 PM", customer: "Michael Williams" },
    { action: "Modified system settings", time: "April 18, 2023", customer: null },
    { action: "Reviewed customer application", time: "April 17, 2023", customer: "Jessica Brown" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt={admin.name} />
                  <AvatarFallback className="text-xl">{admin.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{admin.name}</h2>
                  <Badge variant="outline" className="mt-1">{admin.role}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Administrator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{admin.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{admin.branch}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Joined {admin.joinDate}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-sm font-medium mb-2">Permissions & Access</h3>
                <div className="flex flex-wrap gap-2">
                  {admin.permissions.map((permission, index) => (
                    <Badge key={index} variant="secondary">{permission}</Badge>
                  ))}
                </div>
              </div>

              <Button variant="destructive" className="w-full mt-6">
                Logout
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest actions in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      {index < recentActivities.length - 1 && (
                        <div className="h-full w-px bg-border" />
                      )}
                    </div>
                    <div className="space-y-1 pb-6">
                      <p className="text-sm font-medium leading-none">
                        {activity.action}
                        {activity.customer && (
                          <span className="font-normal"> for <span className="font-medium">{activity.customer}</span></span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
