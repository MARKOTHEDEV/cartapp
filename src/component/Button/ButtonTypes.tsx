export interface ButtonStyleType{
    size?:'fw'|"md";
    isLoading?:boolean;

}

export interface ButtonType{
    icon?:React.ReactElement;
    label:string;
    styles?:ButtonStyleType;
}