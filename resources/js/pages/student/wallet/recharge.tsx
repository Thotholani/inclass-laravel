import MarketingLogo from '@/components/marketing-logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

export default function WalletRechargePage() {
    const [amount, setAmount] = useState('');
    const [selectedOperator, setSelectedOperator] = useState<'mtn' | 'airtel'>('mtn');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [amountError, setAmountError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    /* ───── local validation helpers ───── */
    const checkPhoneNumber = (phone: string) => {
        const phoneRegex = /^(09|07|08)\d{8}$/;
        if (!phone) return 'Phone number is required';
        if (!phoneRegex.test(phone)) return 'Please enter a valid phone number (e.g., 0977234567)';
        return '';
    };

    const checkAmount = (amt: string) => {
        const num = Number.parseFloat(amt);
        if (!amt) return 'Amount is required';
        if (isNaN(num) || num <= 0) return 'Please enter a valid amount';
        if (num < 10) return 'Minimum amount is 10 Kwacha';
        if (num > 10000) return 'Maximum amount is 10,000 Kwacha';
        return '';
    };

    /* ───── change handlers ───── */
    const handlePhoneChange = (val: string) => {
        setPhoneNumber(val);
        setPhoneError(checkPhoneNumber(val));
    };

    const handleAmountChange = (val: string) => {
        setAmount(val);
        setAmountError(checkAmount(val));
    };

    /* ───── helpers ───── */
    const getRechargeAmount = () => Number.parseFloat(amount) || 0;
    const getServiceFee = () => getRechargeAmount() * 0.05;
    const getTotal = () => getRechargeAmount() + getServiceFee();

    /* ───── update validity ───── */
    useEffect(() => {
        const phoneValid = phoneNumber && !checkPhoneNumber(phoneNumber);
        const amountValid = amount && !checkAmount(amount);
        setIsFormValid(amountValid && phoneValid);
    }, [phoneNumber, amount]);

    /* ───────────────────────────────────────────────────────────── */

    return (
        <div>
            {/* Top bar */}
            <nav className="w-full py-4">
                <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between">
                    <MarketingLogo />

                    <Link href="/student/wallet">
                        <Button size="icon" variant="secondary">
                            <RiCloseLine />
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Main */}
            <main className="mx-auto max-w-2xl space-y-6 py-6">
                {/* ───── Payment method ───── */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">Payment Method</Label>

                    {/* MTN */}
                    <OperatorCard
                        selected={selectedOperator === 'mtn'}
                        onClick={() => setSelectedOperator('mtn')}
                        badge={<span className="rounded bg-yellow-400 px-2 py-1 text-xs font-bold">MoMo</span>}
                        label="MTN Mobile Money"
                    />

                    {/* Airtel */}
                    <OperatorCard
                        selected={selectedOperator === 'airtel'}
                        onClick={() => setSelectedOperator('airtel')}
                        badge={<span className="rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">airtel money</span>}
                        label="Airtel Money"
                    />
                </div>

                {/* ───── Phone number ───── */}
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Mobile Money Number</Label>
                    <Input
                        id="phoneNumber"
                        placeholder="0977234567"
                        value={phoneNumber}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`${phoneError ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {phoneError && <InlineError message={phoneError} />}
                </div>

                {/* ───── Amount ───── */}
                <div className="space-y-2">
                    <Label htmlFor="amount">Amount (Kwacha)</Label>
                    <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => handleAmountChange(e.target.value)}
                        className={`${amountError ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        min="10"
                        max="10000"
                        step="1"
                    />
                    {amountError && <InlineError message={amountError} />}
                    <p className="text-muted-foreground text-xs">Minimum: 10 Kwacha • Maximum: 10,000 Kwacha</p>
                </div>

                {/* ───── Payment summary ───── */}
                <div className="bg-muted space-y-4 rounded-xl p-5">
                    <h3 className="font-semibold">Payment Summary</h3>

                    <SummaryRow label="Recharge amount" value={getRechargeAmount()} />
                    <SummaryRow label="Service fee (5%)" value={getServiceFee()} />

                    <Separator />

                    <SummaryRow label={<span className="font-medium">Total to pay</span>} value={getTotal()} bold large />

                    <SummaryRow label="You will receive" value={getRechargeAmount()} valueClass="text-primary" />

                    {getTotal() === 0 && (
                        <div className="bg-muted/50 rounded-lg p-3">
                            <p className="text-muted-foreground text-center text-sm">Enter an amount to see payment details</p>
                        </div>
                    )}
                </div>

                {/* ───── Recharge button ───── */}
                <Button disabled={!isFormValid} className="h-12 w-full text-base font-medium disabled:cursor-not-allowed disabled:opacity-50">
                    Recharge Wallet
                </Button>

                {/* Info */}
                <p className="text-muted-foreground text-center text-xs">You will receive a prompt on your phone to confirm the payment</p>
            </main>
        </div>
    );
}

/* ──────────────── helpers / small components ──────────────── */
function OperatorCard({ selected, onClick, badge, label }: { selected: boolean; onClick: () => void; badge: React.ReactNode; label: string }) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                selected ? 'border-primary bg-muted' : 'border-input hover:border-border'
            }`}
        >
            <div className="flex items-center space-x-3">
                {badge}
                <span className="font-medium">{label}</span>
            </div>
        </div>
    );
}

function InlineError({ message }: { message: string }) {
    return (
        <div className="text-destructive flex items-center space-x-2 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
}

function SummaryRow({
    label,
    value,
    bold,
    large,
    valueClass = '',
}: {
    label: React.ReactNode;
    value: number;
    bold?: boolean;
    large?: boolean;
    valueClass?: string;
}) {
    return (
        <div className="flex items-center justify-between">
            <span className={`text-sm ${bold ? 'font-medium' : 'text-muted-foreground'}`}>{label}</span>
            <span className={`${bold ? 'font-bold' : 'font-medium'} ${large ? 'text-lg' : ''} ${valueClass}`}>
                {value > 0 ? `${value.toFixed(2)} Kwacha` : '0.00 Kwacha'}
            </span>
        </div>
    );
}
