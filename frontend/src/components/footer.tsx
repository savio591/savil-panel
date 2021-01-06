import React from "react";
import '../styles/footer.css';

function Footer(props: { copyrightText: string }) {
    const copyrightText = props.copyrightText;

    return (
        <>
            <footer>
                <h1>{copyrightText}
                </h1>
            </footer>
        </>
    )
}

export default Footer;