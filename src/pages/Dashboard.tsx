import { Navbar } from "@/components/Navbar";
import { DashboardStats } from "@/components/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const recentPatients = [
    { name: "Sarah Johnson", room: "201A", status: "Stable" },
    { name: "Michael Chen", room: "205B", status: "Under Observation" },
    { name: "Emma Davis", room: "203A", status: "Stable" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nurse-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="pt-24 px-6 pb-8 max-w-7xl mx-auto space-y-6">
        <div className="fade-in">
          <h1 className="text-3xl font-bold text-nurse-700 dark:text-nurse-300 mb-2">Welcome back, Nurse</h1>
          <p className="text-muted-foreground dark:text-gray-400">Here's your daily overview</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in">
          <Card className="glass-card dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-nurse-700 dark:text-nurse-300">Recent Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-nurse-100 dark:border-gray-600"
                  >
                    <div>
                      <p className="font-medium text-nurse-700 dark:text-nurse-300">{patient.name}</p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Room {patient.room}</p>
                    </div>
                    <span className="px-3 py-1 bg-nurse-100 dark:bg-nurse-800 text-nurse-700 dark:text-nurse-300 rounded-full text-sm">
                      {patient.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-nurse-700 dark:text-nurse-300">Upcoming Shifts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-nurse-100 dark:border-gray-600">
                  <p className="font-medium text-nurse-700 dark:text-nurse-300">Tomorrow, 7:00 AM - 3:00 PM</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">General Ward</p>
                </div>
                <div className="p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-nurse-100 dark:border-gray-600">
                  <p className="font-medium text-nurse-700 dark:text-nurse-300">Thursday, 3:00 PM - 11:00 PM</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">ICU</p>
                </div>
                <div className="p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-nurse-100 dark:border-gray-600">
                  <p className="font-medium text-nurse-700 dark:text-nurse-300">Saturday, 11:00 PM - 7:00 AM</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">Emergency Room</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;