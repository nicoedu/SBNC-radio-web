export interface IRadioData {
  id?: string
  name?: string
  facebookLink?: string
  whatsappLink?: string
  instagramLink?: string
  twitterLink?: string
  colorName?: string
  color?: string
  aboutUs?: string
  events?: [IRadioEvent]
}

export interface IRadioEvent {
  month?: string
  title?: string
  description?: string
  photoUrl?: string
}
