
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Eye, Edit, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";

// Mock customer data
const initialCustomers = [
  {
    id: "1",
    name: "John Smith",
    contact: "+91 98765 43210",
    email: "john.smith@example.com",
    document: "Passport: A1234567",
    status: "Active",
  },
  {
    id: "2",
    name: "Emily Johnson",
    contact: "+91 87654 32109",
    email: "emily.johnson@example.com",
    document: "Aadhar: 9876 5432 1098",
    status: "Active",
  },
  {
    id: "3",
    name: "Michael Williams",
    contact: "+91 76543 21098",
    email: "michael.williams@example.com",
    document: "Driving License: DL9876543",
    status: "Pending",
  },
  {
    id: "4",
    name: "Jessica Brown",
    contact: "+91 65432 10987",
    email: "jessica.brown@example.com",
    document: "PAN Card: ABCDE1234F",
    status: "Active",
  },
  {
    id: "5",
    name: "David Jones",
    contact: "+91 54321 09876",
    email: "david.jones@example.com",
    document: "Voter ID: ABC1234567",
    status: "Inactive",
  },
  {
    id: "6",
    name: "Sarah Miller",
    contact: "+91 43210 98765",
    email: "sarah.miller@example.com",
    document: "Passport: B9876543",
    status: "Active",
  },
  {
    id: "7",
    name: "James Davis",
    contact: "+91 32109 87654",
    email: "james.davis@example.com",
    document: "Aadhar: 8765 4321 0987",
    status: "Pending",
  },
  {
    id: "8",
    name: "Jennifer Garcia",
    contact: "+91 21098 76543",
    email: "jennifer.garcia@example.com",
    document: "Driving License: DL8765432",
    status: "Active",
  },
];

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.contact.includes(searchQuery) ||
      customer.document.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Customer Details</h1>
          <Button>Register New Customer</Button>
        </div>

        <div className="flex items-center py-4">
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Document Info</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No customers found
                  </TableCell>
                </TableRow>
              ) : (
                filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.contact}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.document}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-success/10 text-success"
                            : customer.status === "Pending"
                            ? "bg-warning/10 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <span className="sr-only">Open menu</span>
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(customer.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
