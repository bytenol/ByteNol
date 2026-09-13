import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from "react";

export type SnackbarType =
    | "success"
    | "error"
    | "warning"
    | "info";

interface Snackbar {
    id: number;
    message: string;
    type: SnackbarType;
    duration: number;
}

interface SnackbarContextValue {
    showSnackbar: (
        message: string,
        type?: SnackbarType,
        duration?: number
    ) => void;
    hideSnackbar: (id: number) => void;
}

const SnackbarContext =
    createContext<SnackbarContextValue | null>(
        null
    );

export function SnackbarProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [snackbars, setSnackbars] =
        useState<Snackbar[]>([]);

    const hideSnackbar = useCallback(
        (id: number) => {
            setSnackbars((current) =>
                current.filter(
                    (item) => item.id !== id
                )
            );
        },
        []
    );

    const showSnackbar = useCallback(
        (
            message: string,
            type: SnackbarType = "info",
            duration = 4000
        ) => {
            const id = Date.now();

            setSnackbars((current) => [
                ...current,
                {
                    id,
                    message,
                    type,
                    duration,
                },
            ]);

            window.setTimeout(() => {
                hideSnackbar(id);
            }, duration);
        },
        [hideSnackbar]
    );

    return (
        <SnackbarContext.Provider
            value={{
                showSnackbar,
                hideSnackbar,
            }}
        >
            {children}

            <div className="pointer-events-none fixed bottom-5 right-5 z-[110] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
                {snackbars.map((snackbar) => (
                    <SnackbarItem
                        key={snackbar.id}
                        snackbar={snackbar}
                        onClose={() =>
                            hideSnackbar(
                                snackbar.id
                            )
                        }
                    />
                ))}
            </div>
        </SnackbarContext.Provider>
    );
}

export function useSnackbar() {
    const context = useContext(
        SnackbarContext
    );

    if (!context) {
        throw new Error(
            "useSnackbar must be used inside SnackbarProvider"
        );
    }

    return context;
}

function SnackbarItem({
    snackbar,
    onClose,
}: {
    snackbar: Snackbar;
    onClose: () => void;
}) {
    const styles = {
        success:
            "border-emerald-100 bg-white",
        error:
            "border-red-100 bg-white",
        warning:
            "border-amber-100 bg-white",
        info:
            "border-sky-100 bg-white",
    };

    const iconStyles = {
        success:
            "bg-emerald-50 text-emerald-600",
        error:
            "bg-red-50 text-red-600",
        warning:
            "bg-amber-50 text-amber-600",
        info:
            "bg-sky-50 text-sky-600",
    };

    const icons = {
        success: "✓",
        error: "×",
        warning: "!",
        info: "i",
    };

    return (
        <div
            className={`pointer-events-auto overflow-hidden rounded-2xl border shadow-xl shadow-slate-900/10 ${styles[snackbar.type]}`}
        >
            <div className="flex items-start gap-3 p-4">
                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${iconStyles[snackbar.type]}`}
                >
                    {icons[snackbar.type]}
                </div>

                <p className="flex-1 pt-1 text-sm font-semibold leading-5 text-slate-700">
                    {snackbar.message}
                </p>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-700"
                >
                    ×
                </button>
            </div>

            <div
                className={`h-1 ${
                    snackbar.type ===
                    "error"
                        ? "bg-red-400"
                        : "bg-sky-400"
                }`}
                style={{
                    animation: `snackbar-progress ${snackbar.duration}ms linear forwards`,
                }}
            />
        </div>
    );
}