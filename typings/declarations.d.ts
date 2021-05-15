// Allows for scss files to be imported in ts files.
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}