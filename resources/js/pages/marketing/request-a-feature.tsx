import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import MarketingLayout from '@/layouts/marketing-layout';
import { AlertCircle, CheckCircle2, Clock, Plus, ThumbsUp } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

interface FeatureRequest {
    id: number;
    title: string;
    description: string;
    category: string;
    status: 'planned' | 'in-progress' | 'completed' | 'under-review';
    upvotes: number;
    createdAt: string;
    createdBy: string;
    comments: number;
    isUpvoted?: boolean;
}

export default function RequestFeaturePage() {
    const [activeTab, setActiveTab] = useState('all');
    const [featureRequests, setFeatureRequests] = useState<FeatureRequest[]>([
        {
            id: 1,
            title: 'Group tutoring sessions',
            description: 'Allow multiple students to join the same tutoring session for collaborative learning at a reduced price per student.',
            category: 'Tutoring',
            status: 'planned',
            upvotes: 142,
            createdAt: '2023-11-15',
            createdBy: 'Sarah J.',
            comments: 24,
        },
        {
            id: 2,
            title: 'In-app messaging between students and tutors',
            description: 'Add a messaging system so students and tutors can communicate before and after sessions without leaving the platform.',
            category: 'Communication',
            status: 'in-progress',
            upvotes: 98,
            createdAt: '2023-12-02',
            createdBy: 'Michael T.',
            comments: 17,
        },
        {
            id: 3,
            title: 'Session recordings for later review',
            description: 'Allow students to record tutoring sessions (with tutor permission) so they can review the material later.',
            category: 'Learning Tools',
            status: 'completed',
            upvotes: 215,
            createdAt: '2023-10-05',
            createdBy: 'Alex W.',
            comments: 32,
        },
        {
            id: 4,
            title: 'Interactive practice quizzes',
            description: 'Add the ability for tutors to create custom quizzes for students to practice between sessions.',
            category: 'Learning Tools',
            status: 'under-review',
            upvotes: 76,
            createdAt: '2024-01-10',
            createdBy: 'Jamie L.',
            comments: 9,
        },
        {
            id: 5,
            title: 'Calendar integration with Google and Apple',
            description: 'Sync tutoring sessions with popular calendar apps to help students and tutors manage their schedules.',
            category: 'Scheduling',
            status: 'planned',
            upvotes: 124,
            createdAt: '2023-12-18',
            createdBy: 'Priya K.',
            comments: 15,
        },
        {
            id: 6,
            title: 'Dark mode for the platform',
            description: 'Add a dark mode option to reduce eye strain during evening tutoring sessions.',
            category: 'User Interface',
            status: 'in-progress',
            upvotes: 87,
            createdAt: '2024-01-05',
            createdBy: 'David M.',
            comments: 12,
        },
        {
            id: 7,
            title: 'Subject-specific whiteboard tools',
            description: 'Add specialized tools to the whiteboard for subjects like math, chemistry, and physics.',
            category: 'Learning Tools',
            status: 'under-review',
            upvotes: 65,
            createdAt: '2024-01-15',
            createdBy: 'Elena R.',
            comments: 8,
        },
        {
            id: 8,
            title: 'Tutor certification badges',
            description: 'Display verified credentials and certifications on tutor profiles to help students make informed choices.',
            category: 'Profiles',
            status: 'completed',
            upvotes: 156,
            createdAt: '2023-11-20',
            createdBy: 'James W.',
            comments: 19,
        },
    ]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newFeature, setNewFeature] = useState({
        title: '',
        description: '',
        category: '',
    });

    const handleUpvote = (id: number) => {
        setFeatureRequests(
            featureRequests.map((feature) => {
                if (feature.id === id) {
                    return {
                        ...feature,
                        upvotes: feature.isUpvoted ? feature.upvotes - 1 : feature.upvotes + 1,
                        isUpvoted: !feature.isUpvoted,
                    };
                }
                return feature;
            }),
        );
    };

    const handleSubmitFeature = (e: React.FormEvent) => {
        e.preventDefault();

        // Add new feature request
        const newId = Math.max(...featureRequests.map((f) => f.id)) + 1;
        const newFeatureRequest: FeatureRequest = {
            id: newId,
            title: newFeature.title,
            description: newFeature.description,
            category: newFeature.category,
            status: 'under-review',
            upvotes: 1,
            createdAt: new Date().toISOString().split('T')[0],
            createdBy: 'You',
            comments: 0,
            isUpvoted: true,
        };

        setFeatureRequests([newFeatureRequest, ...featureRequests]);
        setNewFeature({ title: '', description: '', category: '' });
        setIsDialogOpen(false);
    };

    const filteredRequests = featureRequests.filter((feature) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'planned') return feature.status === 'planned';
        if (activeTab === 'in-progress') return feature.status === 'in-progress';
        if (activeTab === 'completed') return feature.status === 'completed';
        return true;
    });

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'planned':
                return <Clock className="h-4 w-4 text-blue-500" />;
            case 'in-progress':
                return <AlertCircle className="h-4 w-4 text-yellow-500" />;
            case 'completed':
                return <CheckCircle2 className="h-4 w-4 text-green-500" />;
            default:
                return <Clock className="h-4 w-4 text-gray-500" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'planned':
                return 'Planned';
            case 'in-progress':
                return 'In Progress';
            case 'completed':
                return 'Completed';
            case 'under-review':
                return 'Under Review';
            default:
                return status;
        }
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="font-title mb-4 text-4xl uppercase md:text-5xl">Feature Requests</h1>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                    Help shape the future of Inclass by suggesting new features or upvoting existing requests
                </p>
            </div>

            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="planned">Planned</TabsTrigger>
                        <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                </Tabs>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="w-full rounded-xl md:w-auto">
                            <Plus className="mr-2 h-4 w-4" /> Suggest a Feature
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-2xl sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Suggest a New Feature</DialogTitle>
                            <DialogDescription>
                                Share your ideas to help us improve Inclass. Be specific and explain why this feature would be valuable.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmitFeature}>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Feature Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="Enter a clear, concise title"
                                        value={newFeature.title}
                                        onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })}
                                        className="rounded-xl"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select
                                        value={newFeature.category}
                                        onValueChange={(value) => setNewFeature({ ...newFeature, category: value })}
                                        required
                                    >
                                        <SelectTrigger className="rounded-xl">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Tutoring">Tutoring</SelectItem>
                                            <SelectItem value="Learning Tools">Learning Tools</SelectItem>
                                            <SelectItem value="User Interface">User Interface</SelectItem>
                                            <SelectItem value="Communication">Communication</SelectItem>
                                            <SelectItem value="Scheduling">Scheduling</SelectItem>
                                            <SelectItem value="Profiles">Profiles</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Describe the feature and why it would be useful"
                                        value={newFeature.description}
                                        onChange={(e) => setNewFeature({ ...newFeature, description: e.target.value })}
                                        className="min-h-[100px] rounded-xl"
                                        required
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="rounded-xl">
                                    Submit Request
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredRequests.length > 0 ? (
                    filteredRequests.map((feature) => (
                        <Card key={feature.id} className="overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                        <div className="mt-1 flex items-center gap-2">
                                            <Badge variant="outline" className="rounded-full">
                                                {feature.category}
                                            </Badge>
                                            <div className="text-muted-foreground flex items-center text-sm">
                                                <span className="flex items-center gap-1">
                                                    {getStatusIcon(feature.status)} {getStatusText(feature.status)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant={feature.isUpvoted ? 'default' : 'outline'}
                                        size="sm"
                                        className={`flex items-center gap-1 rounded-full ${feature.isUpvoted ? 'bg-primary' : ''}`}
                                        onClick={() => handleUpvote(feature.id)}
                                    >
                                        <ThumbsUp className="h-4 w-4" />
                                        <span>{feature.upvotes}</span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                            <CardFooter className="text-muted-foreground flex justify-between pt-2 text-sm">
                                <div>
                                    Suggested by {feature.createdBy} on {feature.createdAt}
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>{feature.comments} comments</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="py-12 text-center">
                        <h3 className="mb-2 text-xl font-semibold">No feature requests found</h3>
                        <p className="text-muted-foreground mb-6">Be the first to suggest a new feature for this category!</p>
                        <Button onClick={() => setIsDialogOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Suggest a Feature
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

RequestFeaturePage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
