export interface PostDataType {
    id: number,
    messages: string
    likesCount: string
}

export interface DialogDataType {
    id: number,
    name: string
}

export interface MessagesDataType {
    id: number,
    messages: string
}

export const posts: Array<PostDataType> = [
    {id: 1, messages: 'Hi, how are you?', likesCount: '11'},
    {id: 2, messages: 'It\'s my first post', likesCount: '23'}
]

export const dialogs: Array<DialogDataType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},

]

export const messages: Array<MessagesDataType> = [
    {id: 1, messages: 'Hi'},
    {id: 2, messages: 'How is your it-kamasutra?'},
    {id: 3, messages: 'Yo'},
    {id: 4, messages: 'Yo'},
    {id: 5, messages: 'Yo'}]