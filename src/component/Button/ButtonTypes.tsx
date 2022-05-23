export interface ButtonStyleType{
    width?:string;
    isLoading?:boolean;
}

export interface ButtonType{
    icon?:React.ReactElement;
    label:string;
    styles?:ButtonStyleType;
    isLoading?:boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}