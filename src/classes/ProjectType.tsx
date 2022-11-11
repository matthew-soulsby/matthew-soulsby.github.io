export type Project = {
    id: number,
    title: string,
    header_image: string,
    description: string,
    content: Array<Content>
}

export type Content = {
    type: string,
    media: string,
    section_header: string,
    section_body: string
}