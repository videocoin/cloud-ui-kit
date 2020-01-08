interface PaginationProps {
    onChange: (page: number) => void;
    initialPage?: number;
    max: boolean;
}
export declare const Pagination: ({ initialPage, onChange, max, }: PaginationProps) => JSX.Element;
export {};
