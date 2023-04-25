import { FC } from "react";

type Props = {
    title: string,
    msgTitle: string
}

const TitlePage:FC <Props> = ({title, msgTitle}) => {
    return ( 
        <div className="TitlePage">
            <h2>{title}</h2>
            <p>{msgTitle}</p>
        </div>
     );
}
 
export default TitlePage
