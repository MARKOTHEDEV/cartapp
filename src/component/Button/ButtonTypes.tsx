export interface ButtonStyleType{
    size?:'fw'|"md";
    isLoading?:boolean;

}

export interface ButtonType{
    icon?:React.ReactNode;
    label:string;
    styles?:ButtonStyleType;
}