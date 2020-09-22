export const _save = (field, value) => {
    localStorage.setItem(field, JSON.stringify([..._load(field), value]))
}

export const _delete = (field, value) => {
    localStorage.setItem(field, JSON.stringify([...[..._load(field)].filter(item => (item.course != value.course))]))
}

export const _load = field => JSON.parse(localStorage.getItem(field)) || []