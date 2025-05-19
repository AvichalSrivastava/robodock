export type Monster = {
    id: number;
    name: string;
    email: string;
    website: string;
};

export type CardListProps = {
    monsters: Monster[];
};