import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

export type ModalVariant =
    | "default"
    | "danger"
    | "warning"
    | "success";

export interface ModalOptions {
    title: string;
    description?: string;
    variant?: ModalVariant;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void | Promise<void>;
    children?: ReactNode;
    showCancel?: boolean;
}

interface ModalContextValue {
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
}

const ModalContext =
    createContext<ModalContextValue | null>(null);

export function ModalProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [modal, setModal] =
        useState<ModalOptions | null>(null);

    const openModal = (options: ModalOptions) => {
        setModal(options);
    };

    const closeModal = () => {
        setModal(null);
    };

    const handleConfirm = async () => {
        if (!modal?.onConfirm) {
            closeModal();
            return;
        }

        await modal.onConfirm();
        closeModal();
    };

    return (
        <ModalContext.Provider
            value={{
                openModal,
                closeModal,
            }}
        >
            {children}

            {modal && (
                <UniversalModal
                    modal={modal}
                    onClose={closeModal}
                    onConfirm={handleConfirm}
                />
            )}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error(
            "useModal must be used inside ModalProvider"
        );
    }

    return context;
}

interface UniversalModalProps {
    modal: ModalOptions;
    onClose: () => void;
    onConfirm: () => void;
}

function UniversalModal({
    modal,
    onClose,
    onConfirm,
}: UniversalModalProps) {
    const variant =
        modal.variant ?? "default";

    const iconStyles = {
        default:
            "bg-sky-50 text-sky-600",
        danger:
            "bg-red-50 text-red-600",
        warning:
            "bg-amber-50 text-amber-600",
        success:
            "bg-emerald-50 text-emerald-600",
    };

    const icons = {
        default: "✦",
        danger: "!",
        warning: "!",
        success: "✓",
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-slate-950/20">
                {/* Decorative SVG */}
                <svg
                    className="pointer-events-none absolute right-0 top-0 h-40 w-40 text-sky-100"
                    viewBox="0 0 160 160"
                    fill="none"
                >
                    <circle
                        cx="100"
                        cy="40"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="1"
                    />

                    <circle
                        cx="100"
                        cy="40"
                        r="42"
                        stroke="currentColor"
                        strokeWidth="1"
                    />

                    <path
                        d="M100 0V80M60 40H140"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                </svg>

                <div className="relative p-6 md:p-8">
                    <div className="flex items-start gap-4">
                        <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${iconStyles[variant]}`}
                        >
                            {icons[variant]}
                        </div>

                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg font-bold text-slate-900">
                                {modal.title}
                            </h2>

                            {modal.description && (
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {modal.description}
                                </p>
                            )}
                        </div>
                    </div>

                    {modal.children && (
                        <div className="mt-6">
                            {modal.children}
                        </div>
                    )}
                </div>

                <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 p-5 sm:flex-row sm:justify-end">
                    {modal.showCancel !== false && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-2xl px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-slate-900"
                        >
                            {modal.cancelText ??
                                "Cancel"}
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={onConfirm}
                        className={`
                            rounded-2xl px-5 py-3 text-sm
                            font-bold text-white transition
                            ${
                                variant ===
                                "danger"
                                    ? "bg-red-500 hover:bg-red-600"
                                    : "bg-sky-500 hover:bg-sky-600"
                            }
                        `}
                    >
                        {modal.confirmText ??
                            "Continue"}
                    </button>
                </div>
            </div>
        </div>
    );
}