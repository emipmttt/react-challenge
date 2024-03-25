import { useSelector } from 'react-redux';
import reactStringReplace from 'react-string-replace';
import elements from '../utils/elements.js';

function sortByLength(arr) {
    return arr.sort((a, b) => b.length - a.length);
}

const BreakingBadTitle = () => {
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    const firtNameSymbol = sortByLength(elements).find((element) => firstName.includes(element))



    return (
        <div className="breaking-bad__title">
            {firstName && (reactStringReplace(firstName, `${firtNameSymbol}`, (match) => (
                <div className="breaking-bad__title-element breaking-bad__title-element--first">{match.toLocaleLowerCase()}</div>
            )))}
            {/* <>
                <div className="breaking-bad__title-element breaking-bad__title-element--first">
                    {firstName.substring(0, 2)}
                </div>
                {firstName.slice(2)}
            </> */}
            <br />
            {lastName && (
                <>
                    <div className="breaking-bad__title-element">{lastName.substring(0, 2)}</div>
                    {lastName.slice(2)}
                </>
            )}
        </div>
    );
};

export default BreakingBadTitle;
