type GreetProps = {
    name: string,
    messageCount?: number,
    isLogged: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>{
                 props.isLogged ? 'Welcome {props.name}! You have not seen your {props.messageCount} messages.' : 'Not logged'
                }
            </h2>
        </div>
    )
}