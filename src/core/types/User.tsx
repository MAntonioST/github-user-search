export type UsersResponse = {
    content: User[];
   
}
export type User ={
    id: number;
    login: string;
    name:string;
    company: string;
    blog:string;
    location: string;
    created_at: string;
    public_repos:number;
    followers: number;
    following: number;
    avatar_url:string;
}

