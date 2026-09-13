// "user": {
//     "id": 113,
//     "username": "avagyanhovsep",
//     "firstName": "Hovsep",
//     "lastName": "Avagyan",
//     "avatar": "1735321123456-avatar.png",
//     "bio": "Building Lyncora.",
//     "theme": "system",
//     "isAccountPrivate": false,


export type User ={
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    avatar:string;
    bio: string;
    theme: string;
    isAccountPrivate: boolean;
}

export type ChangePassword = {
    currentPassword: string;
    newPassword: string;
}

export type GetUserRes = {
    user:User;
}

export type BioType = { 
    bio: string;
}

export type theme = {
    theme: string;
}

