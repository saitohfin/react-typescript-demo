type StatusProps = {
    status: number
}

export const Status = (props: StatusProps) => {
    let message: String;

    if(props.status === 1) {
        message = 'Loading';
    } else if (props.status === 2) {
        message = 'Data fetched successfully';
    } else {
        message = 'ERROR';
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}