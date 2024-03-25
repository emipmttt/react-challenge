import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName } from '../actions/userActions';

const BreakingBadFormComponent = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    return (<>
        <div>
            <input
                type="text"
                value={firstName}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
                placeholder="First Name"
                className="breaking-bad__input"
            />
        </div>
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={lastName}
                onChange={(e) => dispatch(setLastName(e.target.value))}
                placeholder="Last Name"
                className="breaking-bad__input"
            />
        </div>
    </>
    );
};

export default BreakingBadFormComponent;
