export default class Project {
    id: number;
    title: string;
    header_image: string;
    description: string;
    content: Array<[string, string]>;

    constructor(id: number, title: string, header_image:string, description: string, content: Array<[string, string]>) {
        this.id = id;
        this.title = title;
        this.header_image = header_image;
        this.description = description;
        this.content = content;
    }
}