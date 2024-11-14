import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Users, Bell } from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Active Patients",
      value: "24",
      icon: Users,
      trend: "+2 from yesterday",
    },
    {
      title: "Hours This Week",
      value: "32.5",
      icon: Activity,
      trend: "8 hours remaining",
    },
    {
      title: "Upcoming Shifts",
      value: "3",
      icon: Calendar,
      trend: "Next: Tomorrow 7AM",
    },
    {
      title: "New Notifications",
      value: "5",
      icon: Bell,
      trend: "2 urgent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
      {stats.map((stat, index) => (
        <Card key={index} className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-nurse-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-nurse-700">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};