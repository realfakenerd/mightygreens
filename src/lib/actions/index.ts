export function blur(node: HTMLElement) {
    const img = node.children.item(0) as HTMLImageElement;
    img.style.transition = 'opacity 300ms ease-in-out'
    if (img.complete) {
        img.style.opacity = '1';
        node.classList.remove('animate-pulse');
        node.style.backgroundImage = '';
    }
}