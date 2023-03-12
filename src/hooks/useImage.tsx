interface IimageToSideScreen {
    image: HTMLElement,
    parent: HTMLElement,
    container: HTMLElement,
    position: string,
    offsetHeight?: number,
    offsetWidth?: number
}

const useImage = () => {
    const imageToSideScreen = ({
        image,
        parent,
        container,
        position,
        offsetHeight = 0,
        offsetWidth = 0
    }: IimageToSideScreen): void => {
        if (!image || !container || !parent || !position) return;

        const height = container.scrollHeight + offsetHeight
        const parentPosition = parent.getBoundingClientRect();
        const parentOffset = position === 'left' ? parentPosition.left : parentPosition.right;
        const width = parentPosition.width + parentOffset + offsetWidth;

        image.style.height = `${height}px`;
        image.style.width = `${width}px`;
    };

    return {
        imageToSideScreen,
    };
}

export default useImage;