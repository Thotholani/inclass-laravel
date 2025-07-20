import { WeekSchedule } from '@/components/availability-picker';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const blankWeek = (): WeekSchedule =>
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].reduce<WeekSchedule>((acc, d) => {
        acc[d] = { isActive: false, timeSlots: [] };
        return acc;
    }, {});
