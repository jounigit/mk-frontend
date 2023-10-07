/* eslint-disable no-prototype-builtins */

export interface BaseModel {
    id: number;
    title: string;
    en_title?: string;
}

export interface ICv extends BaseModel {
    content: string;
}

export interface IAlbum extends BaseModel {
    slug: string;
    // en_slug: string;
    year?: number;
    content?: string;
    en_content?: string;
    status: number;
    pictures: IPicture[];
}

export interface IArticle extends BaseModel {
    year: number;
    media: string;
    pub_nm: string;
    author: string;
    file: string;
}

export interface IPicture extends BaseModel  {
    year: number;
    technique?: string;
    en_technique?: string;
    size?: string;
    content?: string;
    en_content?: string;
    photographer?: string;
    image: string;
    pic_order: number;
}

export interface IAlbumPicture {
  id: number;
  album_id: string;
  picture_id: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  authUser: IUser | null;
  token: string | null;
  isLoggedIn: boolean;
}

export interface IUserServer extends Omit<IUser, 'token'> {
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ILoginData {
  status: boolean;
  message: string;
  user: IUserServer;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export type Path = 'albums' | 'pictures' | 'cvs'
// ##################### New types #########################
export type INewAlbum = Omit<IAlbum, 'id' | 'slug' | 'pictures' | 'status'>
export type INewPicture = Omit<IPicture, 'id'>
export type INewCV = Omit<ICv, 'id'>
export interface INewAlbumPicture{
  album_id: number;
  picture_id: number;
}

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

// ####################### Utils #########################
export function
hasOwnProperty<X extends 'object', Y extends PropertyKey>(obj: X, prop: Y)
: obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop)
}

export function isAlbum(value: unknown): value is IAlbum {
  if (
    value!== null
    && typeof value === 'object' && 'pictures' in value
  ) {
    return true
  }

  return false
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