import {useState} from "react";
import {Button} from "react-bootstrap";

function useHandButton() {
    const [buttonText, setButtonText] = useState("Raise Hand Up");
    const up = "Raise Hand Up";
    const down = "Raise Hand Down";
    return (
        <Button onClick={() => setButtonText(buttonText === up ? down : up)}>{buttonText}</Button>
    )
}
export default useHandButton;