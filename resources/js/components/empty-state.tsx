import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

type EmptyStateProps = {
    title: string;
    description: string;
    imageSrc?: string;
    actionPath?: string;
    actionLabel?: string;
};

export function EmptyState({ title, description, imageSrc, actionPath, actionLabel = 'Take Action' }: EmptyStateProps) {
    return (
        <div className="py-8 text-center">
            {imageSrc && <img src={imageSrc} alt="" className="mx-auto" width={100} height={100} />}
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mb-2 font-medium">{description}</p>
            {actionPath && (
                <Link href={actionPath}>
                    <Button className="w-full md:w-fit">{actionLabel}</Button>
                </Link>
            )}
        </div>
    );
}
