import { UserData } from '../../schemas/user.schema'

interface CardUserProps {
    user: UserData;
}

export const CardUser = ({ user }: CardUserProps) => {
    const words = user.name.split(' ');
    const initials = words.map((word) => word[0]).join('');
    return (
        <div>
            <p>{initials}</p>
            <span>Ricardo Souza</span>
        </div>
    )
}