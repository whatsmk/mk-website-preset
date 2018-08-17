function button({ title, onClick, type = 'blueSky', key = title, component, ...ext }) {
    return {
        name: key,
        component: 'Button',
        type: type,
        children: title,
        onClick: onClick ? `{{$${onClick}(data)}}` : undefined,
        ...ext
    }
}

export default {
    button
}