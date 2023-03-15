
export interface BaseModel {
    id: number;
    title: string;
}

export interface ICv extends BaseModel {
    content: string;
}

export interface IAlbum extends BaseModel {
    slug: string;
    year: number;
    content?: string;
    status: number;
    pictures: IPicture[];
}

export interface IPicture extends BaseModel {
    year: number;
    technique: string;
    size: string;
    content: string;
    photographer: string;
    image: string;
    pic_order: number;
}

export type Path = 'albums' | 'pictures' | 'cvs'
// ##################### New types #########################
export type INewAlbum = Omit<IAlbum, 'id' | 'slug'>
export type INewPicture = Omit<IPicture, 'id'>
export type INewCV = Omit<ICv, 'id'>

// ####################### Intersection Types #########################
export type NewRecord = INewAlbum & INewCV & INewPicture
export type OneRecord = IAlbum & IPicture & ICv
export type AllRecords = IAlbum[] & IPicture[] & ICv[]

// ####################### Api service Types #########################
export type IdUrlParams = {
    id: number
    url: string
}

export type SlugUrlParams = {
    slug: string
    url: string
}

export interface CreateOneParams<T> {
    url: string;
    newRecord: T;
}

// ########################## utils ###################################
export function isString(v: unknown): v is string {
  return typeof v === 'string'
}

export function isArray<T>(value: T | undefined) : value is T {
  if (!Array.isArray(value)) {
    return false
  }
  return true
}

export function isPictureArray(value : unknown) : value is IPicture[] {
  if (!Array.isArray(value)) {
    return false
  }
  
  if (value.some((v) => typeof v !== 'object')) {
    return false
  }
  return true
}