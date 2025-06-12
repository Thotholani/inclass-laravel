/* ------------------------------------------------------------------------- */
/*  components/ui/pagination.tsx                                             */
/* ------------------------------------------------------------------------- */
import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Link } from '@inertiajs/react'; // ⭐ Inertia Link

/* ----------< Pagination root >---------- */

export function Pagination(
    { className, ...props }: React.ComponentProps<'nav'>
) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            className={cn('mx-auto flex w-full justify-center', className)}
            {...props}
        />
    );
}

/* ----------< Content wrapper >---------- */

export function PaginationContent(
    { className, ...props }: React.ComponentProps<'ul'>
) {
    return (
        <ul
            data-slot="pagination-content"
            className={cn('flex flex-row items-center gap-1', className)}
            {...props}
        />
    );
}

/* ----------< Item wrapper – no changes >---------- */

export function PaginationItem(
    props: React.ComponentProps<'li'>
) {
    return <li data-slot="pagination-item" {...props} />;
}

/* ----------< Link element – now uses Inertia >---------- */

type PaginationLinkProps = {
    isActive?: boolean
    preserveScroll?: boolean        // handy extra for SPA feel
    preserveState?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
    React.ComponentProps<typeof Link>              // ⭐ was "a"

export function PaginationLink({
                                   className,
                                   isActive,
                                   preserveScroll = true,
                                   preserveState = false,
                                   size = 'icon',
                                   ...props
                               }: PaginationLinkProps) {
    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            data-slot="pagination-link"
            data-active={isActive}
            preserveScroll={preserveScroll}
            preserveState={preserveState}
            className={cn(
                buttonVariants({
                    variant: isActive ? 'outline' : 'ghost',
                    size
                }),
                className
            )}
            {...props}
        />
    );
}

/* ----------< Previous / Next helpers >---------- */

export function PaginationPrevious(
    { className, ...props }: React.ComponentProps<typeof PaginationLink>
) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            size="default"
            className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
            {...props}
        >
            <ChevronLeftIcon />
            <span className="hidden sm:block">Previous</span>
        </PaginationLink>
    );
}

export function PaginationNext(
    { className, ...props }: React.ComponentProps<typeof PaginationLink>
) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            size="default"
            className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
            {...props}
        >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon />
        </PaginationLink>
    );
}

/* ----------< Ellipsis – unchanged >---------- */

export function PaginationEllipsis(
    { className, ...props }: React.ComponentProps<'span'>
) {
    return (
        <span
            aria-hidden
            data-slot="pagination-ellipsis"
            className={cn('flex size-9 items-center justify-center', className)}
            {...props}
        >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
    );
}
