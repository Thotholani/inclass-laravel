import * as React from 'react';
import PhoneInputWithCountry, { Country, FlagProps, getCountryCallingCode } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { ChevronDownIcon, PhoneIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export interface PhoneNumberInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    defaultCountry?: Country;
    placeholder?: string;
    className?: string;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
                                                                      value,
                                                                      onChange,
                                                                      disabled,
                                                                      defaultCountry,
                                                                      placeholder,
                                                                      className
                                                                  }) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <div className="flex w-full items-stretch">    {/* 💥 FLEX WRAPPER FIX */}
                <PhoneInputWithCountry
                    international
                    value={value}
                    onChange={(v) => onChange(v ?? '')}
                    disabled={disabled}
                    defaultCountry={defaultCountry}
                    placeholder={placeholder}
                    flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={PhoneInput}
                    className="flex w-full"
                    limitMaxLength
                />
            </div>
        </div>
    );
};
PhoneNumberInput.displayName = 'PhoneNumberInput';

/* ---------- Phone input styled like Shadcn Input ---------- */
const PhoneInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, ...props }, ref) => (
        <Input
            ref={ref}
            data-slot="phone-input"
            className={cn('rounded-l-none rounded-r-xl shadow-none focus-visible:z-10', className)}
            {...props}
        />
    )
);
PhoneInput.displayName = 'PhoneInput';

/* ---------- Country selector ---------- */
type CountrySelectProps = {
    disabled?: boolean;
    value: Country;
    onChange: (value: Country) => void;
    options: { label: string; value: Country | undefined }[];
};

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => (
    <div
        className="border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground relative inline-flex items-center rounded-l-xl border py-2 ps-3 pe-2 outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50">
        <div className="inline-flex items-center gap-1" aria-hidden="true">
            <FlagComponent country={value} countryName={value} aria-hidden="true" />
            <span className="text-muted-foreground/80">
        <ChevronDownIcon size={16} aria-hidden="true" />
      </span>
        </div>
        <select
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e.target.value as Country)}
            className="absolute inset-0 text-sm opacity-0"
            aria-label="Select country"
        >
            <option key="default" value="">
                Select a country
            </option>
            {options
                .filter((x) => x.value)
                .map((option, i) => (
                    <option key={option.value ?? `empty-${i}`} value={option.value}>
                        {option.label} {option.value && `+${getCountryCallingCode(option.value)}`}
                    </option>
                ))}
        </select>
    </div>
);

/* ---------- Flag display ---------- */
const FlagComponent = ({ country, countryName }: FlagProps) => {
    const Flag = flags[country];
    return (
        <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? <Flag title={countryName} /> : <PhoneIcon size={16} aria-hidden="true" />}
    </span>
    );
};
