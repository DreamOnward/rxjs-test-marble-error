export type ComparisonFunction = (actual: any, expected: any) => void;

export type ReverseMapping = {
    [key in string | number | symbol]: string;
};