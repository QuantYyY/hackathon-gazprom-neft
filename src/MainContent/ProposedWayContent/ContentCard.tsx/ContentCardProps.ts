export interface ContentCardProps{
    title: string;
    categories: string;
    info: string;
    status: "not-started" | "started" | "finished",
    taskCounter?: string, 
} 