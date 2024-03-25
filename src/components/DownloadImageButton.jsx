import domtoimage from 'dom-to-image';

const DownloadImageButton = () => {
    const handleDownloadImage = async () => {
        const element = document.querySelector('.breaking-bad__title');
        if (element) {
            try {
                const dataUrl = await domtoimage.toPng(element);
                // Create a link to download the image
                const link = document.createElement('a');
                link.download = 'captured-image.png';
                link.href = dataUrl;
                link.click();
            } catch (error) {
                console.error('oops, something went wrong!', error);
            }
        }
    };

    return (
        <button
            className="breaking-bad__button"
            onClick={handleDownloadImage}
        >Breakify</button>
    );
};

export default DownloadImageButton;
