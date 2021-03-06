function createElement (type, props, ...children) {
    return {
        type,
        props: {
            ...props, 
            children: children.map(child => 
                typeof child === 'object' ?
                child :
                createTextElement(child)
                )
        }
    }
}

function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

function render (element, container) {
    const dom = element.type === 'TEXT_ELEMENT' ?
                    document.createTextNode(''):
                    document.createElement(element.type)

    Object.keys(element.props)
        .filter(key => key !== 'children')
        .forEach(name => {
            dom[name] = element.props[name]
        })

        // recursion
        element.props.children.forEach(child => 
                render(child, dom)
            )

        container.append(dom)
}

const React = {
    createElement
}

export const ReactDOM = {
    render
}

export default React