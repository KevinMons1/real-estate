const useImage = () => {
    const imageToSideScreen = (image: HTMLElement, side: string): void => {
        if (!image) return;
        const positions = image.getBoundingClientRect();
        let offsetX = 0;

        if (side === 'left') offsetX = - positions.left;
        else if (side === 'right') offsetX = positions.right;

        if (offsetX === 0) return;

        image.style.transform = `translateX(${offsetX}px)`;
        image.style.width = `${positions.width + Math.abs(offsetX)}px`;
    }

    return {
        imageToSideScreen,
    }
}

export default useImage;