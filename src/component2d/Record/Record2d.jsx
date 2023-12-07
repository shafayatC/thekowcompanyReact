import CircleStyle2d from "./CircleStyle2d";


const Record2d = () => {
    return (
        <div className='bg-white pb-6'>
            <div className='bg-[#dee2e2] h-[200px]'></div>
            <div>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-6'>
                        <div className='grid grid-cols-1 gap-24 md:gap-0 md:grid-cols-4 justify-items-center -mt-24'>
                            <CircleStyle2d count="18M" title="2D Assets" recordTime="2020-21"/>
                            <CircleStyle2d count="40K" title="3D Assets" recordTime="PER DAY"/>
                            <CircleStyle2d count="9.2K" title="Video Assets" recordTime="2020-21" />
                            <CircleStyle2d count="54K" title="Backgrounds Removed" recordTime="FIVE YEARS" />
                        </div>
                        <div className='grid md:grid-cols-[100px_auto_100px] lg:grid-cols-3 justify-center gap-10 my-10'>
                            <h1 className='border-b border-[#7C9C30]'></h1>
                            <h1 className='text-[40px] text-center -mb-4 font-bold text-kow-text-black'>SUCCESS RECORD</h1>
                            <h1 className='border-b border-[#7C9C30]'></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Record2d;