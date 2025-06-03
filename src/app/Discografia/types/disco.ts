
export interface IMusicos{
    nombre: string;
    instrumento: string;
    imagen?: string;
    link?: string;
}

export interface IDisco  {
  
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  descripcionLarga?: string;
  musicos?: IMusicos[];
}