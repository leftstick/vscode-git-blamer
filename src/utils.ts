

export function formatDate(number): string {
    const d = new Date(number);

    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}
