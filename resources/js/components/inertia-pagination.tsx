/* ------------------------------------------------------------------ */
/*  resources/js/components/InertiaPagination.tsx                     */
/* ------------------------------------------------------------------ */
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';

/* ---------- Types matching Laravel paginator ---------- */
type LinkObj = { url: string | null; label: string; active: boolean };
type MetaObj = { current_page: number; last_page: number };

/* ---------- Config ---------- */
const SIBLINGS = 1; // pages to show either side of current
const GAP = '…' as const; // sentinel for ellipsis

/* ---------- Build range: 1 … 6 7 8 … 100 ---------- */
function pageWindow(current: number, last: number) {
    const range: (number | typeof GAP)[] = [];

    const left = Math.max(current - SIBLINGS, 2); // keep ≥2
    const right = Math.min(current + SIBLINGS, last - 1); // keep ≤last-1

    range.push(1); // first page

    if (left > 2) range.push(GAP); // gap on left

    for (let i = left; i <= right; i++) range.push(i); // sliding window

    if (right < last - 1) range.push(GAP); // gap on right

    if (last > 1) range.push(last); // last page

    return range;
}

/* ---------- Component ---------- */
interface Props {
    links: LinkObj[];
    meta: MetaObj;
}

export default function InertiaPagination({ links, meta }: Props) {
    if (!meta || meta.last_page === 1) return null; // nothing to paginate

    const firstLink = links[0];
    const lastLink = links.at(-1)!;

    const pages = pageWindow(meta.current_page, meta.last_page);

    /* map page number → matching Laravel link object */
    const linkByLabel: Record<number, LinkObj> = Object.fromEntries(links.filter((l) => Number.isInteger(+l.label)).map((l) => [+l.label, l]));

    return (
        <Pagination className="mt-8">
            <PaginationContent>
                {/* « Prev */}
                {firstLink.url && (
                    <PaginationItem>
                        <PaginationPrevious href={firstLink.url} preserveScroll />
                    </PaginationItem>
                )}

                {/* numbers + gaps */}
                {pages.map((p, idx) =>
                    p === GAP ? (
                        <PaginationItem key={`gap-${idx}`} className="sm:block">
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={p}>
                            <PaginationLink
                                href={linkByLabel[p].url ?? '#'}
                                isActive={linkByLabel[p].active}
                                className="sm:inline-flex" /* hide numbers on <640 px */
                            >
                                {p}
                            </PaginationLink>
                        </PaginationItem>
                    ),
                )}

                {/* Next » */}
                {lastLink.url && (
                    <PaginationItem>
                        <PaginationNext href={lastLink.url} preserveScroll />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}
