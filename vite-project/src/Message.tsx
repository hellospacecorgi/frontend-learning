function Message() {
    const name = 'Flora';
    if (name)
        return <h1>Hello World {name}</h1>;
    return <h1>Hello World Nothing</h1>;
}

export default Message;