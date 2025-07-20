import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiFileTextLine, RiUploadCloudLine } from 'react-icons/ri';

type Props = {
    /** Current file from your useForm state */
    value: File | null;
    /** (file | null) → setData('qualification', file) */
    onChange: (file: File | null) => void;
};

type Preview = { url: string; type: 'image' | 'pdf' };

export default function QualificationDropzone({ value, onChange }: Props) {
    const [preview, setPreview] = useState<Preview | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    /* ---------- create / revoke preview --------------------------------- */
    useEffect(() => {
        if (!value) {
            setPreview(null);
            return;
        }

        const url = URL.createObjectURL(value);
        const type = value.type.startsWith('image/') ? 'image' : 'pdf';
        setPreview({ url, type });

        return () => URL.revokeObjectURL(url); // cleanup
    }, [value]);

    /* ---------- universal handler (drop OR browse) ---------------------- */
    const handleFile = useCallback(
        (file: File | undefined | null) => {
            if (!file) return;
            // basic mime restriction
            if (!/^(image\/(jpeg|png)|application\/pdf)$/i.test(file.type)) return;
            onChange(file);
        },
        [onChange],
    );

    /* ---------- drag events -------------------------------------------- */
    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files?.[0]);
    };

    /* ---------- markup -------------------------------------------------- */
    return (
        <div className="space-y-3">
            {/* Preview / file name */}
            {value ? (
                <div className="flex items-center gap-3 rounded-2xl border p-4">
                    {preview?.type === 'image' ? (
                        <img src={preview.url} alt={value.name} className="h-16 w-16 rounded-md object-cover" />
                    ) : (
                        <RiFileTextLine className="text-muted-foreground" size={24} />
                    )}

                    <div className="flex-1 truncate text-sm font-medium">{value.name}</div>

                    <Button
                        variant="link"
                        size="icon"
                        className={'hover:text-destructive hover:cursor-pointer'}
                        aria-label="Remove file"
                        onClick={() => onChange(null)}
                    >
                        <RiCloseLine className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    className="border-muted-foreground/40 bg-muted/50 text-muted-foreground hover:bg-muted/70 flex h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors"
                    onClick={() => inputRef.current?.click()}
                >
                    <RiUploadCloudLine size={20} />
                    <p className="text-sm">
                        Drag & drop or <span className="underline">browse</span>
                    </p>
                    <p className="text-xs">PDF, JPG or PNG — max 8 MB</p>
                    <input
                        ref={inputRef}
                        type="file"
                        accept="application/pdf,image/*"
                        onChange={(e) => handleFile(e.target.files?.[0])}
                        className="sr-only"
                    />
                </div>
            )}
        </div>
    );
}
