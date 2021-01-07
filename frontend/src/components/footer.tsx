import React from "react";
import '../styles/footer.css';

interface FooterProps {
    copyrightText: string
}
// Rodapé do site
function Footer(props: FooterProps) {
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