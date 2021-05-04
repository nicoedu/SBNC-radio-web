export interface IRadioData {
  id?: string
  name?: string
  facebookLink?: string
  whatsappLink?: string
  instagramLink?: string
  twitterLink?: string
  colorName?: string
  color?: string
  book?: string
  aboutUs?: string
  events?: [IRadioEvent]
  images?: IRadioPhoto[]
  planos?: IRadioPhoto[]
}
export interface IRadioPhoto {
  src: string
  name: string
}
export interface IRadioEvent {
  month?: string
  title?: string
  description?: string
  photoUrl?: string
}
