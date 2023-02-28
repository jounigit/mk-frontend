export interface BaseModel {
    id: string;
    title: string;
}

export interface ICv extends BaseModel {
    content: string;
}

export interface IAlbum extends BaseModel {
    slug: string;
    year: number;
    content?: string;
    pictures?: Array<string>;
}

export interface IPicture extends BaseModel {
    year: number;
    technique: string;
    size: string;
    content: string;
    photographer: string;
    file: string;
    pic_order: number;
}