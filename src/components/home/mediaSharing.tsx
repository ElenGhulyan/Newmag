import MediaSharingItem from "../productsItem/mediaSharingItem";

const MediaSharing = () => {
    return (
        <section className='bg-[#010101] py-[70px]'>
            <div className='content '>
                <div className='flex justify-between '>
                    <h2 className='text-[#fff] text-3xl not-italic font-semibold'>Մեդիալուսաբանում </h2>
                    <p className='text-[#fff] text-lg not-italic font-medium leading-6'><a href="" className='flex gap-[10px] items-center'>Բոլոր հոդվածները
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00008 8.03396C1.00008 8.16677 1.05276 8.29414 1.14653 8.38806C1.2403 8.48197 1.36747 8.53473 1.50008 8.53473H13.2931L10.1461 11.6856C10.0522 11.7796 9.99945 11.9072 9.99945 12.0401C9.99945 12.1731 10.0522 12.3007 10.1461 12.3947C10.24 12.4887 10.3673 12.5415 10.5001 12.5415C10.6329 12.5415 10.7602 12.4887 10.8541 12.3947L14.8541 8.3885C14.9006 8.34199 14.9376 8.28673 14.9628 8.22589C14.988 8.16505 15.001 8.09983 15.001 8.03396C15.001 7.96809 14.988 7.90287 14.9628 7.84203C14.9376 7.78119 14.9006 7.72593 14.8541 7.67941L10.8541 3.67323C10.8076 3.62667 10.7524 3.58973 10.6917 3.56453C10.6309 3.53934 10.5658 3.52637 10.5001 3.52637C10.3673 3.52637 10.24 3.57919 10.1461 3.67323C10.0522 3.76726 9.99945 3.89479 9.99945 4.02777C9.99945 4.16075 10.0522 4.28829 10.1461 4.38232L13.2931 7.53318L1.50008 7.53318C1.36747 7.53318 1.2403 7.58594 1.14653 7.67986C1.05276 7.77377 1.00008 7.90114 1.00008 8.03396Z" fill="white" stroke="white" stroke-width="0.5"/>
                        </svg>
                    </a></p>
                </div>
                <div className='flex gap-[30px]  mt-[60px]'>
                    <MediaSharingItem />
                </div>
            </div>

        </section>
    )
}
export default MediaSharing