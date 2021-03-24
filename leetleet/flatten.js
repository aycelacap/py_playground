function flatten(data) {
    if (!Array.isArray(data)) return [data];

    const flat = [];
    data.forEach((el) => {
        flat.push(...flatten(el));
    });
    return flat;
}