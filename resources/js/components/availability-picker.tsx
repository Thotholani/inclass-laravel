import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Copy, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export type TimeSlot = { start: string; end: string };
export type DaySchedule = { isActive: boolean; timeSlots: TimeSlot[] };
export type WeekSchedule = Record<string, DaySchedule>;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

interface Props {
    value: WeekSchedule;
    onChange: (schedule: WeekSchedule) => void;
}

export default function AvailabilityPicker({ value, onChange }: Props) {
    const mutate = (fn: (draft: WeekSchedule) => WeekSchedule) => onChange(fn(structuredClone(value)));

    const toggleDay = (d: string) =>
        mutate((w) => {
            w[d] = w[d].isActive
                ? { isActive: false, timeSlots: [] }
                : {
                      isActive: true,
                      timeSlots: [{ start: '08:00', end: '17:00' }],
                  };
            return w;
        });

    const addSlot = (d: string) =>
        mutate((w) => {
            const s = w[d].timeSlots;
            const last = s[s.length - 1];
            const idx = (hours.indexOf(last.end) + 1) % 24;
            s.push({ start: hours[idx], end: hours[(idx + 1) % 24] });
            return w;
        });

    const removeSlot = (d: string, i: number) =>
        mutate((w) => {
            w[d].timeSlots.splice(i, 1);
            if (!w[d].timeSlots.length) w[d].isActive = false;
            return w;
        });

    const updateSlot = (d: string, i: number, k: 'start' | 'end', v: string) =>
        mutate((w) => {
            const slot = w[d].timeSlots[i];
            slot[k] = v;
            if (slot.start >= slot.end) {
                toast.error('Start must be before end');
                return value;
            }
            return w;
        });

    const copyToAll = (src: string) =>
        mutate((w) => {
            const srcDay = w[src];
            days.forEach((d) => (w[d] = structuredClone(srcDay)));
            toast.success('Copied to every day');
            return w;
        });

    return (
        <div className="space-y-6">
            {days.map((day) => (
                <div key={day}>
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:mb-2">
                        <div className="flex items-center gap-3">
                            <Switch checked={value[day].isActive} className={'hover:cursor-pointer'} onCheckedChange={() => toggleDay(day)} />
                            <span className="font-medium">{day}</span>
                        </div>

                        {value[day].isActive && (
                            <div className="flex flex-wrap gap-2">
                                <Button size="sm" variant="secondary" onClick={() => addSlot(day)}>
                                    <Plus size={16} className="mr-1" /> Add slot
                                </Button>
                                <Button size="sm" variant="secondary" onClick={() => copyToAll(day)}>
                                    <Copy size={16} className="mr-1" /> Copy to all
                                </Button>
                            </div>
                        )}
                    </div>

                    {value[day].isActive &&
                        value[day].timeSlots.map((t, i) => (
                            <div key={i} className="mt-3 flex items-center gap-2">
                                <p className="text-sm">from</p>
                                <Select value={t.start} onValueChange={(v) => updateSlot(day, i, 'start', v)}>
                                    <SelectTrigger className="w-28 hover:cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {hours.map((h) => (
                                            <SelectItem key={h} value={h}>
                                                {h}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <p className="text-sm">to</p>
                                <Select value={t.end} onValueChange={(v) => updateSlot(day, i, 'end', v)}>
                                    <SelectTrigger className="w-28 hover:cursor-pointer">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {hours.map((h) => (
                                            <SelectItem key={h} value={h}>
                                                {h}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Button size="icon" variant="outline" onClick={() => removeSlot(day, i)} className="rounded-full">
                                    <Minus size={16} />
                                </Button>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}
