interface Formidable { // ;-)
    format(): string;
}

export function auditLog<T extends Formidable>(subject: T, action: string) {
    console.log(`[AUDIT] <${action}> performed on ${subject.format()}`);
}