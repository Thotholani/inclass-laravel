import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, BookOpen, Calendar, ChevronRight, Clock, Flame, MessageSquare, Search, Settings, Wallet } from 'lucide-react';

export default function StudentDashboard() {
    // Get time of day for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    // Mock data for the dashboard
    const studentName = 'Sarah Johnson';
    const studentInitials = 'SJ';
    const stats = {
        learningHours: 24,
        upcomingSessions: 3,
        completedSessions: 17,
        streak: 5,
    };

    const subjects = [
        { name: 'Mathematics', progress: 65, nextMilestone: 'Calculus Basics' },
        { name: 'Physics', progress: 42, nextMilestone: 'Mechanics' },
        { name: 'English Literature', progress: 78, nextMilestone: 'Essay Writing' },
    ];

    const recentActivity = [
        { type: 'session', title: 'Completed session with Dr. Michael Brown', time: '2 hours ago', icon: BookOpen },
        { type: 'message', title: 'New message from Emily Parker', time: 'Yesterday', icon: MessageSquare },
        { type: 'payment', title: 'Payment confirmed for upcoming sessions', time: '2 days ago', icon: Wallet },
    ];

    const upcomingSessions = [
        {
            id: 1,
            tutor: 'Dr. Michael Brown',
            tutorAvatar: '/monogram-mb.png',
            subject: 'Advanced Mathematics',
            time: 'Today, 4:00 PM',
            duration: '60 min',
            rating: 4.9,
        },
        {
            id: 2,
            tutor: 'Emily Parker',
            tutorAvatar: '/abstract-geometric-ep.png',
            subject: 'Physics - Quantum Mechanics',
            time: 'Tomorrow, 2:30 PM',
            duration: '90 min',
            rating: 4.7,
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            {/* Header with greeting */}
            <header className="border-b bg-white">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {getGreeting()}, <span className="text-primary">{studentName}</span>
                            </h1>
                            <p className="text-muted-foreground mt-1">Continue your learning journey today</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Settings className="h-5 w-5" />
                            </Button>
                            <div className="flex items-center gap-2">
                                <Avatar className="border-primary h-10 w-10 border-2">
                                    <AvatarImage src="/stylized-letters-sj.png" alt={studentName} />
                                    <AvatarFallback>{studentInitials}</AvatarFallback>
                                </Avatar>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium">{studentName}</p>
                                    <p className="text-muted-foreground text-xs">Premium Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto flex-1 px-4 py-8">
                {/* Stats overview */}
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-muted-foreground text-sm">Learning Hours</p>
                                    <p className="text-2xl font-bold">{stats.learningHours}</p>
                                </div>
                                <Clock className="text-primary h-8 w-8 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-muted-foreground text-sm">Upcoming Sessions</p>
                                    <p className="text-2xl font-bold">{stats.upcomingSessions}</p>
                                </div>
                                <Calendar className="text-primary h-8 w-8 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-muted-foreground text-sm">Completed Sessions</p>
                                    <p className="text-2xl font-bold">{stats.completedSessions}</p>
                                </div>
                                <BookOpen className="text-primary h-8 w-8 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-muted-foreground text-sm">Current Streak</p>
                                    <p className="text-2xl font-bold">{stats.streak} days</p>
                                </div>
                                <Flame className="h-8 w-8 text-orange-500" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Find a Tutor Banner */}
                <Card className="from-primary/10 to-primary/5 mb-8 border-none bg-gradient-to-r">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="mb-4 md:mb-0">
                                <h2 className="mb-2 text-2xl font-bold">Ready to accelerate your learning?</h2>
                                <p className="text-muted-foreground max-w-md">
                                    Find the perfect tutor to help you master your subjects and achieve your academic goals.
                                </p>
                                <Button className="mt-4 rounded-xl" size="lg">
                                    Find a Tutor <Search className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                            <div className="w-full md:w-1/3">
                                <img src="/placeholder.svg?key=cogah" alt="Student learning" className="h-auto w-full rounded-xl" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <h2 className="mb-4 text-xl font-bold">Quick Actions</h2>
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <Card className="transition-shadow hover:shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 mb-4 rounded-full p-3">
                                    <Search className="text-primary h-6 w-6" />
                                </div>
                                <h3 className="mb-1 font-medium">Find a Tutor</h3>
                                <p className="text-muted-foreground text-sm">Discover tutors for any subject</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-shadow hover:shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 mb-4 rounded-full p-3">
                                    <Calendar className="text-primary h-6 w-6" />
                                </div>
                                <h3 className="mb-1 font-medium">Upcoming Sessions</h3>
                                <p className="text-muted-foreground text-sm">View your scheduled lessons</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-shadow hover:shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 mb-4 rounded-full p-3">
                                    <BookOpen className="text-primary h-6 w-6" />
                                </div>
                                <h3 className="mb-1 font-medium">Learning Resources</h3>
                                <p className="text-muted-foreground text-sm">Access study materials</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-shadow hover:shadow-md">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 mb-4 rounded-full p-3">
                                    <Wallet className="text-primary h-6 w-6" />
                                </div>
                                <h3 className="mb-1 font-medium">Wallet</h3>
                                <p className="text-muted-foreground text-sm">Manage your payments</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Learning Progress */}
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold">Learning Progress</h2>
                            <Button variant="ghost" size="sm" className="text-primary">
                                View All <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                {subjects.map((subject, index) => (
                                    <div key={index} className={index !== subjects.length - 1 ? 'mb-6' : ''}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <h3 className="font-medium">{subject.name}</h3>
                                            <span className="text-muted-foreground text-sm">{subject.progress}%</span>
                                        </div>
                                        {/*<Progress value={subject.progress} className="h-2 mb-2" />*/}
                                        <p className="text-muted-foreground text-sm">
                                            Next milestone: <span className="font-medium">{subject.nextMilestone}</span>
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold">Recent Activity</h2>
                            <Button variant="ghost" size="sm" className="text-primary">
                                View All <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        <Card>
                            <CardContent className="p-6">
                                {recentActivity.map((activity, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-4 ${index !== recentActivity.length - 1 ? 'mb-6 border-b pb-6' : ''}`}
                                    >
                                        <div
                                            className={`rounded-full p-2 ${
                                                activity.type === 'session'
                                                    ? 'bg-green-100'
                                                    : activity.type === 'message'
                                                      ? 'bg-blue-100'
                                                      : 'bg-yellow-100'
                                            }`}
                                        >
                                            <activity.icon
                                                className={`h-5 w-5 ${
                                                    activity.type === 'session'
                                                        ? 'text-green-600'
                                                        : activity.type === 'message'
                                                          ? 'text-blue-600'
                                                          : 'text-yellow-600'
                                                }`}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{activity.title}</p>
                                            <p className="text-muted-foreground text-sm">{activity.time}</p>
                                        </div>
                                        {activity.type === 'message' && (
                                            <Button variant="outline" size="sm" className="rounded-xl">
                                                Reply
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">Upcoming Sessions</h2>
                        <Button variant="ghost" size="sm" className="text-primary">
                            View All <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {upcomingSessions.map((session) => (
                            <Card key={session.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={session.tutorAvatar || '/placeholder.svg'} alt={session.tutor} />
                                            <AvatarFallback>
                                                {session.tutor
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-medium">{session.tutor}</h3>
                                                <Badge variant="outline" className="font-normal">
                                                    ★ {session.rating}
                                                </Badge>
                                            </div>
                                            <p className="text-muted-foreground mb-2 text-sm">{session.subject}</p>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="text-muted-foreground h-4 w-4" />
                                                <span>{session.time}</span>
                                                <span className="text-muted-foreground">•</span>
                                                <span>{session.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <Button className="flex-1 rounded-xl">Join Session</Button>
                                        <Button variant="outline" className="rounded-xl">
                                            Reschedule
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
