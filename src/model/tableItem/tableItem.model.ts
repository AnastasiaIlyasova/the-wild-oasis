export type TableItemAbout = {
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    buttonLink?: string;
}

export type TableItemAboutText = Omit<TableItemAbout, 'image'>

export type TableItemAboutImage = Pick<TableItemAbout, 'image'>