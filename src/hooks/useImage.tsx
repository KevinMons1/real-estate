const useImage = () => {
    const imageToSideScreen = (image: HTMLElement, parent: HTMLElement, container: HTMLElement, position: string): void => {
        if (!image || !container || !parent || !position) return;

        const height = container.clientHeight;
        const parentPosition = parent.getBoundingClientRect();
        const parentOffset = position === 'left' ? parentPosition.left : parentPosition.right;
        const width = parentPosition.width + parentOffset;

        image.style.height = `${height}px`;
        image.style.width = `${width}px`;
    };

    return {
        imageToSideScreen,
    };
}

export default useImage;