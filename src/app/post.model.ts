import { PostComment } from "./comment.model";

export class Post 
{
    id             : number;       
    title          : string;
    author         : string;
    picture        : string;
    commentsCount  : number;
    comments       : PostComment[];
    isSelected     : number;
}

