import type { Posts } from "../../../../types/account"

type Props = {
    post: Posts
}
export const ShowPosts = ({post}: Props) => {
    return (
        <div>
            <div>{post.text}</div>
            <div>{post.createdAt}</div>
        </div>
    )
}