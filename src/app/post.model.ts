export class Post 
{
    id             : number;       
    title          : string;
    author         : string;
    picture        : string;
    commentsCount  : number;
    comments       : Comment[];
    isSelected     : number;
}

