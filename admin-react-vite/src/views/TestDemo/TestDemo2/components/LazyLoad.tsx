import { useRef, useEffect } from 'react';

interface LazyLoadProps {
    imgSrc: string;
    options?: IntersectionObserverInit; // IntersectionObserver 配置项
    style?: React.CSSProperties;
}

const LazyLoad = ({ imgSrc, options, style }: LazyLoadProps) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            const img = entries[0].target as HTMLImageElement;
            const dataImgUrl = img.dataset.img as string;

            if (dataImgUrl) {
                img.src = dataImgUrl;
                observer.unobserve(img);
            }
        }
    }, {
        root: document.getElementById("lazyLoadpage"),
        rootMargin: '0px',
        threshold: 0.1,
        ...options
    });

    useEffect(() => {
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        }
    }, []);

    return (
        <div style={style}>
            <img className="object-contain" ref={imgRef} data-img={imgSrc} alt="" />
        </div>
    );
};

export default LazyLoad;
