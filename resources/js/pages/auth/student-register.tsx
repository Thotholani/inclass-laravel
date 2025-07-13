import { Link, useForm, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { RiCameraLine as Camera, RiUpload2Line as Upload } from 'react-icons/ri';

import MarketingLogo from '@/components/marketing-logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SharedData } from '@/types';

export default function StudentRegisterPage() {
    const { auth, errors: serverErrors } = usePage<SharedData>().props;

    /* --- Inertia form; image is a File | null ----------------------- */
    const { data, setData, errors, processing, post } = useForm<{
        image: File | null;
        name: string;
    }>({
        image: null,
        name: auth.user.name,
    });

    /* --- simple preview state -------------------------------------- */
    const [preview, setPreview] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        setData('image', file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    }

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/student-register', { forceFormData: true });
    }

    /* --------------------------------------------------------------- */
    return (
        <div className="bg-background min-h-screen">
            <header className="flex items-center justify-between p-6">
                <MarketingLogo />
                <Button variant="secondary" size="lg" className="rounded-full">
                    <Link href="/select-role">Back to role selection</Link>
                </Button>
            </header>

            <main className="container mx-auto max-w-3xl px-4 py-8">
                <h1 className="font-title mb-8 text-center text-3xl uppercase md:text-4xl">Complete Your Profile</h1>

                <form onSubmit={submit} className="mx-auto space-y-6 md:w-9/12">
                    {/* --- photo picker --- */}
                    <div className="space-y-2">
                        <Label>Profile Image</Label>

                        <div className="flex items-start gap-4">
                            <div className="bg-muted relative h-24 w-24 overflow-hidden rounded-full border">
                                {preview ? (
                                    <img src={preview} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                        <Camera className="text-muted-foreground h-8 w-8" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-2">
                                <Button type="button" variant="outline" onClick={() => fileInput.current?.click()}>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Upload Photo
                                </Button>

                                <Input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />

                                {errors.image && <p className="text-destructive text-xs italic">{errors.image}</p>}
                                {!errors.image && <p className="text-muted-foreground text-xs">JPG, PNG or GIF. 2 MB max.</p>}
                            </div>
                        </div>
                    </div>

                    {/* --- name --- */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`rounded-xl ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name ? (
                            <p className="text-destructive text-xs italic">{errors.name}</p>
                        ) : (
                            <p className="text-muted-foreground text-xs">Enter your full name</p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing} className="w-full md:w-fit">
                            {processing ? 'Submitting…' : 'Complete Registration'}
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
