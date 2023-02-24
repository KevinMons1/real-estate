const useImage = () => {
    const imageToSideScreen = (image: HTMLElement, side: string): void => {
        if (!image) return;
        const positions = image.getBoundingClientRect();
        let offsetX = 0;
        const offsetWidth = offsetX;

        if (side === 'left') offsetX = - positions.left;
        else if (side === 'right') offsetX = positions.right;

        image.style.transform = `translateX(${offsetX}px)`;
        image.style.width = `${positions.width + offsetWidth}px`;
    }

    return {
        imageToSideScreen,
    }
}

export default useImage;