type PersonListProps = {
    names: {
        first: string,
        second: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.second}
                    </h2>
                )
            })
            }
        </div>
    )
}