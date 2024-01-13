import CustomButton from "../buttons/CustomButton";

export default function Counter({ counter, setCounter, max }) {
    const increase = () => counter < max && setCounter(counter + 1);
    const decrease = () => counter > 1 && setCounter(counter - 1);

    return (
        <div className="flex items-center gap-3">
            <CustomButton onClick={decrease} className="active:bg-blue-600">
                -
            </CustomButton>
            <p>{counter}</p>
            <CustomButton onClick={increase} className="active:bg-blue-600">
                +
            </CustomButton>
        </div>
    );
}
