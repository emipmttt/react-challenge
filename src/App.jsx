import BreakingBadTitle from './components/BreakingBadTitle.jsx';
import BreakingBadFormComponent from './components/BreakingBadForm.jsx';
import './App.css';
import DownloadImageButton from './components/DownloadImageButton.jsx';

const BreakingBadForm = () => {
  return (
    <div className="breaking-bad__container">
      <div className="breaking-bad__form">
        <BreakingBadTitle />
        <BreakingBadFormComponent />
        <DownloadImageButton />
      </div>
    </div>
  );
};

export default BreakingBadForm;
