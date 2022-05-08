export interface ButtonStyleType{
    size?:'fw'|"md";
    isLoading?:boolean;

}

export interface ButtonType{
    icon?:React.ComponentType;
    label:string;
    styles?:ButtonStyleType;
}