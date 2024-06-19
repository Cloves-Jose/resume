import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Titles({ icon, text }: { icon: IconDefinition, text: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", marginLeft: "30px", marginTop: "15px" }}>
            <FontAwesomeIcon icon={icon} color="#808080" size="2x"/>
            <p style={{ color: "#808080", marginLeft: "10px", fontSize: "1.5rem", fontWeight: "bold", marginTop: "20px" }}>{text}</p>
        </div>
    )
}