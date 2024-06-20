import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Titles({ icon, text }: { icon: IconDefinition, text: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
            <FontAwesomeIcon icon={icon} color="#808080" size="2x"/>
            <p style={{ color: "#808080", fontSize: "1.5rem", fontWeight: "bold", marginTop: "20px", marginLeft: "10px" }}>{text}</p>
        </div>
    )
}