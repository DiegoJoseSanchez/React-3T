export interface ICategoria {
    sort(arg0: (b: any, a: any) => number): import("react").ReactNode;
    name:string;
    ap:number;
    img:string;
    codigo?:string;
    class:string;
    country:string;
    guild:string;
};
export interface Eventos {
    name:string;
    descripcion:string;
    codigo?:string;
} 